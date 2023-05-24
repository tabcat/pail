/**
 * @typedef {string} K
 * @typedef {[before: null, after: import('./link').AnyLink]} AddV
 * @typedef {[before: import('./link').AnyLink, after: import('./link').AnyLink]} UpdateV
 * @typedef {[before: import('./link').AnyLink, after: null]} DeleteV
 * @typedef {[key: K, value: AddV|UpdateV|DeleteV]} KV
 * @typedef {KV[]} KeysDiff
 * @typedef {{ keys: KeysDiff, shards: import('./index').ShardDiff }} CombinedDiff
 */
/**
 * @param {import('./block').BlockFetcher} blocks Bucket block storage.
 * @param {import('./shard').ShardLink} a Base DAG.
 * @param {import('./shard').ShardLink} b Comparison DAG.
 * @returns {Promise<CombinedDiff>}
 */
export function difference(blocks: import('./block').BlockFetcher, a: import('./shard').ShardLink, b: import('./shard').ShardLink, prefix?: string): Promise<CombinedDiff>;
export type K = string;
export type AddV = [before: null, after: import('./link').AnyLink];
export type UpdateV = [before: import('./link').AnyLink, after: import('./link').AnyLink];
export type DeleteV = [before: import('./link').AnyLink, after: null];
export type KV = [key: K, value: [before: null, after: import("multiformats").Link<unknown, number, number, 0 | 1>] | [before: import("multiformats").Link<unknown, number, number, 0 | 1>, after: import("multiformats").Link<unknown, number, number, 0 | 1>] | [before: import("multiformats").Link<unknown, number, number, 0 | 1>, after: null]];
export type KeysDiff = [key: string, value: AddV | UpdateV | DeleteV][];
export type CombinedDiff = {
    keys: KV[];
    shards: import('./index').ShardDiff;
};
//# sourceMappingURL=diff.d.ts.map