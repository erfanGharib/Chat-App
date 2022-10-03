import avatar_ from '../../assets/avatar.jpg';

const ProfileInfo = props => {
    const {profileType, membersNumber = null, seenTime = null, userName} = props;
    /**  
     * @profileType  
     * user = true
     * group = false
    */

    return (
        <div className='relative'>
            <img src={avatar_} alt="user avatar" />
            <div className='flex top-0 w-full h-full absolute'>
                <div className='overlay w-full mt-auto h-24 pb-3 px-6 flex-col flex justify-end'>
                    <h2 className='text-lightMode_toLightC text-2xl font-medium h-6 mb-0.5'>{userName}</h2>
                    {
                        profileType ? 
                        <span>{seenTime}</span> :
                        <span>{membersNumber}</span>
                    }
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo; 