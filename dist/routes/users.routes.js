"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var typeorm_1 = require("typeorm");
var CreateUserService_1 = __importDefault(require("../modules/user/services/CreateUserService"));
var DeleteUserService_1 = __importDefault(require("../modules/user/services/DeleteUserService"));
var UpdateUserService_1 = __importDefault(require("../modules/user/services/UpdateUserService"));
var UsersRepository_1 = __importDefault(require("../modules/user/typeorm/repositories/UsersRepository"));
var usersRouter = express_1.Router();
usersRouter.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, name_1, year, uf, sex, createUser, user, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = request.body, email = _a.email, password = _a.password, name_1 = _a.name, year = _a.year, uf = _a.uf, sex = _a.sex;
                createUser = new CreateUserService_1.default();
                return [4 /*yield*/, createUser.execute({
                        email: email,
                        password: password,
                        name: name_1,
                        year: year,
                        uf: uf,
                        sex: sex,
                    })];
            case 1:
                user = _b.sent();
                return [2 /*return*/, response.json(user)];
            case 2:
                err_1 = _b.sent();
                return [2 /*return*/, response.status(400).json({ error: err_1.message })];
            case 3: return [2 /*return*/];
        }
    });
}); }); //Is working
usersRouter.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var usersRepository, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                usersRepository = typeorm_1.getCustomRepository(UsersRepository_1.default);
                return [4 /*yield*/, usersRepository.find()];
            case 1:
                users = _a.sent();
                return [2 /*return*/, response.json(users)];
        }
    });
}); }); //Is working
usersRouter.put('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, email, password, name, year, uf, sex, updateUserService, psicologo, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = request.params.id;
                _a = request.body, email = _a.email, password = _a.password, name = _a.name, year = _a.year, uf = _a.uf, sex = _a.sex;
                updateUserService = new UpdateUserService_1.default();
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, updateUserService.execute({
                        email: email,
                        password: password,
                        name: name,
                        year: year,
                        uf: uf,
                        sex: sex,
                        id: id
                    })];
            case 2:
                psicologo = _b.sent();
                return [2 /*return*/, response.status(200).json(psicologo)];
            case 3:
                err_2 = _b.sent();
                return [2 /*return*/, response.status(400).json({ error: err_2.message })];
            case 4: return [2 /*return*/];
        }
    });
}); }); //Is working
usersRouter.delete('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deleteUserService, psicologo, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                deleteUserService = new DeleteUserService_1.default();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, deleteUserService.execute(id)];
            case 2:
                psicologo = _a.sent();
                return [2 /*return*/, response.status(200).json(psicologo)];
            case 3:
                err_3 = _a.sent();
                return [2 /*return*/, response.status(400).json({ error: err_3.message })];
            case 4: return [2 /*return*/];
        }
    });
}); }); //Is working
exports.default = usersRouter;
