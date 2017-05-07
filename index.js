module.exports = function novl(value, fallbackValue) {
	return (typeof value === 'number') ? value : fallbackValue;
};
