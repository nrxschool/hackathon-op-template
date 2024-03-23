"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_1 = __importDefault(require("./util/db"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || '';
const apiName = process.env.API_NAME || '';
(0, db_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get(baseUrl, (req, res) => {
    res.send(`API ${apiName} is OK`);
});
app.use((err, req, res, next) => {
    console.error(`err: ${err}`);
    res.status(500).json({ errorMessage: err.message });
});
app.listen(port, () => console.log(`${apiName} running on port ${port}`));
