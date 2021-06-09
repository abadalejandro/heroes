import {  mount } from "enzyme";
import { AppRouter } from '../../routers/AppRouter';
import { useContext } from "react";
import { AuthContext } from '../../auth/AuthContext';
import {MemoryRouter} from 'react-router-dom';



describe('Test in AppRouter component.', ()=> {
    const contextValue = {
        dispatch: jest.fn(),
        user: {logged: false}
    }
    test('Should show login if it is not authenticated.', ()=>{
        const wrapper = mount(<AuthContext.Provider value={contextValue}><AppRouter /></AuthContext.Provider>);
        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
    });

    test('Should show Marvel component if it is authenticated.', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {logged: true, name: 'Romulo'}
        }
        const wrapper = mount(<AuthContext.Provider value={contextValue}><AppRouter /></AuthContext.Provider>);
        // console.log(wrapper.html());
        expect(wrapper.find('a').contains('Marvel')).toBe(true);
    });
});