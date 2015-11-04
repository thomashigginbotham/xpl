/* global requirejs */

/* ================================
 * RequireJS Config and App Initialization
 * ================================ */

/* -- Config -- */
requirejs.config({
	baseUrl: '/javascripts/',
	paths: {
		'sample-plugin': 'lib/jquery-plugins/jquery.sampleplugin',
		'jquery-noconflict': 'lib/jquery-noconflict',
		footer: 'lib/components/footer',
		almond: '../bower_components/almond/almond',
		jquery: '../bower_components/jquery/dist/jquery',
		respond: '../bower_components/respond/dest/respond.src',
		selectivizr: '../bower_components/selectivizr/selectivizr'
	},
	shim: {
		selectivizr: [
			'jquery'
		]
	},
	map: {
		'*': {
			jquery: 'jquery-noconflict'
		},
		'jquery-noconflict': {
			jquery: 'jquery'
		}
	},
	packages: [

	]
});

/* -- Initialize App (app.js) -- */
requirejs(['app']);
