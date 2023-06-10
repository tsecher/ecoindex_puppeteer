import { Page } from 'puppeteer-core';
import { AbstractEventsClass } from './utils/AbstractEventsClass';
import { EcoIndexDataHandler, EcoIndexMetrics } from './utils/EcoIndexDataHandler';
/**
 * Events.
 *
 * @type {{AFTER_INIT: string, PAGE_LOADED: string, AFTER_SCROLL: string, AFTER_VISIT: string}}
 */
export declare const ECOINDEX_STORY_EVENTS: {
    AFTER_INIT: string;
    BEFORE_ADD_STEP: string;
    AFTER_ADD_STEP: string;
};
/**
 * Step structure.
 */
declare class EcoIndexStoryStep {
    name: string;
    ecoindex: EcoIndexMetrics | undefined;
    date: Date;
    constructor(name: string, ecoindex: EcoIndexMetrics | undefined);
    hasData(): boolean;
}
/**
 * Get the ecoindex raw data for a user story.
 */
export declare class EcoIndexStory extends AbstractEventsClass {
    /**
     * The steps list.
     * @type {EcoIndexStoryStep[]}
     * @protected
     */
    protected steps: EcoIndexStoryStep[];
    /**
     * EcoIndex Handler.
     * @type {EcoIndexDataHandler | undefined}
     * @protected
     */
    protected handler: EcoIndexDataHandler | undefined;
    protected eventData: any;
    /**
     * Return current step.
     *
     * @returns {EcoIndexStoryStep | null}
     */
    getCurrentStep(): EcoIndexStoryStep | null;
    /**
     * Initialize and start a story.
     *
     * @param {Page} page
     * @param {{}} conf
     *
     * @returns {Promise<void>}
     */
    start(page: Page, conf?: {}): Promise<void>;
    /**
     * Add a new step in the story.
     *
     * @param {string} name
     *
     * @returns {Promise<void>}
     */
    addStep(name: string): Promise<void>;
    /**
     * Stop story.
     *
     * @param {string} name
     * @returns {Promise<void>}
     */
    stop(name: string): Promise<void>;
    /**
     * Return the metrics of the story.
     *
     * @returns {EcoIndexStoryStep[]}
     */
    getMetrics(): EcoIndexStoryStep[];
}
export {};
