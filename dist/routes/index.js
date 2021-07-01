"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_routes_1 = __importDefault(require("./users.routes"));
var psicologos_routes_1 = __importDefault(require("./psicologos.routes"));
var pots_routes_1 = __importDefault(require("./pots.routes"));
var sessions_routes_1 = __importDefault(require("./sessions.routes"));
var routes = express_1.Router();
routes.use('/user', users_routes_1.default);
routes.use('/psicologo', psicologos_routes_1.default);
routes.use('/posts', pots_routes_1.default);
routes.use('/sessions', sessions_routes_1.default);
exports.default = routes;
