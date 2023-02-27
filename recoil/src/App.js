import "./App.css";
import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import CharacterCounter from "./components/CharacterCounter.js";
import Je from "./components/Je";
function App() {
  return (
    <RecoilRoot>
      <Je />
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
