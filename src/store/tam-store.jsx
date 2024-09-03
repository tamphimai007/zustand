// Step 1 Create a store
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const tamStore = (set) => ({
  fname: "roitai dev",
  lname: "ฝากกดติดตามด้วยนะครับ",
  setName: (newValue) => set({ fname: newValue }),
  value: 0,
  incNum: () => set((state) => ({ value: state.value + 1 })),
  decNum: () => set((state) => ({ value: state.value - 1 })),

  arr1: [],
  addTodo: (newValue) =>
    set((state) => ({
      arr1: [...state.arr1, newValue],
    })),
  delTodo: (idx) =>
    set((state) => ({
      arr1: state.arr1.filter((item, index) => index !== idx),
    })),

  arr2: [
    { id: 1, title: "work1" },
    { id: 2, title: "work2" },
  ],
  addObj: (newValue) =>
    set((state) => ({
      arr2: [
        ...state.arr2,
        {
          id: Date.now(),
          title: newValue,
        },
      ],
    })),
  delObj: (id) =>
    set((state) => ({
      arr2: state.arr2.filter((item, index) => item.id !== id),
    })),

  // TODO Section 5
  data: [],
  isLoading: false,
  error: false,
  errorMsg: "",
  getData: async () => {
    try {
      set({ isLoading: true, error: false });
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      set({ isLoading: false, data: res.data });
    } catch (err) {
      set({ error: true, errorMsg: err.message, isLoading: false });
    }
  },
});

const usePersist = {
    name: 'roitai-store',
    getStorage : ()=> localStorage,
    partialize: (state)=>({
        fname: state.fname
    })
}

const useStore = create(persist(tamStore,usePersist));

export default useStore;
