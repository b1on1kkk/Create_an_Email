"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.multi_upload = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: (request, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        return callback(null, file.originalname);
    }
});
exports.multi_upload = (0, multer_1.default)({
    storage,
    fileFilter: (req, file, cb) => {
        cb(null, true);
    }
}).array("personFiles");
exports.upload = (0, multer_1.default)({ storage: storage });
