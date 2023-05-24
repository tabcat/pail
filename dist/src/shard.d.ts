/**
 * @param {Shard} value
 * @param {string} [prefix]
 * @returns {Promise<ShardBlockView>}
 */
export function encodeShardBlock(value: Shard, prefix?: string | undefined): Promise<ShardBlockView>;
/**
 * @param {Uint8Array} bytes
 * @param {string} [prefix]
 * @returns {Promise<ShardBlockView>}
 */
export function decodeShardBlock(bytes: Uint8Array, prefix?: string | undefined): Promise<ShardBlockView>;
/**
 * @param {Shard} target Shard to put to.
 * @param {ShardEntry} entry
 * @returns {Shard}
 */
export function putEntry(target: Shard, entry: ShardEntry): Shard;
/**
 * @param {import('./shard').Shard} shard
 * @param {string} skey Shard key to use as a base.
 */
export function findCommonPrefix(shard: import('./shard').Shard, skey: string): {
    prefix: string;
    matches: ShardEntry[];
} | undefined;
/**
 * @typedef {import('./link').AnyLink} ShardEntryValueValue
 * @typedef {[ShardLink]} ShardEntryLinkValue
 * @typedef {[ShardLink, import('./link').AnyLink]} ShardEntryLinkAndValueValue
 * @typedef {[key: string, value: ShardEntryValueValue]} ShardValueEntry
 * @typedef {[key: string, value: ShardEntryLinkValue | ShardEntryLinkAndValueValue]} ShardLinkEntry
 * @typedef {[key: string, value: ShardEntryValueValue | ShardEntryLinkValue | ShardEntryLinkAndValueValue]} ShardEntry
 * @typedef {ShardEntry[]} Shard
 * @typedef {import('multiformats').Link<Shard, typeof cbor.code, typeof sha256.code, 1>} ShardLink
 * @typedef {import('multiformats').BlockView<Shard, typeof cbor.code, typeof sha256.code, 1> & { prefix: string }} ShardBlockView
 */
/**
 * @extends {Block<Shard, typeof cbor.code, typeof sha256.code, 1>}
 * @implements {ShardBlockView}
 */
export class ShardBlock extends Block<Shard, 113, 18, 1> implements ShardBlockView {
    static create(): Promise<ShardBlockView>;
    /**
     * @param {object} config
     * @param {ShardLink} config.cid
     * @param {Shard} config.value
     * @param {Uint8Array} config.bytes
     * @param {string} config.prefix
     */
    constructor({ cid, value, bytes, prefix }: {
        cid: ShardLink;
        value: Shard;
        bytes: Uint8Array;
        prefix: string;
    });
    prefix: string;
}
export class ShardFetcher {
    /** @param {import('./block').BlockFetcher} blocks */
    constructor(blocks: import('./block').BlockFetcher);
    _blocks: import("./block").BlockFetcher;
    /**
     * @param {ShardLink} link
     * @param {string} [prefix]
     * @returns {Promise<ShardBlockView>}
     */
    get(link: ShardLink, prefix?: string | undefined): Promise<ShardBlockView>;
}
export type ShardEntryValueValue = import('./link').AnyLink;
export type ShardEntryLinkValue = [ShardLink];
export type ShardEntryLinkAndValueValue = [ShardLink, import('./link').AnyLink];
export type ShardValueEntry = [key: string, value: ShardEntryValueValue];
export type ShardLinkEntry = [key: string, value: [import("multiformats").Link<Shard, 113, 18, 1>] | [import("multiformats").Link<Shard, 113, 18, 1>, import("multiformats").Link<unknown, number, number, 0 | 1>]];
export type ShardEntry = [key: string, value: ShardEntryValueValue | [import("multiformats").Link<Shard, 113, 18, 1>] | [import("multiformats").Link<Shard, 113, 18, 1>, import("multiformats").Link<unknown, number, number, 0 | 1>]];
export type Shard = [key: string, value: import("multiformats").Link<unknown, number, number, 0 | 1> | ShardEntryLinkValue | ShardEntryLinkAndValueValue][];
export type ShardLink = import('multiformats').Link<ShardEntry[], typeof cbor.code, typeof sha256.code, 1>;
export type ShardBlockView = import('multiformats').BlockView<ShardEntry[], typeof cbor.code, typeof sha256.code, 1> & {
    prefix: string;
};
import { Block } from 'multiformats/block';
import * as cbor from '@ipld/dag-cbor';
import { sha256 } from 'multiformats/hashes/sha2';
//# sourceMappingURL=shard.d.ts.map