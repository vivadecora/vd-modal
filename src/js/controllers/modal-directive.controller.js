(function(){

	"use strict";

	angular.module('vd-modal').controller('ModalDirectiveController', ModalDirectiveController);

	ModalDirectiveController.$inject = ['ModalManager'];

	function ModalDirectiveController(ModalManager){
		var vc = this;
		vc.vm = ModalManager;
	}

})();