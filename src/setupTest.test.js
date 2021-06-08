import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';  
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


describe('It is only a test.', () => {     
    test('Should return true', ()=>{
        expect(true).toBe(true);
        
    });
});