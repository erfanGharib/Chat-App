import { T_SigninStoreReducers } from '@/types/T_SigninStoreReducers';
import { useSelector } from 'react-redux';
import EnterCode from './enterCode';
import EnterEmail from './enterEmail';

const SignInForm = () => {
    const { IS_EMAIL_FORM } = useSelector((state: T_SigninStoreReducers) => state.$_form);
    
    return (
        <div id='signInForm' className='max-w-[270px] flex-col text-darkMode_toLightC flex justify-start w-3/4 md:w-1/2'>
            {IS_EMAIL_FORM ? <EnterEmail /> : <EnterCode />}
        </div>
    );
}

export default SignInForm;
