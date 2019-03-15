declare class Hasher {
    constructor(size?: 224 | 256 | 384 | 512);

    update(data: Buffer | string): this;

    digest(): Buffer;
    digest(encoding: "binary"): Buffer;
    digest(encoding: BufferEncoding): string;

    reset(): this;
}

export class SHA3 extends Hasher { }

export class SHA3Hash extends Hasher { }

export class Keccak extends Hasher { }
