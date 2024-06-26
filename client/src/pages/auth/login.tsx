import { authLoginSchema } from '../../../../shared/schemas/authSchema';
import AuthForm from '../../components/authForm';
import Layout from '../../components/layout';
import MainHead from '../../components/mainHead';
import useFormHandler from '../../utils/useFormHandler';

const Login = () => {
    const { send } = useFormHandler({
        endPoint: '/auth/login',
        validationSchema: authLoginSchema,
        onSuccess(res) {
            setTimeout(() => {
                location.replace('/app');
            }, 1000);
        },
    });

    return (
        <>
            <MainHead title='Login' description='Login' />
    
            <Layout>
                <AuthForm isSignup={false} send={send} inputs={authLoginSchema} />
            </Layout>
        </>
    );
}

export default Login;
