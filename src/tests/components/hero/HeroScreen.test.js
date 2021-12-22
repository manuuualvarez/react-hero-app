
import { mount } from 'enzyme';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/hero/HeroScreen';


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () =>  mockNavigate
}));


describe('Test on HeroScreen', () => {
    test('should not show hero screen if the url not contain a hero', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path="/hero" element={<HeroScreen />} />
                    <Route path="/" element={<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
        )

        expect(wrapper.find('h1').text().trim()).toBe('No hero page');
    });

    test('should show hero if the hero exist', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroId" element={<HeroScreen />} />

                </Routes>
            </MemoryRouter>
        )

        expect(wrapper.find('.row').exists()).toBe(true);
    });

    test('should show the latest page', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroId" element={<HeroScreen />} />

                </Routes>
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();
        expect(mockNavigate).toHaveBeenCalledWith(-1);

    });


    test('should show No Hero Page', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spiderhsjakdhskjdhsa']}>
                <Routes>
                    <Route path="/hero/:heroId" element={<HeroScreen />} />
                    <Route path="/" element={<h1>No hero page</h1>} />

                </Routes>
            </MemoryRouter>
        )
        
        expect(wrapper.find('h1').text().trim()).toBe('No hero page');
    });
})
