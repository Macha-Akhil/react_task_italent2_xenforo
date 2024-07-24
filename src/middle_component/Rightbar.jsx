import React, { createContext, useState, useEffect, useContext } from "react";
import { DataContext } from "./Dataprovider.jsx";
import { json, Link } from "react-router-dom";
import { Dataarraysortedall } from "../nextpages/Dataprovider2.jsx";
const Card = (props) => {
  const [hoveredUser, setHoveredUser] = useState(null);
  const sortedarrayall = useContext(Dataarraysortedall);
  // console.log("sortedarray:", sortedarrayall);
  // function for mouseover effect
  let timeoutId;
  const handleMouseEnter = (user, sortedarrayall) => {
    // console.log("user:", user, "sortedarrayall:", sortedarrayall);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      let matchedUser = null;
      // Iterate through the keys of sortedarrayall and find the user by login
      Object.keys(sortedarrayall).forEach((key) => {
        if (sortedarrayall[key].login === user) {
          matchedUser = sortedarrayall[key];
        }
      });
      // console.log("matchedUser:", matchedUser);
      if (matchedUser) {
        setHoveredUser(matchedUser);
      }
    }, 1500);
  };
  // function for mouseleave effect
  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setHoveredUser(null);
  };
  // ----------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="border border-gray-300 p-4 rectangular-lg shadow mb-5 w-70 rounded h-96 ">
      <div className="title">
        <Link to={`/${props.title}`}>
          <h3 className="text-blue-500 mb-2 cursor-pointer hover:underline">
            {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
          </h3>
        </Link>
      </div>
      {props.items.slice(0, 5).map((item) => (
        // {props?.items.map((item) => (
        <div className="body flex items-center mb-2" key={item.login}>
          <img
            className="profile w-12 h-12 mr-2 rounded-full"
            src={item.avatar}
            alt={item.login}
            onMouseEnter={() => handleMouseEnter(item.login, sortedarrayall)}
            onMouseLeave={handleMouseLeave}
          />
          <div className="name flex-grow mr-3">{item.login}</div>
          <div className="points  mr-3">{item.count}</div>
        </div>
      ))}
      {/* data to display on hover */}
      {hoveredUser && (
        <div className="absolute right--16 top-10 bg-gray-500 border border-gray-300 p-4 shadow-lg rounded-lg z-50">
          <div className="flex">
            {/* <div className="absolute top-0 left-0 bg-gray-500 p-4 shadow-lg rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"> */}
            <img
              className="profile w-24 h-24 mb-2 rounded-full"
              src={hoveredUser.avatar}
              alt={hoveredUser.login}
            />
            <h4 className="text-white text-2xl pl-5">{hoveredUser.login}</h4>
          </div>
          <hr className=" my-2" />
          <div className="flex text-white">
            <p className="mr-2">Messages: {hoveredUser.messages}</p>
            <p className="mr-2">Reactions: {hoveredUser.reactions}</p>
            <p className="mr-2">Solutions: {hoveredUser.solutions}</p>
            <p className="mr-2">Albums: {hoveredUser.albums}</p>
          </div>
        </div>
      )}
      <div className="see-more">
        <Link to={`/${props.title}`}>
          <button className="bg-gray-200 border border-gray-300 px-4 py-2 w-full rounded cursor-pointer hover:bg-gray-300">
            See more
          </button>
        </Link>
        {/* <button
          className="bg-gray-200 border border-gray-300 px-4 py-2 w-full rounded cursor-pointer hover:bg-gray-300"
          onClick={({}) => (window.location.href = `/${props.title}`)}
        >
          See more
        </button> */}
      </div>
    </div>
  );
};

function Run2() {
  const data = useContext(DataContext);
  console.log("data:", data);

  // // fetching the data from server side using django api ---------------------------------------------------------------------
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetchMembers();
  // });
  // async function fetchMembers() {
  //   try {
  //     const response = await fetch("/provider_data", {
  //       mode: "no-cors",
  //     });
  //     const data = await response.json();
  //     // console.log("data_values:", data);
  //     const dataArray = Object.values(data);
  //     // console.log("dataArray:", dataArray);
  //     return setData(dataArray);
  //   } catch (error) {
  //     console.error("Error fetching members:", error);
  //   }
  // }
  // console.log("data:", data);
  // ------------------------------------------------------------------------------------------------------------------------

  return (
    // <div
    //   className="RightMain"
    //   style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
    // >
    <div>
      {data && data.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <Card title="mostmessages" items={data[0]} />
          <Card title="mostreactions" items={data[1]} />
          <Card title="mostalbums" items={data[2]} />
          <Card title="mostsolutions" items={data[3]} />
          <Card title="staffmembers" items={data[4]} />
        </div>
      )}
    </div>
  );
}

// export default RightMain;
export default Run2; // RightMain, Run2;
