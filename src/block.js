import { parse } from 'multiformats/link'

/**
 * @typedef {{ cid: import('./link').AnyLink, bytes: Uint8Array }} AnyBlock
 * @typedef {{ get: (link: import('./link').AnyLink) => Promise<Uint8Array | undefined> }} BlockFetcher
 */

/** @implements {BlockFetcher} */
export class MemoryBlockstore {
  /** @type {Map<string, Uint8Array>} */
  #blocks = new Map()

  /**
   * @param {Array<AnyBlock>} [blocks]
   */
  constructor (blocks) {
    if (blocks) {
      this.#blocks = new Map(blocks.map(b => [b.cid.toString(), b.bytes]))
    }
  }

  /**
   * @param {import('./link').AnyLink} cid
   * @returns {Promise<Uint8Array | undefined>}
   */
  async get (cid) {
    const bytes = this.#blocks.get(cid.toString())
    if (!bytes) return
    return bytes
  }

  /**
   * @param {import('./link').AnyLink} cid
   * @param {Uint8Array} bytes
   */
  async put (cid, bytes) {
    this.#blocks.set(cid.toString(), bytes)
  }

  /**
   * @param {import('./link').AnyLink} cid
   * @param {Uint8Array} bytes
   */
  putSync (cid, bytes) {
    this.#blocks.set(cid.toString(), bytes)
  }

  /** @param {import('./link').AnyLink} cid */
  async delete (cid) {
    this.#blocks.delete(cid.toString())
  }

  /** @param {import('./link').AnyLink} cid */
  deleteSync (cid) {
    this.#blocks.delete(cid.toString())
  }

  * entries () {
    for (const [str, bytes] of this.#blocks) {
      yield { cid: parse(str), bytes }
    }
  }
}

export class MultiBlockFetcher {
  /** @type {BlockFetcher[]} */
  #fetchers

  /** @param {BlockFetcher[]} fetchers */
  constructor (...fetchers) {
    this.#fetchers = fetchers
  }

  /** @param {import('./link').AnyLink} link */
  async get (link) {
    for (const f of this.#fetchers) {
      const v = await f.get(link)
      if (v) return v
    }
  }
}
