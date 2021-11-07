import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faWindowRestore,faTasks,faClipboardList, faTimes } from '@fortawesome/free-solid-svg-icons'
import React,{useState,useEffect} from 'react'
import { useLocation,useHistory } from "react-router-dom";
import {ToggleTheme} from '../Context';
const SideMenu=({setWidthForMainContainer=()=>{}})=>{
    let location = useLocation();
    let history = useHistory();
    const [open,SetOpen]=useState(false);
    useEffect(()=>{
        let navState=localStorage.getItem('nav')
        if(navState){
            SetOpen(navState)
            setWidthForMainContainer(navState)
        }
            SetOpen(false)
            setWidthForMainContainer(false)
        
    },[])
    const Route=[
        {
            name:'Dashboard',
            path:'/',
            icon: <FontAwesomeIcon width='30' height='30' icon={faWindowRestore}/>
        },
        {
            name:'Tasks',
            path:'/myTasks',
            icon: <FontAwesomeIcon width='30' height='30' icon={faTasks}/>
        },
        {
            name:'completed Tasks',
            path:'/completeTasks',
            icon: <FontAwesomeIcon width='30' height='30' icon={faClipboardList}/>
        },
        {
            name:'Theme ',
            path:null,
            icon: null
        }
    ]
    return(
    <nav className={open?"navigation":'navigation navigation_close'}>
  <div className="nav_icon" onClick={()=>{
      
      SetOpen(!open)
      setWidthForMainContainer(!open)
    localStorage.setItem('nav',!open)
}}>

    <FontAwesomeIcon icon={faBars} className='nav_icon_name'/>
  </div>
  <ul className="nav_list">
        {
            Route.map((w,i)=>{
                if(i===Route.length-1){
                   return(
                    <ToggleTheme/>
                   ) 
                }
                return(
                    <li onClick={()=>history.push(w.path)} className={location.pathname===w.path?'active list-item':"list-item"} data-tooltip={w.name}>
                    <a href={w.path}>
                    {w.icon}
                      <span className="text">{w.name}</span>
                    </a>
                  </li>  
                )
            })
        }
  </ul>
</nav>
    )
}

const Moblie=({setWidthForMainContainer=()=>{}})=>{
    const [open,SetOpen]=useState(false);
    return(
        <div className='navigation_mobile navigation_close'>

   <FontAwesomeIcon onClick={()=>{   
      SetOpen(!open)
      setWidthForMainContainer(!open)
    localStorage.setItem('mobileNav',!open)
}} icon={open?faBars:faTimes} className={!open?'flip-diagonal-2-tl nav_icon_name':'nav_icon_name '}/>

  
        </div>
    )
}

export {Moblie,SideMenu as default}
