"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TracieClient_1 = require("./TracieClient");
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
