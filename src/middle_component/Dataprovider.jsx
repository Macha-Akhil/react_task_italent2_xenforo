import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMembers() {
      try {
        // console.log("Fetching members...");

        const response = await fetch(
          "https://italent2.demo.lithium.com/api/2.0/search",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              // message data
              {
                users: {
                  fields: ["avatar", "login", "messages.count(*)"],
                  limit: 100,
                },
              },
              // kudos data
              {
                users: {
                  fields: ["avatar", "login", "kudos_received.sum(weight)"],
                  limit: 100,
                },
              },
              //albums count data
              {
                users: {
                  fields: ["avatar", "login", "albums.count(*)"],
                  limit: 100,
                },
              },

              // most solutions data
              {
                users: {
                  fields: ["avatar", "login", "solutions_authored.count(*)"],
                  limit: 100,
                },
              },
              // Staff Members
              {
                users: {
                  fields: ["login", "avatar"],
                  limit: 100,
                },
              },
            ]),
          }
        );
        const responsedata = await response.json();
        // console.log(responsedata);
        // formatting the data

        const formatData = (data, key) => {
          return data.map((user) => ({
            avatar: user.avatar.profile,
            login: user.login,
            count:
              key === "kudos_received" ? user[key].sum.weight : user[key].count,
          }));
        };

        // Usage
        const msgformattedData = formatData(
          responsedata.data[0].items,
          "messages"
        );
        const kudosformattedData = formatData(
          responsedata.data[1].items,
          "kudos_received"
        );
        const albumsformattedData = formatData(
          responsedata.data[2].items,
          "albums"
        );
        const solutionsformattedData = formatData(
          responsedata.data[3].items,
          "solutions_authored"
        );
        // satff members
        const staffformattedData = responsedata.data[4].items.map((user) => ({
          login: user.login,
          avatar: user.avatar.profile,
        }));
        // console.log(staffformattedData);
        // sorting the data in particular way
        // const msgformattedData = responsedata.data[0].items.map((user) => ({
        //   avatar: user.avatar.profile,
        //   login: user.login,
        //   count: user.messages.count,
        // }));
        // sorting the data for particular data
        // const sortedMsgData = msgformattedData.sort(
        //   (a, b) => b.count - a.count
        // );
        const formattedData = {
          msgformattedData: msgformattedData,
          kudosformattedData: kudosformattedData,
          albumsformattedData: albumsformattedData,
          solutionsformattedData: solutionsformattedData,
        };

        const sortedData = {};

        Object.keys(formattedData).forEach((key) => {
          sortedData[key] = formattedData[key].sort(
            (a, b) => b.count - a.count
          );
        });

        // Extract sorted data arrays
        const sortedMsgData = sortedData.msgformattedData;
        const sortedKudosData = sortedData.kudosformattedData;
        const sortedAlbumsData = sortedData.albumsformattedData;
        const sortedSolutionsData = sortedData.solutionsformattedData;
        // const StaffData = sortedData.staffformattedData;

        setData([
          sortedMsgData,
          sortedKudosData,
          sortedAlbumsData,
          sortedSolutionsData,
          staffformattedData,
          //   solutionsAuthoredResponse,
          //   bonus_pointsResponse,
          //   dosReceivedResponse,
          //   sagesCountResponse,
          //   last_visit_timeResponse,
          //   staffResponse,
        ]);
        // console.log("data:", data);
        // -------------------------------------------------------------------------------------------------------------------------------
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    }

    fetchMembers();
  }, []);
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

// // // export default DataProvider;
