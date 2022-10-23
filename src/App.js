import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from "react-router-dom";


import "./App.css"

import { Headers, MovieInfo, MoviesList} from "./components";

function App() {

  return (
<div className={"mainContainer"}>

    <Headers/>

    <Routes>
        <Route path={'/'} element={<MoviesList/>}/>
        <Route path={'movie/:id'} element={<MovieInfo/>}/>
    </Routes>

</div>
  );
}

export default App;
