import { create } from "zustand";
import { persist } from "zustand/middleware";

const todoStore = (set) => ({
  todos: [
    { id: 1, title: "work1", status: true },
    { id: 2, title: "work2", status: false },
  ],
  addTodo: (newValue) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          title: newValue,
        },
      ],
    })),
  delTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((item, index) => item.id !== id),
    })),
  editTodo: (id, newTitle) =>
    set((state) => ({
      todos: state.todos.map((item, index) =>
        item.id == id ? { ...item, title: newTitle } : item
      ),
    })),
    changeStatus:(id,newStatus)=>set((state)=>({
        todos: state.todos.map((item,index)=> item.id== id ?{...item, status:newStatus}: item)
    }))
});

const usePersist = {
  name: "todo-store",
  getStorage: () => localStorage,
};

const useTodoStore = create(persist(todoStore, usePersist));

export default useTodoStore;
