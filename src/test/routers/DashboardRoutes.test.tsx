import { mount, ReactWrapper } from 'enzyme';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';


describe('Test in DashboardRoutes', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: { logged: true, name: 'Juanito' }
    }

    test('Should show correctly', () => {
        const wrapper = mount(<AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <DashboardRoutes />
            </MemoryRouter>
        </AuthContext.Provider>);
        expect(wrapper.find('.text-info').text().trim()).toBe('Juanito');
    });

});