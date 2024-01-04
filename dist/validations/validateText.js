"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateText = void 0;
const validateText = (text) => {
    const invalidCharsRegex = /[*|\":<>[\]{}`\\()';@&$]/;
    if (text === null || text === undefined || text === '') {
        return false;
    }
    else if (invalidCharsRegex.test(text)) {
        return false;
    }
    else {
        return true;
    }
};
exports.validateText = validateText;
