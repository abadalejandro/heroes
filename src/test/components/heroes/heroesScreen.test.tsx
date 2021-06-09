import { mount } from "enzyme";
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';



describe('Tests in <HeroScreen />', () => {
    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    
    test('should show redirect component if there is no arguments in the URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']} >
                <HeroScreen history={historyMock} />
            </MemoryRouter>            
        );
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('should show an hero if the parameter exists and if was finded', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-superman']} >
                <Route path="/hero/:heroId" component={HeroScreen} />
            </MemoryRouter>
        );
        // console.log('wrapper: ', wrapper.html());
        expect(wrapper.find('.row').exists()).toBe(true);
    })

    test('should return to previous screen with PUSH.', () => {
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),            
        }
        const wrapper = mount(            
            <MemoryRouter initialEntries = {['/hero/marvel-spider']}>
                <Route 
                    path = '/hero/:heroId'
                    component = { (props:any) => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter>
        )
       
        wrapper.find('button').prop('onClick')!({} as any);
        expect(historyMock.push).toHaveBeenCalledWith('/');
        expect(historyMock.goBack).not.toHaveBeenCalled();
    });
    test('should return to previous screen with GOBACK.', () => {
    
        const wrapper = mount(            
            <MemoryRouter initialEntries = {['/hero/marvel-spider']}>
                <Route 
                    path = '/hero/:heroId'
                    component = { (props:any) => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter>
        )
        // console.log('wrapper: ', wrapper.html());
        // console.log('history: ', historyMock);
        wrapper.find('button').prop('onClick')!({} as any);;
        expect(historyMock.push).toHaveBeenCalledTimes(0);
        expect(historyMock.goBack).toHaveBeenCalled();
    });
   
    test('should return redirect if hero does not exists.', () => {
    
        const wrapper = mount(            
            <MemoryRouter initialEntries = {['/hero/marvel-spider12']}>
                <Route 
                    path = '/hero/:heroId'
                    component = { (props:any) => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter>
        )
        expect(wrapper.text()).toBe('');
    });

})
