import React from 'react';
import AddBtn from './AddBtn';
import ProgressBar from './Progress'
const Category=({name='New Category',color,completedTask=0,TotalTasks=0})=>{
    const [percentage,setPercentage]=React.useState(0)
    React.useEffect(()=>{
        if(completedTask!==0||TotalTasks!==0){
            setPercentage(( completedTask/TotalTasks*100).toFixed(0))
        }
        // eslint-disable-next-line
    },[])
    return(
        <div className='categoryItem'>
             <ProgressBar
              progress={percentage}
              size={130}
              strokeWidth={10}
              circleOneStroke="rgb(220,220,220)"
              circleTwoStroke={color}
            />
            <div className='categoryBody'>
                <h4>{name}</h4>
                <div className='categoryAdd'>
                <AddBtn/>
                <h6>Add</h6>
                </div>
            </div>
                <div style={{width:'100%',fontSize:'18px'}}>
               {completedTask} / {TotalTasks} completed
                </div>
            <div className='categoryColor'/>

        </div>
    )
}

export default Category