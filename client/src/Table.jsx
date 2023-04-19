import React from "react";

const Table = ({ data }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
          {data.map((cur) => (
            <tr key={cur.id}>
              <td>{cur.first_name}</td>
              <td>{cur.last_name}</td>
              <td>{cur.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
