import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/layout/HomePage";
import Main from "./components/layout/Main";
import MoviePageDetails from "./components/layout/MoviePageDetails";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path={"/"} element={<HomePage></HomePage>}></Route>
          <Route path={"/movies"} element={<MoviePage></MoviePage>}></Route>
          <Route
            path={"/movies/:movieID"}
            element={<MoviePageDetails></MoviePageDetails>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
