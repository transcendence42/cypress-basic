"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Counter_js_1 = __importDefault(require("./modules/Counter.js"));
function App() {
    new Counter_js_1.default({ $app: document.querySelector("#app") });
}
exports.default = App;
App();
