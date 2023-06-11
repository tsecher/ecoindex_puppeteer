"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = exports.EcoIndexMetrics = exports.EcoIndexStoryStep = exports.EcoIndexStory = exports.getPageMetrics = exports.EcoIndexPage = void 0;
const page = __importStar(require("./EcoIndexPage"));
const story = __importStar(require("./EcoIndexStory"));
const handler = __importStar(require("./utils/EcoIndexDataHandler"));
exports.EcoIndexPage = page.EcoIndexPage;
exports.getPageMetrics = page.getPageMetrics;
exports.EcoIndexStory = story.EcoIndexStory;
exports.EcoIndexStoryStep = story.EcoIndexStoryStep;
exports.EcoIndexMetrics = handler.EcoIndexMetrics;
exports.Events = {
    page: page.ECOINDEX_PAGE_EVENTS,
    story: story.ECOINDEX_STORY_EVENTS,
};
