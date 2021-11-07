import SideMenu,{Moblie} from "./SideMenu"
import { IsMobile } from "../utils/Mobile"
import { useEffect, useState } from "react"
const MasterPage=({children})=>{
    const [width,setWidth]=useState(84);
    const [updateValue,setupdateValue]=useState(false);
    useEffect(()=>{
        if(updateValue){
          let navigationBar=  document.getElementsByClassName('navigation')
          let currentWidth=10
          currentWidth=navigationBar&&navigationBar[0].clientWidth
          setWidth(currentWidth)
        }else{
            setWidth(84)
        }

    },[updateValue])
    return(
        <>
        {IsMobile()?(
            <>
                <Moblie  />
                <div className="MainContainerMobile">
                {children}
                </div>
            </>
            ):(
                <>
                <div className='MasterPageContainer'>
                <SideMenu setWidthForMainContainer={(value)=>{
                    setupdateValue(value)
                }}/>
                <div className="MainContainer" style={{
                    width:`calc(100vw - ${width}px - 20px)`,
                    marginLeft:`calc(${width}px + 1rem)`
                }}>
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