import {PieChart2} from './PieCharts'
import React,{useEffect,useState} from 'react'
const Card=()=>{
    let data=JSON.parse(localStorage.getItem('tasksList'))
    const DefaultValue=[
        { name: "Completed", value: 10 }, 
        { name: "Total", value: 16},
    ]
    const [tasks,setTasks]=useState({
        totalTasks:0,
        complete:0,
    })
    const [DataPieChartLists=DefaultValue,setDataPieChartLists]=useState()
    useEffect(()=>{
        if(data){
           let totalTasks= data.length
        let complete=data.filter(w=>w.complete).length
        let temp=DataPieChartLists
        temp[1].value=totalTasks
        temp[0].value=complete
        setDataPieChartLists(temp)

        setTasks({
            totalTasks,
            complete
        })
    }
},[])

console.log('DataPieChartLists: ', DataPieChartLists);

    return(
        <div className='CardOuterContainer'>
            <div className='CardContainer'>
                <div className='leftContainer'>
                    <div className='pieChart'>
                    <PieChart2 data={DataPieChartLists}/>
                    </div>
                    <div className="textContainer">
           <h4> Task Completed</h4>
           <p>{tasks.complete} / {tasks.totalTasks} completed</p> 
                    </div>
                </div>
                <div className='rightContainer' >
                <h4> Weekly Report</h4>
                <div className="vertical-line"></div>
                </div>
            </div>
        </div>
    )
}

export default Card