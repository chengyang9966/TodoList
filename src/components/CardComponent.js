import ProgressBar from "./Progress";

import React, { useEffect, useState } from "react";
const Card = () => {
  let data = JSON.parse(localStorage.getItem("tasksList"));
  const DefaultValue = [
    { name: "Completed", value: 0 },
    { name: "Total", value: 0 },
  ];
  const [tasks, setTasks] = useState({
    totalTasks: 0,
    complete: 0,
  });
  const [percent, setPercent] = useState(0);
  const [DataPieChartLists = DefaultValue, setDataPieChartLists] = useState();
  useEffect(() => {
    if (data) {
      let totalTasks = data.length;
      let complete = data.filter((w) => w.complete).length;
      let temp = DataPieChartLists;
      temp[1].value = totalTasks;
      temp[0].value = complete;
      console.log("temp: ", temp);
      setPercent((complete / totalTasks) * 100);
      setDataPieChartLists(temp);

      setTasks({
        totalTasks,
        complete,
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="CardOuterContainer">
      <div className="CardContainer">
        <div className="leftContainer">
          <div className="pieChart">
            <ProgressBar
              progress={percent}
              size={150}
              strokeWidth={10}
              circleOneStroke="rgb(220,220,220)"
              circleTwoStroke="var(--bg-Yellow) "
            />
          </div>
          <div className="textContainer">
            <h4> Task Completed</h4>
            <p style={{fontWeight:'bold'}}>
              {tasks.complete} / {tasks.totalTasks} completed
            </p>
          </div>
        </div>
        <div className="rightContainer">
          <h4> Report</h4>
          <div className="vertical-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
