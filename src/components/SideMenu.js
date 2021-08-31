import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faWindowRestore,faTasks } from '@fortawesome/free-solid-svg-icons'
import React,{useState,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { IsMobile } from '../utils/Mobile';
const SideMenu=()=>{
    let location = useLocation();
    const [open,SetOpen]=useState(false);
    useEffect(()=>{
        let navState=localStorage.getItem('nav')
        if(navState){
            SetOpen(navState)
        }
        SetOpen(false)
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
    ]
    return(
    <nav className={open?"navigation":'navigation navigation_close'}>
  <div className="nav_icon" onClick={()=>{
      
      SetOpen(!open)
    localStorage.setItem('nav',!open)
}}>
    <FontAwesomeIcon icon={faBars} className='nav_icon_name'/>
  </div>
  <ul className="nav_list">
        {
            Route.map(w=>{
                return(
                    <li className={location.pathname===w.path?'active list-item':"list-item"} data-tooltip={w.name}>
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

const Moblie=()=>{
    const [open,SetOpen]=useState(false);
    return(
        <nav className='navigation_mobile navigation_close'>
  <div  onClick={()=>{   
      SetOpen(!open)
    localStorage.setItem('mobileNav',!open)
}}>
    <FontAwesomeIcon icon={faBars} className='nav_icon_name'/>
  </div>
        </nav>
    )
}

export {Moblie,SideMenu as default}
