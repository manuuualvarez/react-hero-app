import { mount } from "enzyme"
import { SearchScreen } from '../../../components/search/SearchScreen';
import { MemoryRouter } from 'react-router-dom';


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));


describe('Test Search Screen', () => {

    test('should show success without parameters', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search'] }>
                <SearchScreen />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-warning').text().trim()).toEqual('Please search some'); 
    });

    test('should show success with batman parameter', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=batman'] }>
                <SearchScreen />
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
    });

    test('should show danger alert when the result is empty', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=pokemon'] }>
                <SearchScreen />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-danger').text().trim()).toEqual('No heros with this filter with: pokemon'); 
    });

    test('should call the navigate function with the queryString', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search'] }>
                <SearchScreen />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', 
        { target: 
            { name: 'searchText',
            value: 'pokemon' } 
        });

        wrapper.find('form').prop('onSubmit')({ preventDefault: () => {} });
        expect(mockNavigate).toHaveBeenCalledWith('?q=pokemon');
        
    })
    


    
    
})
