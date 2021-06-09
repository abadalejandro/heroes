import { MemoryRouter, Router } from 'react-router-dom';
import { mount } from "enzyme";
import '@testing-library/jest-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';

describe('Test in <Navbar />.', () => {
    const historyMock = {
        push: jest.fn(),
        location: {},       
        listen:jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn(),
    }

    const userName: string = 'Luchus';
    const contextValue = {
        dispatch: jest.fn(),
        user: { logged: true, name: userName }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter >
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );
    afterEach(()=>{
        jest.clearAllMocks();
    });

    test('Should show correctrly.', () => {
        const userName = wrapper.find('#userName').text().trim();
        expect(userName).toBe(userName);
    });

    test('Should call layout and must to use the history object.', () => {
        const fun: any = wrapper.find('button').prop('onClick');
        fun();
        expect(contextValue.dispatch).toHaveBeenCalledWith({ type: 'logout' });
        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });


});