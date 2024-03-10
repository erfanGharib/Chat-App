import Link from "next/link";
import { T_Send } from "../utils/useFormHandler";
import SubmitBtn from "./buttons/submitBtn";
import Err from "./err";

interface T_Props {
    send: T_Send;
    inputs: { [key: string]: any };
    className?: string;
    isSignin: boolean;
}

const AuthForm = ({ send, inputs, isSignin, className = '' }: T_Props) => {
    const title = (_isSignin = isSignin) => _isSignin  ? 'signin' : 'login';

    return (
        <div className='h-full w-full f-center'>
        <div className='f-start-start w-96 flex-col'>
            <h1 className='text-sky-500 capitalize text-3xl font-bold mb-3'>
                {title()}
            </h1>
            <form
                onSubmit={send}
                id='loginForm'
                className='flex flex-col w-full mb-5'
            >
                {
                    Object.entries(inputs).map(([ key ]) => (
                        <>
                            <input
                                name={key}
                                placeholder={key.replace('usr_', '')}
                                className='mt-2 placeholder:capitalize w-full'
                            />
                            <Err />
                        </>
                    ))
                }
                <SubmitBtn className='!f-center !w-full mt-3' text={title()} />
            </form>
            
            <div className="flex text-sm ml-auto">
                <span className="mr-1 opacity-40">
                    {isSignin ? 'Already have an Account?' : 'Don\'t have an Account?'}
                </span>
                
                <Link className="underline opacity-80 capitalize" href={`/auth/${title(!isSignin)}`}>
                    {title(!isSignin)}
                </Link>
            </div>
        </div>
    </div>
    );
}

export default AuthForm;