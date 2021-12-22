
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { PrivateRoute } from '../../routes/PrivateRoute';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span>Redirect to</span>
}))

describe('Test on Private Routes', () => {

    Storage.prototype.setItem = jest.fn();
    test('should show the component and save the data in localStorage ', () => {

        const contextValue = {
            user: {
                logged: true,
                name: 'Iron'
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper.find('h1').text().trim()).toBe('Private component');
        expect(localStorage.setItem).toHaveBeenCalledWith('lastLocation', '/');
    });

    test('should block the component if the user is not logged', () => {

        const contextValue = {
            user: {
                logged: false,
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        expect(wrapper.text().trim()).toBe('Redirect to');
        
    });
})
