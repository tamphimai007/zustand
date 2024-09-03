import React, { useState } from "react";
import useTodoStore from "../../store/todo-store";
import { toast } from "react-toastify";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
const List = (props) => {
  const { item, index } = props;
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(item.title);

  const { delTodo, editTodo, changeStatus } = useTodoStore((state) => ({
    delTodo: state.delTodo,
    editTodo: state.editTodo,
    changeStatus: state.changeStatus,
  }));

  const handleDelToto = (id, title) => {
    delTodo(id);
    toast.success(`Deleted ${title} ok`);
  };

  const handleEdit = () => {
    setEdit(!edit);
    console.log(edit);
    // editTodo(id, newTitle);
  };

  const handleChangeTitle = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };
  const handleConfirm = (id) => {
    setEdit(!edit);
    editTodo(id, title);
    toast.success(`Edit ${title} Success!!`);
  };

  const handleChangeStatus = (id, status) => {
    changeStatus(id, status);
    toast.info(`Update status Ok`);
  };

  return (
    <div className="flex flex-row justify-between gap-2">
      <div
        className={`bg-${
          item.status ? "red" : "blue"
        }-100 border border-blue-900  py-4 p-6 
      rounded-md w-full text-left hover:scale-105 
      hover:duration-200 hover:shadow hover:cursor-pointer`}
      >
        {edit ? (
          <input
            className="rounded-md p-1 border px-3 w-full"
            type="text"
            defaultValue={item.title}
            onChange={handleChangeTitle}
          />
        ) : (
          <div
            className="relative"
            onClick={() => handleChangeStatus(item.id, !item.status)}
          >
            <p className={`${item.status ? "line-through" : ""}`}>
              {index + 1}. {item.title}
            </p>
            {/* <p className="absolute top-0 right-0">{`${item.status}`}</p> */}
          </div>
        )}
      </div>
      <div>
        {edit ? (
          <button
            className="bg-blue-100 py-4 p-6  h-full
          rounded-md  text-left hover:scale-105 
          hover:shadow-md hover:duration-200 hover:cursor-pointer 
          hover:-translate-y-1"
            onClick={() => handleConfirm(item.id)}
          >
            Confirm
          </button>
        ) : (
          <button
            disabled={item.status}
            className={`bg-${
              item.status ? "gray" : "yellow"
            }-100 py-4 p-6  h-full
          rounded-md  text-left hover:scale-105 
          hover:shadow-md hover:duration-200 hover:cursor-pointer 
          hover:-translate-y-1`}
            onClick={() => handleEdit(item.id, "tam")}
          >
            <GoPencil />
          </button>
        )}
      </div>

      <div>
        <button
          className="bg-red-100 py-4 p-6  h-full
      rounded-md  text-left hover:scale-105 
      hover:shadow-md hover:duration-200 hover:cursor-pointer 
      hover:-translate-y-1"
          onClick={() => handleDelToto(item.id, item.title)}
        >
          <RiDeleteBin7Fill color="red" />
        </button>
      </div>
    </div>
  );
};

export default List;
