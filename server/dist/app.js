"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
let item = {
    name: "Coffee",
    price: 20,
    description: "Coffie is good for you",
    icon: "coffee"
};
let items = [item];
app.get('/', (req, res, next) => {
    res.send(items);
});
app.listen(5000, () => {
    console.log('app start at port 5000');
});
