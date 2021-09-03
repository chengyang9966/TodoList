import React from "react";
import { PieChart, Pie, Label, Cell } from "recharts";
import { IsMobile } from "../utils/Mobile";
const PieChart2=({data})=>{
    let Percent=data[0].value===0?100:(data[0].value*100/data[1].value).toFixed(0 )
    const COLORS=[ "white" , "var(--bg-Yellow)"]
    console.log('Percent: ', Percent);
    return (
        <PieChart width={200} height={280} >
          <Pie
          isAnimationActive={false}
            data={data}
            cx={70}
            cy={70}
            innerRadius={IsMobile()?40:55}
            outerRadius={IsMobile()?50:65}
            fill="var(--bg-Yellow)"
            dataKey="value"
          >
            {data.map((entry, index) => {
              console.log('entry: ', entry.value % COLORS.length);
              return(  <Cell
                key={`cell-${index}`}
                fill={COLORS[entry.value % COLORS.length]} 
              />)
              })}
              <Label className='labelText' position="center">
                  {`${Percent}%`}
              </Label>
          </Pie>
        </PieChart>
      );
}



export {PieChart2}



