
import { Navbar } from '../../../components/ui/NavBar';
import { mount } from 'enzyme';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { types } from '../../../types/types';


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () =>  mockNavigate
}));



describe('Test NavBar component', () => {

    const contextValue = {
        user: {
            logged: true,
            name: 'test',
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider  value={contextValue} >
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Navbar />} />
                </Routes>
            </MemoryRouter>

        </AuthContext.Provider>
    )

    test('should show successfully', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('test');        
    });

    test('should call logout function with navigate, dispatch and properties', () => {
        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalledWith({"type": types.logout});
        expect(mockNavigate).toHaveBeenCalledWith('/login', {replace: true});
    });

});
