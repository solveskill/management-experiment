/* eslint-disable unicorn/prefer-module */

const {getPaths} = require('@redwoodjs/internal');

module.exports = {
	schema: getPaths().generated.schema,
};
