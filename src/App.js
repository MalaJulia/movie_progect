import { Headers, MovieListCard, MovieInfo, MoviesList} from "./components";


import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layaut/MainLayaut";

function App() {


  return (
<>
    <Headers/>

    <Routes>
        <Route path={'/'} element={<MoviesList/>}/>

            <Route path={'movie/:id'} element={<MovieInfo/>}/>

    </Routes>
</>
  );
}

export default App;
