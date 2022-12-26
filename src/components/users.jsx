import Avatar from './avatar.jsx';

const Users = ({ members }) => {
    /** 
     * @Users component are used for showing user on @Contacts slide and @PrfoileInfoExtra
    */
    return (
        <>
            {
                members.map(({ userName, seenTime }, index) => {
                    return (
                        <li 
                            key={`user ${index}`} 
                            className='h-16 w-full items-center text-darkMode_toLightC dark:text-lightMode_toDarkC flex py-3 px-4 hover:bg-lightMode_lightC dark:hover:bg-darkMode_toLightC dark:hover:bg-opacity-60 hover:bg-opacity-60'
                        >
                            <Avatar size='12' />
                            <div className='w-full flex-col flex'>
                                <h4 className='font-medium h-5'>{userName}</h4>
                                <span className='text-sm dark:text-neutral-500 text-neutral-400'>{seenTime}</span>
                            </div>
                        </li>
                    )
                })
            }
        </>
    );
}
export default Users; 