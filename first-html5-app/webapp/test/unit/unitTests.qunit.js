/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ro/unitbv/cloudcomputing/first-html5-app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});