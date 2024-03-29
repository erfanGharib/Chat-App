import { authSignupSchema } from '../../../../shared/schemas/authSchema';
import AuthForm from '../../components/authForm';
import Layout from '../../components/layout';
import MainHead from '../../components/mainHead';
import useFormHandler from '../../utils/useFormHandler';

const Signup = () => {
    const { send } = useFormHandler({
        endPoint: '/auth/signup',
        validationSchema: authSignupSchema,
        onSuccess() {
            setTimeout(() => {
                location.replace('/app');
            }, 1000);
        },
    });

    return (
        <>
            <MainHead title='Signup' description='Signup' />
    
            <Layout>
                <AuthForm isSignup send={send} inputs={authSignupSchema} />
            </Layout>
        </>
    );
}

export default Signup;
