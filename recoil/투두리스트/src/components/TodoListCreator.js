import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { todoListState } from "./Contents";
export default function TodoListCreator() {
  //   const [a, b] = useRecoilState();
  //   console.log(a);
  const [a, b] = useRecoilState(todoListState);

  console.log(a);
  return <div>제작기</div>;
}
