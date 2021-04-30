"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFailure = exports.storeFailure = exports.storeSuccess = exports.setupFailure = exports.retrieveFailure = exports.retrieveSuccess = void 0;
const chalk_1 = require("chalk");
const DELIMITER_LENGTH = 78;
const DELIMITER = Array.from({ length: DELIMITER_LENGTH }, () => "-").join("");
const log = console.log;
const formatSection = (...content) => chalk_1.grey([DELIMITER, ...content, DELIMITER].join("\n"));
const retrieveSuccess = ({ name }, hash) => log(formatSection(`Remote cache hit: ${chalk_1.green(name)}`, `Hash: ${hash}`));
exports.retrieveSuccess = retrieveSuccess;
const retrieveFailure = ({ name }, hash, error) => log(formatSection(`${chalk_1.yellow(`Warning`)}: Failed to retrieve cache from ${chalk_1.red(name)}`, `Hash: ${hash}`, `Error: ${error === null || error === void 0 ? void 0 : error.message}`));
exports.retrieveFailure = retrieveFailure;
const setupFailure = (error) => {
    var _a;
    return log(formatSection(`${chalk_1.yellow(`Warning`)}: Failed to setup remote cache. Check your nx.json.`, `Error: ${(_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : error}`));
};
exports.setupFailure = setupFailure;
const storeSuccess = ({ name }, hash) => log(formatSection(`Stored Output to remote cache: ${chalk_1.green(name)}`, `Hash: ${hash}`));
exports.storeSuccess = storeSuccess;
const storeFailure = ({ name }, hash, error) => log(formatSection(`${chalk_1.yellow(`Warning`)}: Failed to store cache to ${chalk_1.red(name)}`, `Hash: ${hash}`, `Error: ${error === null || error === void 0 ? void 0 : error.message}`));
exports.storeFailure = storeFailure;
const checkFailure = ({ name }, hash, error) => log(formatSection(`${chalk_1.yellow(`Warning`)}: Failed to check if cache file exists in ${chalk_1.red(name)}`, `Hash: ${hash}`, `Error: ${error === null || error === void 0 ? void 0 : error.message}`));
exports.checkFailure = checkFailure;
