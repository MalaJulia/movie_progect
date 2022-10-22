import { Route, Routes} from "react-router-dom";

import {Theme} from "./components/themes";

import { Headers, MovieInfo, MoviesList} from "./components";

function App() {

  return (
<>
    <Headers/>
    <Theme/>
    <Routes>

        <Route path={'/'} element={<MoviesList/>}/>
            <Route path={'movie/:id'} element={<MovieInfo/>}/>

    </Routes>
</>
  );
}

export default App;
