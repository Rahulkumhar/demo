import { ADD_TO_COUNT, REMOVED_TO_COUNT, RESET_TO_COUNT } from "./constant";

export const addToCount = (data) => {
  console.warn("addToCount action  is called", data);
  return {
    type: ADD_TO_COUNT,
    data,
  };
};

export const removedToCount = (data) => {
  console.warn("addTodo action is called", data);
  return {
    type: REMOVED_TO_COUNT,
    data,
  };
};

export const emptyToCount = () => {
  console.warn("emptyTodo action is called");
  return {
    type: RESET_TO_COUNT,
  };
};
