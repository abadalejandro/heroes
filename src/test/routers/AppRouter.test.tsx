import {  mount } from "enzyme";
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';


describe('Test in AppRouter component.', ()=> {
    const contextValue = {
        dispatch: jest.fn(),
        user: {logged: false}
    }
    test('Should show login if it is not authenticated.', ()=>{
        const wrapper = mount(<AuthContext.Provider value={contextValue}><AppRouter /></AuthContext.Provider>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show Marvel component if it is authenticated.', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {logged: true, name: 'Romulo'}
        }
        const wrapper = mount(<AuthContext.Provider value={contextValue}><AppRouter /></AuthContext.Provider>);
        expect(wrapper.find('a').contains('Marvel')).toBe(true);
    });
});