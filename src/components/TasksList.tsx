/* eslint-disable react/prop-types */
//import React from "react";
import { useEffect,useState } from "react";
import TaskItem from "./TaskItem";

const TasksList = ({ items, onDeleteItem }) => {
  useEffect(()=>{
    setLoading(false)
  },[items])
  const [loading ,setLoading]=useState(false)
 
  console.log(items);
  //fixed key from elem.userId to ${elem.userId}-${index} to make it unique
    return (
    <>{items?.[0] ? <>
      {!loading && items?.map((elem,index) => (
        <TaskItem
        setLoading={setLoading}
          onDeleteItem={onDeleteItem}
          key={`${elem.userId}-${index}`}
          userId={elem.userId}
          owner={elem.owner}
          id={elem.id}
          title={elem.title}
          description={elem.description}
          date={elem.date}
          image={elem.image}
          done={elem.done}
        />
      ))} </>:<h2 className="mt-3" style={{textAlign:"center"}}>No tasks found</h2>}
   
    </>
  );
};

export default TasksList;
