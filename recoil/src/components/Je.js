import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export default function Je() {
  const count = useRecoilValue(textState);
  return <div>title</div>;
}
