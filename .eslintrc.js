/* eslint-disable unicorn/prefer-module */

module.exports = {
	extends: ['@redwoodjs/eslint-config', 'plugin:unicorn/all'],
	root: true,
	rules: {
		'unicorn/filename-case': 'off',
		'unicorn/template-indent': 'off',
		'prettier/prettier': [
			'error',
			{
				trailingComma: 'all',
				bracketSpacing: false,
				useTabs: true,
				tabWidth: 2,
				semi: true,
				singleQuote: true,
				arrowParens: 'always',
				overrides: [
					{
						files: 'Routes.*',
						options: {
							printWidth: 999,
						},
					},
				],
			},
		],
	},
};
