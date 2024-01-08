// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() =>
    app.listen(process.env.PORT || 5500, () => {
      console.log(
        `Server running on port :- https://localhost${process.env.PORT}`
      );
    })
  )
  .catch((error) => console.log(`MONGODB Connection Field  !!! ${error} `));
