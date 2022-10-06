import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileInfoExtra = ({data}) => {
    return (
        <div className='p-3'>
            {
                data.map(({ico, value, label}) => {
                    return (
                        <div className='w-full f-center-between'>
                            <FontAwesomeIcon 
                                icon={ico} 
                                size='xl' 
                                className='dark:text-neutral-600 w-14 py-5 mr-3'
                            />
                            <div className='flex flex-col mr-auto'>
                                <span className='text-darkMode_toLightC dark:text-lightMode_toDarkC font-medium'>{value}</span>
                                <span className='dark:text-neutral-500'>{label}</span>
                            </div>
                            {/* <span className='px-500 w-1/4'></span> */}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProfileInfoExtra;