/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
//import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { useDispatch } from "react-redux";
import { useAppDispatch } from "../reduxHook";
import { AddTask } from "../Features/todoSlice";
import { getTasks } from "../Features/todoSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";




const ModalOverlay = ({ onInput, onConfirm } : {onInput : any,onConfirm : () => void}) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescribe, setEnteredDescribe] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [toggle, setToggle] = useState<boolean>(false);
  const dispatch = useAppDispatch(); // Get the dispatch function
  const navigateTo = useNavigate();
  const submitHandler = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ownerAndId = Number(localStorage.getItem("id"))
    const newTaskData = {
      userId: ownerAndId,
      owner: ownerAndId,
      title: enteredTitle,
      description: enteredDescribe,
      done: !toggle,
      date: new Date(enteredDate).getTime(),
    };

    /*const token = localStorage.getItem("token");
          const headers = { Authorization: `Bearer ${token}` };*/

    try {
      // Dispatch the AddTask action with the new task data
      await dispatch(
        AddTask({
          newTaskData,
          onFail: () => {
            toast.error("error", {
              position: "top-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          },
        })
      );
      await dispatch(
        getTasks({
          onSuccess: () => {},
          onFail: () => {
            navigateTo("/login");
          },
        })
      );
      console.log(newTaskData);
      setEnteredTitle("");
      setEnteredDescribe("");
      setEnteredDate("");
      setToggle(false);
      onConfirm(); // Call onConfirm to close the modal
    } catch (error : any) {
      console.log(error?.response?.data);
      toast.error(error?.response?.data, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="rounded-5 modalStyle">
      <div className="container">
        <h3 className="mt-1">New Task</h3>
        <form
          onSubmit={(e) => {
            onConfirm();
            submitHandler(e);
          }}
        >
          <div className="form-group">
            <label htmlFor="taskTitle">Task Title:</label>
            <input
              type="text"
              className="form-control"
              id="taskTitle"
              placeholder="Enter your title"
              name="title"
              onChange={(e) => setEnteredTitle(e.target.value)}
              value={enteredTitle}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              className="form-control"
              id="description"
              placeholder="Enter description"
              name="description"
              rows={3}
              onChange={(e) => setEnteredDescribe(e.target.value)}
              value={enteredDescribe}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Enter Date:</label>
            <input
              type="date"
              className="form-control mb-2"
              id="date"
              placeholder="Enter Date"
              name="date"
              onChange={(e) => setEnteredDate(e.target.value)}
              value={enteredDate}
              required
            />
          </div>
          <label htmlFor={"checkbox"}> done ?</label>
          <input
            type="checkbox"
            className="form-check-input rounded-circle ms-2"
            style={{ transform: "scale(1.5)" }}
            id="checkbox"
            name="checkbox"
            //value={Math.floor(Math.random() * 1000)}
            checked={!toggle}
            onChange={() => {
              setToggle(!toggle);
            }}
          />
          <button type="submit" className="btn btn-primary mt-1 float-end">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalOverlay;
