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
var DeletePsicologoService_1 = __importDefault(require("../modules/psicologo/services/DeletePsicologoService"));
var CreatePsicologoService_1 = __importDefault(require("../modules/psicologo/services/CreatePsicologoService"));
var UpdatePsicologoService_1 = __importDefault(require("../modules/psicologo/services/UpdatePsicologoService"));
var PsicologosRepository_1 = __importDefault(require("../modules/psicologo/typeorm/repositories/PsicologosRepository"));
var psicologosRouter = express_1.Router();
psicologosRouter.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, name_1, year, uf, sex, crp, phone, city, description, speciality, createPsicologo, psicologo, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = request.body, email = _a.email, password = _a.password, name_1 = _a.name, year = _a.year, uf = _a.uf, sex = _a.sex, crp = _a.crp, phone = _a.phone, city = _a.city, description = _a.description, speciality = _a.speciality;
                createPsicologo = new CreatePsicologoService_1.default();
                return [4 /*yield*/, createPsicologo.execute({
                        email: email,
                        password: password,
                        name: name_1,
                        year: year,
                        uf: uf,
                        sex: sex,
                        crp: crp,
                        phone: phone,
                        city: city,
                        description: description,
                        speciality: speciality
                    })];
            case 1:
                psicologo = _b.sent();
                return [2 /*return*/, response.json(psicologo)];
            case 2:
                err_1 = _b.sent();
                return [2 /*return*/, response.status(400).json({ error: err_1.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
psicologosRouter.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var psicologoRepository, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                psicologoRepository = typeorm_1.getCustomRepository(PsicologosRepository_1.default);
                return [4 /*yield*/, psicologoRepository.find()];
            case 1:
                users = _a.sent();
                return [2 /*return*/, response.json(users)];
        }
    });
}); });
/*
    BUSCA TODOS OS POSTS DE UM USUARIO PSICOLOGO
psicologosRouter.get('/:id', async(request, response)=>{

    const { id } = request.params;
    const psicologoRepository = getCustomRepository(PsicologosRepository);
    const postsRepository = getCustomRepository(PostsRepository);
    const users = await psicologoRepository.findOne({
        where: { id }
    });

    const posts = await postsRepository.find({
        where: { id_author: id }
    })

    return response.json({
        user: users,
        posts: posts
    });
}) */
psicologosRouter.put('/:id', function (request, response) {
    var id = request.params.id;
    var _a = request.body, email = _a.email, password = _a.password, name = _a.name, year = _a.year, uf = _a.uf, sex = _a.sex, crp = _a.crp, phone = _a.phone, city = _a.city, description = _a.description, speciality = _a.speciality;
    var updatePsicologoService = new UpdatePsicologoService_1.default();
    try {
        var psicologo = updatePsicologoService.execute({
            email: email,
            password: password,
            name: name,
            year: year,
            uf: uf,
            sex: sex,
            crp: crp,
            id: id,
            phone: phone,
            city: city,
            description: description,
            speciality: speciality
        });
        return response.status(200).json(psicologo);
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
psicologosRouter.delete('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deletePsicologoService, psicologo, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                deletePsicologoService = new DeletePsicologoService_1.default();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, deletePsicologoService.execute(id)];
            case 2:
                psicologo = _a.sent();
                return [2 /*return*/, response.status(200).json(psicologo)];
            case 3:
                err_2 = _a.sent();
                return [2 /*return*/, response.status(400).json({ error: err_2.message })];
            case 4: return [2 /*return*/];
        }
    });
}); }); //Is working
exports.default = psicologosRouter;
