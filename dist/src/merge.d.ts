/**
 * @param {import('./block').BlockFetcher} blocks Bucket block storage.
 * @param {import('./shard').ShardLink} base Merge base. Common parent of target DAGs.
 * @param {import('./shard').ShardLink[]} targets Target DAGs to merge.
 * @returns {Promise<{ root: import('./shard').ShardLink } & import('./index').ShardDiff>}
 */
export function merge(blocks: import('./block').BlockFetcher, base: import('./shard').ShardLink, targets: import('./shard').ShardLink[]): Promise<{
    root: import('./shard').ShardLink;
} & import("./index.js").ShardDiff>;
//# sourceMappingURL=merge.d.ts.map