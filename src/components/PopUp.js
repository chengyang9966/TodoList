import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const PopUp=({title,description,disableOkBtn,CloseBtn,okBtn})=>{
      useEffect(() => {
        const  handleKeyPress = (event) => {
            if(event.key === 'Enter'){
                okBtn()
            }
            if(event.key === 'Escape'){
                CloseBtn()
            }
    
          }
          window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
      }, [])



    return(
        <div  tabIndex='1' className="wrapperContainer">
        <div className="popUpWrapper">
            <div className='popUpHeader'>
            <h3>{title}</h3>
            <FontAwesomeIcon onClick={CloseBtn} className='CloseBtn' icon={faTimes}/>
            </div >
            <div  className='popUpBody'>
                  {description}
            </div>
            <div  className='popUpFooter'>
                 {CloseBtn&& <button onClick={CloseBtn} className='closeBtnFooter'>
                        Close
                    </button>}
                    {okBtn&&<button  disabled={disableOkBtn} onClick={okBtn} className='closeBtnFooter'>
                        Ok
                    </button>}
            </div>
        </div>
        </div>
    )
}
export default PopUp 