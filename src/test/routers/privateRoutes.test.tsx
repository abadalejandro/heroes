import '@testing-library/jest-dom'
import { mount } from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe('Test in PrivateRoutes', () => {
    const props = {
        location:{
            pathname: '/marvel'
        }
    } 

    Storage.prototype.setItem = jest.fn();
    
    test('Should show if the component is authenticated and save in localsotrage', () => {
        const wrapper = mount(<MemoryRouter><PrivateRoute isAuthenticated={true} component={()=><span>Hello</span>} {...props}/></MemoryRouter>);
        expect(wrapper.find('span').exists()).toBe(true); 
    });

    test('Should block the component if it is not authenticated.', () => {
        const wrapper = mount(<MemoryRouter><PrivateRoute isAuthenticated={false} component={()=><span>Hello</span>} {...props}/></MemoryRouter>);
        expect(wrapper.find('span').exists()).toBe(false); 
    });
    
});