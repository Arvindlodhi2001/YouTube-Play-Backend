import express, { urlencoded } from "express";
import cors from "cors";
import cookiesParser from "cookies-parser";

const app = express();

// This is using for request come from our fronton
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// This is using for  Middleware file storage and Come data Storage
app.use(express.json({ limit: "16kb" }));

// This is using for come data from url like https://localhost:4500/user/name%20Arvind&&Age%2035 this types od data encoded
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// This is using for come file from frontend so one specif folder in the saved
app.use(express.static("public"));

// This is cookies
app.use(cookiesParser);

export { app };
