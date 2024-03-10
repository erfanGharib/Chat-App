const Err = ({ msg = '' }: { msg?: string }) => {
    return <p className='capitalize err mt-0.5 text-red-400 text-xs w-full'>{msg}</p>
}

export default Err;