import BackBtn from "./backBtn";

const SideBarHeader = ({backBtnFunc, content}) => {
    return (
        <div id='profileSidebar-header' className='side-bar-header bg-lightMode_lightC pr-3 pl-1'>
            <BackBtn func={backBtnFunc} />
            {content}
        </div>
    );
}
export default SideBarHeader;