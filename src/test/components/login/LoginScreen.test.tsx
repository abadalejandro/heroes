import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';

const history = {
    replace: jest.fn()
}

const contextValue = {
    dispatch: jest.fn(),
    user: { logged: false }
}

const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
        <LoginScreen history={history} />
    </AuthContext.Provider>);

describe('Test in <LoginScreen />', () => {

    test('Should show it correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should do the dispatch and navigation', () => {
        const handleClick:any = wrapper.find('button').prop('onClick');
        handleClick();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: 'login', payload: {name: 'ale'}
        });
        expect(history.replace).toHaveBeenCalledWith('/');
        localStorage.setItem('lastPath', '/dc');
        handleClick();
        expect(history.replace).toHaveBeenCalledWith('/dc');

    });

})
