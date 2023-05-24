/**
 * @typedef {{ cid: import('./link').AnyLink, bytes: Uint8Array }} AnyBlock
 * @typedef {{ get: (link: import('./link').AnyLink) => Promise<Uint8Array | undefined> }} BlockFetcher
 */
/** @implements {BlockFetcher} */
export class MemoryBlockstore implements BlockFetcher {
    /**
     * @param {Array<AnyBlock>} [blocks]
     */
    constructor(blocks?: AnyBlock[] | undefined);
    /**
     * @param {import('./link').AnyLink} cid
     * @returns {Promise<Uint8Array | undefined>}
     */
    get(cid: import('./link').AnyLink): Promise<Uint8Array | undefined>;
    /**
     * @param {import('./link').AnyLink} cid
     * @param {Uint8Array} bytes
     */
    put(cid: import('./link').AnyLink, bytes: Uint8Array): Promise<void>;
    /**
     * @param {import('./link').AnyLink} cid
     * @param {Uint8Array} bytes
     */
    putSync(cid: import('./link').AnyLink, bytes: Uint8Array): void;
    /** @param {import('./link').AnyLink} cid */
    delete(cid: import('./link').AnyLink): Promise<void>;
    /** @param {import('./link').AnyLink} cid */
    deleteSync(cid: import('./link').AnyLink): void;
    entries(): Generator<{
        cid: import("multiformats/link").Link<unknown, number, number, import("multiformats/link").Version>;
        bytes: Uint8Array;
    }, void, unknown>;
    #private;
}
export class MultiBlockFetcher {
    /** @param {BlockFetcher[]} fetchers */
    constructor(...fetchers: BlockFetcher[]);
    /** @param {import('./link').AnyLink} link */
    get(link: import('./link').AnyLink): Promise<Uint8Array | undefined>;
    #private;
}
export type AnyBlock = {
    cid: import('./link').AnyLink;
    bytes: Uint8Array;
};
export type BlockFetcher = {
    get: (link: import('./link').AnyLink) => Promise<Uint8Array | undefined>;
};
//# sourceMappingURL=block.d.ts.map