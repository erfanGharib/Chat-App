const Btn = (
    { className, onBtnClick, text }:
    { className: string, onBtnClick: (e: any) => void, text: string}
) => {
    return (
        <button
            onClick={e => {
                onBtnClick(e);
            }}
            className={`${className} relative`}
            type='button'
        >
            {text}
        </button>
    );
}
export default Btn;