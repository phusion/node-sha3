// eslint-disable-next-line max-params
const copy = (source, sourceIndex, target, targetIndex) => source.copy(target, targetIndex * 8, sourceIndex * 8, (sourceIndex + 1) * 8);

module.exports = copy;
