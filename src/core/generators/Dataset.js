import AbstractGenerator from '../AbstractGenerator';

export default class RangeGenerator extends AbstractGenerator {
	constructor(i18n, pnrg, {data = []}) {
		super(i18n, pnrg);
		this._data = data;
	}
	
	
	generate() {
		return this._getRandomFromArray(this._data);
	}
	
	data(data) {
		this._data = data;
		return this;
	}
}
