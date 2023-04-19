const express = require("express");
const app = express();
const cors = require("cors");
const Users = require("./users");

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      // item.first_name.toLowerCase().includes(query) ||
      // item.last_name.toLowerCase().includes(query) ||
      // item.email.toLowerCase().includes(query)
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };
  console.log(q);
  res.json(search(Users).splice(0, 10));
});

app.listen(5000, () => console.log("API is working"));
