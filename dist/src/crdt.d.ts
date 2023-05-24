/**
 * @typedef {{
 *   type: 'put'|'del'
 *   key: string
 *   value: import('./link').AnyLink
 *   root: import('./shard').ShardLink
 * }} EventData
 * @typedef {{
 *   root: import('./shard').ShardLink
 *   head: import('./clock').EventLink<EventData>[]
 *   event: import('./clock').EventBlockView<EventData>
 * } & import('./index').ShardDiff} Result
 */
/**
 * Put a value (a CID) for the given key. If the key exists it's value is
 * overwritten.
 *
 * @param {import('./block').BlockFetcher} blocks Bucket block storage.
 * @param {import('./clock').EventLink<EventData>[]} head Merkle clock head.
 * @param {string} key The key of the value to put.
 * @param {import('./link').AnyLink} value The value to put.
 * @param {object} [options]
 * @returns {Promise<Result>}
 */
export function put(blocks: import('./block').BlockFetcher, head: import('./clock').EventLink<EventData>[], key: string, value: import('./link').AnyLink, options?: object | undefined): Promise<Result>;
/**
 * Delete the value for the given key from the bucket. If the key is not found
 * no operation occurs.
 *
 * @param {import('./block').BlockFetcher} blocks Bucket block storage.
 * @param {import('./clock').EventLink<EventData>[]} head Merkle clock head.
 * @param {string} key The key of the value to delete.
 * @param {object} [options]
 * @returns {Promise<Result>}
 */
export function del(blocks: import('./block').BlockFetcher, head: import('./clock').EventLink<EventData>[], key: string, options?: object | undefined): Promise<Result>;
/**
 * Determine the effective pail root given the current merkle clock head.
 *
 * Clocks with multiple head events may return blocks that were added or
 * removed while playing forward events from their common ancestor.
 *
 * @param {import('./block').BlockFetcher} blocks Bucket block storage.
 * @param {import('./clock').EventLink<EventData>[]} head Merkle clock head.
 * @returns {Promise<{ root: import('./shard').ShardLink } & import('./index').ShardDiff>}
 */
export function root(blocks: import('./block').BlockFetcher, head: import('./clock').EventLink<EventData>[]): Promise<{
    root: import('./shard').ShardLink;
} & Pail.ShardDiff>;
/**
 * @param {import('./block').BlockFetcher} blocks Bucket block storage.
 * @param {import('./clock').EventLink<EventData>[]} head Merkle clock head.
 * @param {string} key The key of the value to retrieve.
 */
export function get(blocks: import('./block').BlockFetcher, head: import('./clock').EventLink<EventData>[], key: string): Promise<import("multiformats").Link<unknown, number, number, 0 | 1> | undefined>;
/**
 * @param {import('./block').BlockFetcher} blocks Bucket block storage.
 * @param {import('./clock').EventLink<EventData>[]} head Merkle clock head.
 * @param {object} [options]
 * @param {string} [options.prefix]
 */
export function entries(blocks: import('./block').BlockFetcher, head: import('./clock').EventLink<EventData>[], options?: {
    prefix?: string | undefined;
} | undefined): AsyncGenerator<import("./shard").ShardValueEntry, void, undefined>;
export type EventData = {
    type: 'put' | 'del';
    key: string;
    value: import('./link').AnyLink;
    root: import('./shard').ShardLink;
};
export type Result = {
    root: import('./shard').ShardLink;
    head: import('./clock').EventLink<EventData>[];
    event: import('./clock').EventBlockView<EventData>;
} & Pail.ShardDiff;
import * as Pail from './index.js';
//# sourceMappingURL=crdt.d.ts.map