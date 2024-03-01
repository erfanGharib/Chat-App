import { Provider } from 'react-redux';
import signinStore from '@/stores/signinStore';
import SignInForm from '@/components/signIn/form';
import PermissionDenied from './403';
import { getCookie } from 'cookies-next';
import Head from 'next/head';

/** 
 * if userToken exist
 * pass 200 statusCode 
 * and render signin page content
 * else render 403 page
**/
const SignIn = ({ statusCode }) => {
    return (
        statusCode === 200 ?
            <Provider store={signinStore}>
                <Head>
                    <title>SignIn</title>
                    <meta name="description" content="signin" />
                </Head>
                
                <div className='h-full w-full md:w-1/2 f-center bg-lightMode_toLightC'>
                    <SignInForm />
                </div>

                <div className='h-full bg-cover w-1/2 md:flex hidden bg-[url("../signInBg.jpg")]'></div>
            </Provider> :
            <PermissionDenied />
    );
}

SignIn.getInitialProps = ({ req, res }) => {
    const userToken = getCookie('userToken', { req, res });

    if (!userToken) return { statusCode: 200 }
    return { statusCode: 403 }
}

export default SignIn;
