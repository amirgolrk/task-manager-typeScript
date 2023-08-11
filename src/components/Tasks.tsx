// eslint-disable-next-line react/prop-types, no-unused-vars
import TasksList from "./TasksList";


// eslint-disable-next-line react/prop-types
const Tasks = ({items,onDeleteItem}) => {
  return (
    <>
      <TasksList onDeleteItem={onDeleteItem} items={items}/>
    </>
  );
};
export default Tasks;
