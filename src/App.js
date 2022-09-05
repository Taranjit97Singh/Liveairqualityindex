import React, { useState } from "react";
import {Routes,Route} from 'react-router-dom';
import NotState from "./NoteContext/NotState";
import Page1 from "./Page1";
import ViewMore from "./ViewMore";

export default function App() {
  const [hidden, setHidden] = useState(true);

  
  return (
    <NotState>
       <Routes>
        <Route exact path="/" element={<Page1 />}></Route>
        <Route path="/viewmore" exact element={<ViewMore />}>
        </Route>
     </Routes>
    </NotState>
  );
}
