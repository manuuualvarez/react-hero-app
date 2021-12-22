import { mount } from 'enzyme';
import { AppRouter } from '../../routes/AppRouter';
import { AuthContext } from '../../auth/authContext';


describe('AppRouter', () => {

    test('should show the login screen if the user is not logged', () => {

        const contextValue = {
            user: {
                logged: false
            }
        }

        const wrapper = mount(
        <AuthContext.Provider  value={contextValue} >
            <AppRouter />
        </AuthContext.Provider>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login Screen'); 
    })

    test('should show the marvel screen if the user is logged', () => {

        const contextValue = {
            user: {
                logged: true,
                name: 'Iron'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider  value={contextValue} >
                <AppRouter />
            </AuthContext.Provider>);
            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('.navbar').exists()).toBeTruthy();
        
    })
    
    


});
