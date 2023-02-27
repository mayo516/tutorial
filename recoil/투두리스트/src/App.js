import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import Contents from "./components/Contents";
function App() {
  return (
    <RecoilRoot>
      <Contents />
    </RecoilRoot>
  );
}

export default App;
