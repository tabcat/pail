import crypto from 'node:crypto'
import assert from 'node:assert'
import * as Link from 'multiformats/link'
import * as raw from 'multiformats/codecs/raw'
import { sha256 } from 'multiformats/hashes/sha2'
import { decodeShardBlock } from '../src/index.js'
import { MemoryBlockstore } from '../src/block.js'

/** @param {number} size */
export async function randomCID (size) {
  const hash = await sha256.digest(await randomBytes(size))
  return Link.create(raw.code, hash)
}

/** @param {number} size */
export async function randomBytes (size) {
  const bytes = new Uint8Array(size)
  while (size) {
    const chunk = new Uint8Array(Math.min(size, 65_536))
    crypto.getRandomValues(chunk)
    size -= bytes.length
    bytes.set(chunk, size)
  }
  return bytes
}

export class Blockstore extends MemoryBlockstore {
  /**
   * @param {import('../src/shard').ShardLink} cid
   * @param {string} [prefix]
   */
  async getShardBlock (cid, prefix) {
    const bytes = await this.get(cid)
    assert(bytes)
    return decodeShardBlock(bytes, prefix)
  }
}
