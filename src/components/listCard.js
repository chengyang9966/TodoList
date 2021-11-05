import ConvertText from "../utils/CapitalText";
import React, { useState, useEffect } from "react";
import PopUp from "./PopUp";
import InputComponent from "./InputComponent";
const ListCard = ({ title, data, index, complete, completed,deleteTask,activeTask,editTasks }) => {
  console.log("completed: ", title,completed);
  const [open, SetOpen] = useState(false);
  const [error, SetError] = useState(false);
  const [popUpData, SetPopUpData] = useState({
    open: false,
    name: "",
    desc: "",
    action:"",
  });
  const [editData, SetEditData] = useState({
    open: false,
    name: "",
    desc: "",
  });
  useEffect(() => {
    setInterval(() => SetError(false), 5000);
  }, [error]);
  return (
    <>
      <div className="listCardContainer" onClick={()=>completed&& SetPopUpData({
                        open: true,
                        name: title,
                        desc:`Do you want to active this ${title} ?`,
                        action:'active'
                      })} >
        <h4>{title}</h4>
        {completed ? (
          <hr className="line-through" />
        ) : (
          data&& <div onClick={() => SetOpen(!open)} className="dots" />
        )}
        {open && (
          <div
            tabIndex={index}
            onBlur={() => SetOpen(false)}
            onMouseLeave={() => SetOpen(false)}
            className="dropDownContainer"
          >
            {data.map((w) => {
              return (
                <div
                  onClick={() => {
                    if (w.edit) {
                      SetEditData({
                        open: true,
                        name: title,
                        action:w.name
                      });
                      SetPopUpData({
                        ...popUpData,
                        name: title,
                        action:w.name
                      });
                      SetOpen(false)
                      // return
                    }else if(w.name==='complete'){
                      complete()
                      SetOpen(false)
                    }else {
                      SetPopUpData({
                        open: true,
                        name: title,
                        desc: `Do you want to ${w.name} this ${title} ?`,
                        action:w.name
                      });
                      SetOpen(false);
                    }
                  }}
                >
                  {ConvertText(w.name)}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {popUpData.open && (
        <PopUp
          disableOkBtn={error}
          title={popUpData.name}
          description={popUpData.desc}
          CloseBtn={() => {
            SetPopUpData({
              open: false,
            });
          }}
          okBtn={() => {
            popUpData.action==='delete'?deleteTask() :
            popUpData.action==='active'?activeTask():
            complete();
            SetPopUpData({
              open: false,
            });
          }}
        />
      )}
      {editData.open && (
        <PopUp
          disableOkBtn={error}
          title={popUpData.name}
          description={
            <InputComponent
              title="Tasks"
              onChange={(e) =>
                SetEditData({
                  ...editData,
                  name: e.target.value,
                })
              }
              value={editData.name}
              errorText={error && "Please Provide input value"}
            />
          }
          CloseBtn={() => {
            SetEditData({
              open: false,
            });
          }}
          okBtn={() => {
            editTasks(editData.name)
            SetEditData({
              open: false,
            });
          }}
        />
      )}
    </>
  );
};

export default ListCard;
