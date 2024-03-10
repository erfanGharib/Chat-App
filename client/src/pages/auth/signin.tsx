import useFormHandler from '../../utils/useFormHandler';
import Head from 'next/head';
import AuthForm from '../../components/authForm';
import { authSiginSchema } from '../../../../shared/schemas/authSchema';
import Layout from '../../components/layout';
import Page403 from '../403';
import { sharedConfigs } from '../../../../shared/sharedConfigs';
import { getCookie } from 'cookies-next';

const Signin = ({ forbidden }) => {
    const { send } = useFormHandler({
        endPoint: '/auth/signin',
        validationSchema: authSiginSchema,
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
                <title>Signin</title>
                <meta name="description" content="ChatApp - Signin" />
            </Head>
    
            <Layout>
                <AuthForm isSignin send={send} inputs={authSiginSchema} />
            </Layout>
        </> :
        <Page403 />
    );
}
export const getServerSideProps = ({ req, res }) => {
    const forbidden = getCookie('token', { req, res })?.startsWith(sharedConfigs.BEARER_KEYWORD) ?? false
    
    return { props: { forbidden } }
}

export default Signin;
