import React,{useState,useEffect} from 'react';
import MasterPage from '../components/MaterLayout';
import ListCard from "../components/listCard";
const CompleteTasks=()=>{
    const [completeTasksList,SetCompleteTasks]=useState([]);
    useEffect(() => {
       let tastList= JSON.parse( localStorage.getItem('tasksList'));

        if(tastList){
            SetCompleteTasks( tastList.filter(w=>w.complete))
        }
    }, [])
   
    return(
        <MasterPage>
        <div className='AddTaskContainer'>
        <h3>Completed Tasks</h3>
        <div style={{ width: "100%" }}>
        {
            completeTasksList.map((w,i)=>{
               return(
                <ListCard
                title={w.title}
                // data={temp}
                // completed={w.complete}
                index={i}
              /> 
               ) 
            })
        }
        </div>
        </div>
        </MasterPage>
    )
}

export default CompleteTasks