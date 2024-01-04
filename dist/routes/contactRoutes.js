"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/contactRoutes.ts
const express_1 = __importDefault(require("express"));
const contactControllers_1 = require("../controllers/contactControllers");
const router = express_1.default.Router();
// Define routes
router.get('/', contactControllers_1.getContactInformation);
router.post('/', contactControllers_1.createContact);
exports.default = router;
