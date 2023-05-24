/**
 * @template T
 * @typedef {{ parents: EventLink<T>[], data: T }} EventView
 */
/**
 * @template T
 * @typedef {import('multiformats').BlockView<EventView<T>>} EventBlockView
 */
/**
 * @template T
 * @typedef {import('multiformats').Link<EventView<T>>} EventLink
 */
/**
 * Advance the clock by adding an event.
 *
 * @template T
 * @param {import('./block').BlockFetcher} blocks Block storage.
 * @param {EventLink<T>[]} head The head of the clock.
 * @param {EventLink<T>} event The event to add.
 */
export function advance<T>(blocks: import('./block').BlockFetcher, head: import("multiformats").Link<EventView<T>, number, number, 1>[], event: import("multiformats").Link<EventView<T>, number, number, 1>): Promise<import("multiformats").Link<EventView<T>, number, number, 1>[]>;
/**
 * @template T
 * @param {EventView<T>} value
 * @returns {Promise<EventBlockView<T>>}
 */
export function encodeEventBlock<T>(value: EventView<T>): Promise<import("multiformats").BlockView<EventView<T>, number, number, 1>>;
/**
 * @template T
 * @param {Uint8Array} bytes
 * @returns {Promise<EventBlockView<T>>}
 */
export function decodeEventBlock<T>(bytes: Uint8Array): Promise<import("multiformats").BlockView<EventView<T>, number, number, 1>>;
/**
 * @template T
 * @param {import('./block').BlockFetcher} blocks Block storage.
 * @param {EventLink<T>[]} head
 * @param {object} [options]
 * @param {(b: EventBlockView<T>) => string} [options.renderNodeLabel]
 */
export function vis<T>(blocks: import('./block').BlockFetcher, head: import("multiformats").Link<EventView<T>, number, number, 1>[], options?: {
    renderNodeLabel?: ((b: import("multiformats").BlockView<EventView<T>, number, number, 1>) => string) | undefined;
} | undefined): AsyncGenerator<string, void, unknown>;
/**
 * @template T
 * @extends {Block<EventView<T>, typeof cbor.code, typeof sha256.code, 1>}
 * @implements {EventBlockView<T>}
 */
export class EventBlock<T> extends Block<EventView<T>, 113, 18, 1> implements EventBlockView<T> {
    /**
     * @template T
     * @param {T} data
     * @param {EventLink<T>[]} [parents]
     */
    static create<T_1>(data: T_1, parents?: import("multiformats").Link<EventView<T_1>, number, number, 1>[] | undefined): Promise<import("multiformats").BlockView<EventView<T_1>, number, number, 1>>;
    /**
     * @param {object} config
     * @param {EventLink<T>} config.cid
     * @param {Event} config.value
     * @param {Uint8Array} config.bytes
     * @param {string} config.prefix
     */
    constructor({ cid, value, bytes, prefix }: {
        cid: EventLink<T>;
        value: Event;
        bytes: Uint8Array;
        prefix: string;
    });
    prefix: string;
}
/** @template T */
export class EventFetcher<T> {
    /** @param {import('./block').BlockFetcher} blocks */
    constructor(blocks: import('./block').BlockFetcher);
    /** @private */
    private _blocks;
    /**
     * @param {EventLink<T>} link
     * @returns {Promise<EventBlockView<T>>}
     */
    get(link: EventLink<T>): Promise<EventBlockView<T>>;
}
export type EventView<T> = {
    parents: EventLink<T>[];
    data: T;
};
export type EventBlockView<T> = import('multiformats').BlockView<EventView<T>>;
export type EventLink<T> = import('multiformats').Link<EventView<T>>;
import { Block } from 'multiformats/block';
//# sourceMappingURL=clock.d.ts.map