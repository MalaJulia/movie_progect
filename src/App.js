import { Route, Routes} from "react-router-dom";

import {Theme} from "./components/themes";
import "./App.css"

import { Headers, MovieInfo, MoviesList} from "./components";

function App() {

  return (
<div className={"container"}>
    <Headers/>
    <Theme/>
    <Routes>

        <Route path={'/'} element={<MoviesList/>}/>
            <Route path={'movie/:id'} element={<MovieInfo/>}/>

    </Routes>
</div>
  );
}

export default App;
