import { REMOVED_TO_COUNT, ADD_TO_COUNT, RESET_TO_COUNT } from "./constant";

export const countData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_COUNT:
      console.warn("reducer ADD_TO_COUNT", action);
      return [action.data, ...data];
    case REMOVED_TO_COUNT:
      console.warn("reducer REMOVED_TO_COUNT", action);
      data.length = data.length ? data.length - 1 : [];
      return [...data];
    case RESET_TO_COUNT:
      console.warn("reducer RESET_TO_COUNT", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
