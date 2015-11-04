/* jslint browser: true */
define(['jquery'], function($) {
	'use strict';

	/*
	 * Initialization
	 */
	var init = function() {
		// Site Footer scripts
		require(['footer'], function(footer) {
			footer.addText('This text was added with JavaScript. See <strong>/app/javascripts/app.js</strong> to make changes.');
		});
	};

	/*
	 * Main entry point
	 */
	(function() {
		// Allow XPL to re-run start-up scripts when pattern library components
		// have finished loading
		if (window.addEventListener) {
			window.addEventListener('xplComponentsLoaded', function() {
				setTimeout(init, 0);
			}, false);
		}

		// Let's go!
		setTimeout(function() {
			init();

			// Use Selectivizr and Respond.js for IE 8 and below
			if ($('.lt-ie9').length > 0) {
				// Selectivizr expects a global jQuery object
				window.jQuery = $;

				require(['selectivizr'], function() {
					// Remove the global jQuery object
					window.jQuery = undefined;

					// Respond.js must be loaded after Selectivizr
					require(['respond']);
				});
			}
		}, 0);
	})();
});
