/**
 * Put a value (a CID) for the given key. If the key exists it's value is
 * overwritten.
 *
 * @param {import('./block').BlockFetcher} blocks Bucket block storage.
 * @param {import('./shard').ShardLink} root CID of the root node of the bucket.
 * @param {string} key The key of the value to put.
 * @param {import('./link').AnyLink} value The value to put.
 * @param {object} [options]
 * @param {number} [options.maxShardSize] Maximum shard size in bytes.
 * @returns {Promise<{ root: import('./shard').ShardLink } & ShardDiff>}
 */
export function put(blocks: import('./block').BlockFetcher, root: import('./shard').ShardLink, key: string, value: import('./link').AnyLink, options?: {
    maxShardSize?: number | undefined;
} | undefined): Promise<{
    root: import('./shard').ShardLink;
} & ShardDiff>;
/**
 * Get the stored value for the given key from the bucket. If the key is not
 * found, `undefined` is returned.
 *
 * @param {import('./block').BlockFetcher} blocks Bucket block storage.
 * @param {import('./shard').ShardLink} root CID of the root node of the bucket.
 * @param {string} key The key of the value to get.
 * @returns {Promise<import('./link').AnyLink | undefined>}
 */
export function get(blocks: import('./block').BlockFetcher, root: import('./shard').ShardLink, key: string): Promise<import('./link').AnyLink | undefined>;
/**
 * Delete the value for the given key from the bucket. If the key is not found
 * no operation occurs.
 *
 * @param {import('./block').BlockFetcher} blocks Bucket block storage.
 * @param {import('./shard').ShardLink} root CID of the root node of the bucket.
 * @param {string} key The key of the value to delete.
 * @returns {Promise<{ root: import('./shard').ShardLink } & ShardDiff>}
 */
export function del(blocks: import('./block').BlockFetcher, root: import('./shard').ShardLink, key: string): Promise<{
    root: import('./shard').ShardLink;
} & ShardDiff>;
/**
 * List entries in the bucket.
 *
 * @param {import('./block').BlockFetcher} blocks Bucket block storage.
 * @param {import('./shard').ShardLink} root CID of the root node of the bucket.
 * @param {object} [options]
 * @param {string} [options.prefix]
 * @returns {AsyncIterableIterator<import('./shard').ShardValueEntry>}
 */
export function entries(blocks: import('./block').BlockFetcher, root: import('./shard').ShardLink, options?: {
    prefix?: string | undefined;
} | undefined): AsyncIterableIterator<import('./shard').ShardValueEntry>;
/**
 * @typedef {{ additions: import('./shard').ShardBlockView[], removals: import('./shard').ShardBlockView[] }} ShardDiff
 */
export const MaxKeyLength: 64;
export const MaxShardSize: number;
export type ShardDiff = {
    additions: import('./shard').ShardBlockView[];
    removals: import('./shard').ShardBlockView[];
};
import { ShardBlock } from './shard.js';
import { encodeShardBlock } from './shard.js';
import { decodeShardBlock } from './shard.js';
export { ShardBlock, encodeShardBlock, decodeShardBlock };
//# sourceMappingURL=index.d.ts.map