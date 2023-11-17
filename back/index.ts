import express, { Express, Request, Response } from "express";

import { db } from "./global/db_global";

const app: Express = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/friends", (req: Request, res: Response) => {
  db.query("SELECT * FROM friends", (error: Error, results: any) => {
    if (error) {
      throw error;
    }
    res.json(results);
  });
});

app.listen(2005, () => {
  console.log(`Server is running at http://localhost:${2005}`);
});
