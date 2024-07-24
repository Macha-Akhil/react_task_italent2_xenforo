// Overview.jsx (Example)
import React from "react";
import { useContext, useEffect, useState } from "react";
import { Dataarraysortedall } from "./Dataprovider2";

const Overview = ({ sortCriteria }) => {
  const sortedUsers = useContext(Dataarraysortedall);
  console.log("sortedUsers:", sortedUsers);

  // Data arrays fecthing from server side using django api ---------------------------------------------------------------------
  // const [dataarray, setDataarray] = useState([]);
  // useEffect(() => {
  //   fetchMembers();
  // });
  // async function fetchMembers() {
  //   try {
  //     const response1 = await fetch("/provider_sorted_data", {
  //       mode: "no-cors",
  //     });
  //     // console.log("response1:", response1);
  //     if (!response1.ok) {
  //       throw new Error(`HTTP error! Status: ${response1.status}`);
  //     }
  //     const dataarray = await response1.json();
  //     //console.log("dataarray:", dataarray);
  //     const dataArray = Object.values(dataarray);
  //     return setDataarray(dataArray);
  //   } catch (error) {
  //     console.error("Error fetching members:", error);
  //   }
  // }
  // // console.log("dataarray1:", dataarray);
  // // Sort the array based on the current sort criteria
  // const sortedUsers = dataarray.sort(
  //   (a, b) => b[sortCriteria] - a[sortCriteria]
  // );
  //  console.log("sortedUsers:", sortedUsers);

  // ------------------------------------------------------------------------------------------------------------------------
  return (
    // Assuming you want to display the first user's data from each category
    <div className="">
      {sortedUsers.slice(0, 20).map((user, index) => (
        /* // console.log(user), // console.log("index:", index), */
        <div key={index}>
          <hr />
          <div className="flex bg-gray-800 pt-4 pb-4">
            <li className="flex pl-2 ">
              {/* Left side: */}
              <div className="">
                <a href="" className="" data-user-id="521">
                  <img
                    src={user.avatar}
                    srcSet={user.avatar}
                    alt={user.login}
                    className="avatar-u521-s"
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                </a>
              </div>
              {/* middle side  */}
              <div className="pl-2">
                <div className="flex ">
                  <div className="text-blue-600 mb-1 w-80 pr-64">
                    {user.login}
                  </div>
                  <div className="text-blue-600  text-xl w-80 ml-64 pl-64 ">
                    {user[sortCriteria]}
                  </div>
                </div>

                <div className="text-white">
                  <ul className="flex">
                    <li className="pr-2">
                      <dl className="pairs pairs--inline">
                        <dt>Messages : {user.messages}</dt>
                      </dl>
                    </li>

                    <li className="pr-2">
                      <dl className="pairs pairs--inline">
                        <dt>Reactions : {user.reactions}</dt>
                      </dl>
                    </li>

                    <li className="pr-2">
                      <dl className="pairs pairs--inline">
                        <dt>Albums : {user.albums}</dt>
                      </dl>
                    </li>

                    <li className="pr-2">
                      <dl className="pairs pairs--inline">
                        <dt>Solutions : {user.solutions}</dt>
                      </dl>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;
