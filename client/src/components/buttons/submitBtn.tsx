import Btn from './btn';

interface T_Props {
    className?: string;
    text?: string;
    children?: any;
}

const SubmitBtn = ({ text = null, children = null, className = '' }: T_Props) => (
    <Btn type='submit' className={`${className} w-max btn-secondary`}>
        {children || text}
    </Btn>
);

export default SubmitBtn;