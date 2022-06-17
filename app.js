const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/:name", async (req, res) => {
  const { name } = req.params;
  const postPerPage = 11;
  let start = 0;

  switch (name) {
    case "xuat-ban":
      start = 1;
      break;

    case "xa-hoi":
      start = 2;
      break;

    case "the-gioi":
      start = 3;
      break;
    case "kinh-doanh":
      start = 3;
      break;
    case "cong-nghe":
      start = 3;
      break;
    case "suc-khoe":
      start = 3;
      break;
    case "the-thao":
      start = 3;
      break;
    case "giai-tri":
      start = 3;
      break;
    case "doi-song":
      start = 3;
      break;
    case "du-lich":
      start = 3;
      break;
    case "lifestyle":
      start = 3;
      break;
    default:
      start = 0;
  }
  const response = await axios.get("https://api.escuelajs.co/api/v1/products");

  res.json(
    response.data.slice(start * postPerPage, start * postPerPage + postPerPage)
  );
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Clm ${port}`);
});
