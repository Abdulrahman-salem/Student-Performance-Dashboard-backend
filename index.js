const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(cors());

const studentsRoute = require("./routes/students");
const averageRoute = require("./routes/averages");


app.use(bodyParser.json());
app.use((request, response, next) => {
    console.log(`
  
  Incoming request: 
      http method: ${request.method}
      url: ${request.url}
      params: ${JSON.stringify(request.params)}
      query: ${JSON.stringify(request.query)}
      body: ${JSON.stringify(request.body)}
  `);
    next();
});

app.use("/data", studentsRoute);
app.use("/average", averageRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
