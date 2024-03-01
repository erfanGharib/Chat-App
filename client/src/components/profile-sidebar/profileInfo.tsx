import Avatar from "../avatar";

const ProfileInfo = props => {
    const {profileType, membersNumber = null, seenTime = null, userName} = props;
    /**  
     * @profileType  
     * user = true
     * group = false
    */

    return (
        <div className='relative mb-3'>
            <Avatar size={"full"} className="" />
            <div className='flex top-0 w-full h-full absolute'>
                <div style={{background: 'linear-gradient(#00000000, #000000dd)'}} className='w-full mt-auto h-24 pb-3 px-6 flex-col flex justify-end'>
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