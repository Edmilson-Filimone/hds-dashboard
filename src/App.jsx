import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";


function App() {
  //collapse sidebar function that will be passed and triggered in child component, basically readjust the grid layout on main page (parent)
  const [collapse, setCollapse] = useState('sidebar-expand')
  const changeLayout = (collapseState) => {
    setCollapse(collapseState)
  }
  return (
    <>
    <BrowserRouter>
    <section className={`md:grid ${collapse} m-0 gap-2 grid-rows-size`}>
      <div className="col-span-1 row-span-3"><Sidebar layout={changeLayout}/></div>
      <section className="col-start-2 col-span-4 row-span-full">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </section>
    </section>
    </BrowserRouter>
    </>
  );
}

export default App;
