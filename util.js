/**
* @namespace
*/
var rmk = rmk || {};
rmk.util = rmk.uitl || {};

/**
* @description 공통 기능
*/
var commonUtils = rmk.util = {
	isTouchDevice: function(){
		return 'ontouchstart' in window 	// works on most browsers
		|| navigator.maxTouchPoints;		// works on IE10/11 and Surface
	},
	
	getScreenSize: function(){
		return {
			width: window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth,
			height: window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight
		}
	}
};