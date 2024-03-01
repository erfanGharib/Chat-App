import { configureStore } from '@reduxjs/toolkit';
import { $_errMsg } from './reducers/_errMsg';
import { $_form } from './reducers/_form';
import { $_userEmail } from './reducers/_userEmail';

const signinStore = configureStore({
    reducer: {
        $_errMsg: $_errMsg.reducer,
        $_userEmail: $_userEmail.reducer,
        $_form: $_form.reducer,
    },
});
export default signinStore;