"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_global_1 = require("./global/db_global");
const app = (0, express_1.default)();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/friends", (req, res) => {
    db_global_1.db.query("SELECT * FROM friends", (error, results) => {
        if (error) {
            throw error;
        }
        res.json(results);
    });
});
app.listen(2005, () => {
    console.log(`Server is running at http://localhost:${2005}`);
});
