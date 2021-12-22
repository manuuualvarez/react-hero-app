
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';



describe('test on Auth Reducer', () => {

    test('should return default state', () => {

        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});

    });

    test('should auth and set name of user', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Jhon',
            }
        }

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            name: 'Jhon',
            logged: true
        });
    })

    test('should remove user name and logged set in false', () => {

        const user = {
            name: 'Jhon',
            logged: true
        }

        const state = authReducer(user, { type: types.logout });
        expect(state).toEqual({
            logged: false
        });
        
    });
    
    

});