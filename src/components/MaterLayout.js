import SideMenu,{Moblie} from "./SideMenu"
import { IsMobile } from "../utils/Mobile"
const MasterPage=({children})=>{
    return(
        <>
        {IsMobile()?(
            <>
                <Moblie/>
                <div className="MainContainerMobile">
                {children}
                </div>
            </>
            ):(
                <>
                <div className='MasterPageContainer'>
                <SideMenu/>
                <div className="MainContainer">
                    <div/>
                {children}
                <div/>
                </div>
             </div>
                </>
            )}
    </>
    )


}

export default MasterPage