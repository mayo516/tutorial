import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import TodoListCreator from "./TodoListCreator";
export const todoListState = atom({
  key: "todoListState",
  default: [],
});
export default function Contents() {
  //   const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <TodoListCreator />
      {/* {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))} */}
    </div>
  );
}
