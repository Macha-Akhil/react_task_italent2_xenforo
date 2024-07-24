// import { useState } from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import "./App.css";
import Navbar from "./middle_component/topnavbar.jsx";
import Middlebar from "./middle_component/mainbar.jsx";
// import Overview from "./nextpages/overview.jsx";
// import Run2 from "./middle_component/Rightbar.jsx";

function App() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      {/* /* /* <MemoryRouter initialEntries={["/t5/custom/page/page-id/_xenforo_akhil"]}> */}
      {/* <BrowserRouter>  */}
      <div>
        <Navbar />
        <br />
        <Middlebar />
      </div>
      {/* </BrowserRouter> */}
    </MemoryRouter>
  );
}

export default App;
