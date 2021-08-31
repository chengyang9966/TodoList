import React from "react";
import { PieChart, Pie, Label, Cell } from "recharts";
import { IsMobile } from "../utils/Mobile";
const PieChart2=({data})=>{
    let NEWDATA= [
        { name: "On Progress", value: 16},
        { name: "Completed", value: 10 },
    ]
    let Percent=data[0].value===0?100:(data[1].value*100/data[0].value).toFixed(0 )
    const COLORS=[ "white" , "var(--bg-Yellow)"]
    console.log('Percent: ', Percent);
    return (
        // <ResponsiveContainer minHeight='100px' minWidth='100px' width="100%" height="80%">
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
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[entry.value % COLORS.length]} 
              />
            ))}
              <Label className='labelText' position="center">
                  {`${Percent}%`}
              </Label>
          </Pie>
        </PieChart>
        // </ResponsiveContainer>
      );
}



export {PieChart2}



