"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TracieClient_1 = __importDefault(require("./TracieClient"));
(function (host) {
    let tracieGlobal = new TracieClient_1.default({ server: "" });
    let tc = (name, params) => {
        return tracieGlobal.add(name, params);
    };
    tc.initiate = function (configs) {
        tracieGlobal.setEndpoint(configs.server);
    };
    host.tc = tc;
})(window);
