import { useContext } from "react";
import { DataContext } from "../middle_component/Dataprovider.jsx";
import { createContext } from "react";
import { useEffect, useState } from "react";

export const Dataarraysortedall = createContext();
// export const Dataarrayall = createContext();
export const Dataprovider2 = ({ sortCriteria, children }) => {
  const data = useContext(DataContext);
  // console.log("total data", data);
  // Initialize an object to store organized data
  const organizedData = {};
  // Loop through each array in data
  Object.keys(data).forEach((key) => {
    const dataArray = data[key];

    // Loop through each item in the dataArray
    dataArray.forEach((item) => {
      const { avatar, login, count } = item;

      // Check if the login already exists in organizedData, if not, initialize it
      if (!organizedData[login]) {
        organizedData[login] = {
          avatar: avatar,
          login: login,
          messages: 0,
          reactions: 0,
          albums: 0,
          solutions: 0,
        };
      }

      // Determine which property to assign count based on the array index (key)
      // Adjust this based on your specific mapping from the data arrays to these properties
      if (key === "0") {
        organizedData[login].messages += count;
      } else if (key === "1") {
        organizedData[login].reactions += count;
      } else if (key === "2") {
        organizedData[login].albums += count;
      } else if (key === "3") {
        organizedData[login].solutions += count;
      }
    });
  });
  // Now organizedData will have each login as keys with their corresponding avatar and counts

  const organizedDataArray = Object.values(organizedData);
  // console.log("organizedDataArray:", organizedDataArray);

  // Sort the array based on the current sort criteria
  const sortedUsers = organizedDataArray.sort(
    (a, b) => b[sortCriteria] - a[sortCriteria]
  );
  // console.log("sortedUsers:", sortedUsers);

  return (
    <Dataarraysortedall.Provider value={sortedUsers}>
      {children}
    </Dataarraysortedall.Provider>
    // <Dataarraysortedall.Provider value={sortedUsers}>
    //   <Dataarrayall.Provider value={data}>{children}</Dataarrayall.Provider>
    // </Dataarraysortedall.Provider>
  );
};
