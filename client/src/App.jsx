import React, { useState, useEffect } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./Table";
import axios from "axios";
const App = () => {
  const [query, setQuery] = useState("");
  // console
  //   .log
  //   Users.filter((user) => user.first_name.toLowerCase().includes("fe"))
  //   ();

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);

      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);

  // const search = (data) => {
  //   return data.filter((item) =>
  //     // item.first_name.toLowerCase().includes(query) ||
  //     // item.last_name.toLowerCase().includes(query) ||
  //     // item.email.toLowerCase().includes(query)
  //     keys.some((key) => item[key].toLowerCase().includes(query))
  //   );
  // };
  return (
    <>
      <div className="app">
        <input
          type="text"
          placeholder="search..."
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* <ul className="list">
          {Users.filter((user) =>
            user.first_name.toLowerCase().includes(query)
          ).map((user) => (
            <li key={user.id} className="listItem">
              {user.first_name}
            </li>
          ))}
        </ul> */}
        <Table data={data} />
      </div>
    </>
  );
};

export default App;
