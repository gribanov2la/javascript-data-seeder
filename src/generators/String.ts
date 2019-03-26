import Generator from '../core/Generator';
import {IStringGeneratorParams} from '../core/interfaces/index';

export default class StringGenerator extends Generator {
    public static make(params?: IStringGeneratorParams) {
        return new this(params);
    }

    public static get(params?: IStringGeneratorParams) {
        return this.make(params).get();
    }

    protected size: number;
    protected customCharset: string;

    constructor({size = 8, customCharset}: IStringGeneratorParams) {
        super();
        this.size = size;
        this.customCharset = customCharset;
    }

    public generate(): string {
        const charset: string = this.getCharset();
        let value: string = '';

        for (let i = 0; i < this.size; i++) {
            value += this.getRandomFromArray(charset.split(''));
        }

        return value;
    }

    public setSize(size: number): this {
        this.size = size;
        return this;
    }

    public setCustomCharset(charset: string): this {
        this.customCharset = charset;
        return this;
    }

    protected getCharset(): string {
        return this.customCharset || (this.getDictionary().alphabet + this.decNumberCharset);
    }
}