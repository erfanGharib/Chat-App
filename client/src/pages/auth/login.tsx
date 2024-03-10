import useFormHandler from '../../utils/useFormHandler';
import { authLoginSchema } from '../../../../shared/schemas/authSchema';
import Head from 'next/head';
import AuthForm from '../../components/authForm';
import Layout from '../../components/layout';
import Page403 from '../403';
import { sharedConfigs } from '../../../../shared/sharedConfigs';
import { getCookie } from 'cookies-next';

const Login = ({ forbidden }) => {
    const { send } = useFormHandler({
        endPoint: '/auth/login',
        validationSchema: authLoginSchema,
        onSuccess() {
            setTimeout(() => {
                location.replace('/app');
            }, 1000);
        },
    });

    return (
        !forbidden ?
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="ChatApp - Login" />
            </Head>
    
            <Layout>
                <AuthForm isSignin={false} send={send} inputs={authLoginSchema} />
            </Layout>
        </> :
        <Page403 />
    );
}

export const getServerSideProps = ({ req, res }) => {
    const forbidden = getCookie('token', { req, res })?.startsWith(sharedConfigs.BEARER_KEYWORD) ?? false
    
    return { props: { forbidden } }
}

export default Login;
