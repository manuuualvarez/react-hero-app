import { mount }  from 'enzyme';
import { DashboardRoutes } from '../../routes/DashboardRoutes';
import { AuthContext } from '../../auth/authContext';
import { MemoryRouter } from 'react-router-dom';


describe('Test Dashboard Routes', () => {

    const contextValue = {
        user: {
            logged: true,
            name: 'Iron'
       }
    }

    test('should show correctly - Marvel Screen', () => {
        const wrapper = mount(
            <AuthContext.Provider  value={contextValue} >
                <MemoryRouter initialEntries={ ['/'] }>
                    <DashboardRoutes />
                </MemoryRouter>
                
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toEqual('Iron');
        expect(wrapper.find('h1').text().trim()).toEqual('Marvel Screen');
    });

    test('should show correctly - DC Screen ', () => {
        const wrapper = mount(
            <AuthContext.Provider  value={contextValue} >
                <MemoryRouter initialEntries={ ['/dc'] }>
                    <DashboardRoutes />
                </MemoryRouter>
                
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toEqual('DC Screen');
    });
    
})
