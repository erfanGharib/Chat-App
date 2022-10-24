import Avatar from '../avatar.jsx';

const ProfileSharedMedia = props => {
    const {members = null, medias = null} = props;
    return (
        <div id='profileSidebar-sharedMedia' className='shadow-sm border-b mt-2 bg-lightMode_toLightC dark:bg-darkMode_lightC dark:border-b-darkMode_lightC border-b-lightMode_darkC'>
            <div className='w-full h-12 flex border-b dark:border-darkMode_darkC border-lightMode_darkC z-10'>
                <button className='border-b-2 px-3 border-b-sky-500'>Media</button>
                <button className='px-3'>Members</button>
            </div>
            
            <ul>
                {
                    medias === null ?
                    members.map(({userName, seenTime}, i) => {
                        return (
                            <li key={`user ${i}`} className='h-16 w-full items-center text-darkMode_toLightC dark:text-lightMode_toDarkC flex p-3 hover:bg-lightMode_toLightC'>
                                <Avatar size='10' />
                                <div className='w-full flex-col flex'>
                                    <h4 className='font-medium h-5'>{userName}</h4>
                                    <span className='text-sm dark:text-neutral-500 text-neutral-400'>{seenTime}</span>
                                </div>
                            </li>
                        );
                    }) :
                    medias.map(({}) => {
                        return (
                            <li className='h-16 w-full items-center text-darkMode_toLightC flex p-3'>
                                <Avatar size='10' />
                                <div className='w-full flex-col flex'>
                                    <h4 className='text-darkMode_toLightC font-medium h-5'>Erfan</h4>
                                    <span className='text-sm opacity-50'>last seen recently</span>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}
export default ProfileSharedMedia; 