import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Leftmiddlebaframe from "./leftbar.jsx";
import Run2 from "./Rightbar.jsx";
import Overview from "../nextpages/overview.jsx";
import { DataProvider } from "./Dataprovider.jsx";
import Leftbottom from "./left_bottom.jsx";
import { Dataprovider2 } from "../nextpages/Dataprovider2.jsx";

function Middlebar() {
  return (
    // <Router>
    <div className="flex ">
      <div className="flex-row ml-16">
        <Leftmiddlebaframe />
        <Leftbottom />
      </div>
      <div className="flex">
        <DataProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Dataprovider2>
                  <div className="">
                    <Run2 />
                  </div>
                </Dataprovider2>
              }
            />
            <Route
              path="/mostmessages"
              element={
                <Dataprovider2 sortCriteria="messages">
                  <Overview sortCriteria="messages" />
                </Dataprovider2>
              }
            />
            <Route
              path="/mostreactions"
              element={
                <Dataprovider2 sortCriteria="reactions">
                  <Overview sortCriteria="reactions" />
                </Dataprovider2>
              }
            />
            <Route
              path="/mostalbums"
              element={
                <Dataprovider2 sortCriteria="albums">
                  <Overview sortCriteria="albums" />
                </Dataprovider2>
              }
            />
            <Route
              path="/mostsolutions"
              element={
                <Dataprovider2 sortCriteria="solutions">
                  <Overview sortCriteria="solutions" />
                </Dataprovider2>
              }
            />
            <Route
              path="/mostpoints"
              element={<div>Most points Items Component</div>}
            />
            <Route
              path="/mostresources"
              element={<div>Most Resources Component</div>}
            />
            <Route
              path="/mostmedia"
              element={<div>Most Media Items Component</div>}
            />
            <Route
              path="/todaybirthday"
              element={<div>Today's Birthday Component</div>}
            />
            <Route
              path="/staffmembers"
              element={
                <Dataprovider2 sortCriteria="staffmembers">
                  <Overview sortCriteria="staffmembers" />
                </Dataprovider2>
              }
            />
          </Routes>
        </DataProvider>
      </div>
    </div>
  );
}

export default Middlebar;
