module.exports = (wallaby) => {

	process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true;
	process.env.NODE_PATH = require('path').join(__dirname, './node_modules')

	const compiler = wallaby.compilers.babel({presets: [['@vue/app', {modules: 'commonjs'}]]})

	return {
		files: [
			'src/**/*',
			{ pattern: 'node_modules/vue-spinner/**/*.+(js|vue)', instrument: false },
			'testConfig/**/*.js',
			'jest.config.js',
			'package.json',
			{ pattern: 'babel.config.js', instrument: false },
			{ pattern: 'src/**/__tests__/*.spec.js', ignore: true }
		],

		tests: [
			'tests/**/*.spec.js',
			'src/**/__tests__/*.spec.js'
		],

		env: {
			type: 'node',
			runner: 'node',
			params: {
				env: 'LOCAL_PATH=' + process.cwd()
			}
		},

		compilers: {
			'**/*.js': compiler,
			'**/*.vue': require('wallaby-vue-compiler')(compiler)
		},

		preprocessors: {
			'**/*.vue': file => require('vue-jest').process(file.content, file.path),
			'**/*.js?(x)': file => require('@babel/core').transform(
				file.content,
				{sourceMap: true, compact: false, filename: file.path})
		},

		setup: function (wallaby) {
			const jestConfig = require('./package').jest || require('./jest.config')
			jestConfig.transform = {}
			wallaby.testFramework.configure(jestConfig)
		},

		testFramework: 'jest',

		debug: true
	}
}
