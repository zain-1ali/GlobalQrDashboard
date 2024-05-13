import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

let Analytics = lazy(() => import("./pages/Analytics"));
let History = lazy(() => import("./pages/History"));
let Create = lazy(() => import("./pages/Create"));
let Login = lazy(() => import("./pages/Login"));
let Signup = lazy(() => import("./pages/Signup"));

function App() {
  return (
    <>
      {" "}
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/history" element={<History />} />
            <Route path="/create" element={<Create />} />
            <Route path="/create">
              <Route path=":id" element={<Create />} />
              <Route path="" element={<Create />} />
            </Route>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
