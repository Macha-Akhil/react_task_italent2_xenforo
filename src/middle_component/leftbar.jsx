import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const Leftmiddlebaframe = () => {
  return (
    <div className="w-30 bg-gray-800 text-white p-5 mr-10 rounded h-30 h-screen-fit">
      {/* <div className=" left-inside-container text-dar "> */}
      <h5 className="text-yellow-500 text-2xl">Members</h5>
      <hr className="border-white my-2" />
      <p className="mb-2 hover:bg-gray-500 rounded  ">
        <Link to="/" className="text-white ">
          Overview
        </Link>
      </p>
      <p className="mb-2  hover:bg-gray-500 rounded">
        <Link to="/mostmessages" className="text-white ">
          Most Messages
        </Link>
      </p>

      <p className="mb-2  hover:bg-gray-500 rounded">
        <Link to="/mostreactions" className="text-white">
          Most Reaction Score
        </Link>
      </p>
      <p className="mb-2  hover:bg-gray-500 rounded">
        <Link to="/mostalbums" className="text-white">
          Most Albums
        </Link>
      </p>
      <p className="mb-2  hover:bg-gray-500 rounded ">
        <Link to="/mostsolutions" className="text-white">
          Most Solutions
        </Link>
      </p>
      <p className="mb-2  hover:bg-gray-500 rounded ">
        <Link to="/mostpoints" className="text-white">
          Most Points
        </Link>
      </p>
      <p className="mb-2  hover:bg-gray-500 rounded ">
        <Link to="/mostresources" className="text-white">
          Most Resources
        </Link>
      </p>
      <p className="mb-2  hover:bg-gray-500 rounded">
        <Link to="/mostmedia" className="text-white">
          Most Media Items
        </Link>
      </p>
      <p className="mb-2  hover:bg-gray-500 rounded">
        <Link to="/todaybirthday" className="text-white">
          Today's Birthday
        </Link>
      </p>
      <p className="mb-2  hover:bg-gray-500 rounded ">
        <Link to="/staffmembers" className="text-white">
          Staff Members
        </Link>
      </p>
      {/* </div> */}
    </div>
  );
};

export default Leftmiddlebaframe;
