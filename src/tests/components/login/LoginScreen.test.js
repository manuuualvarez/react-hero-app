

import { mount } from 'enzyme';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { types } from '../../../types/types';
import { LoginScreen } from '../../../components/login/LoginScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () =>  mockNavigate
}));


describe('Test on Login Screen', () => {

    const contextValue = {
        user: {
            logged: false,
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider  value={contextValue} >
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    )
    
    
    test('should show succesfully', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call dispatch and make the navigation', () => {
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();
        
        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: { name: 'Manny Alvarez' }
        });

        expect( mockNavigate ).toHaveBeenCalledWith('/marvel', { replace: true });

        localStorage.setItem('lastLocation', '/dc')

        handleClick();

        expect( mockNavigate ).toHaveBeenCalledWith('/dc', { replace: true });
    });
    
    
})
