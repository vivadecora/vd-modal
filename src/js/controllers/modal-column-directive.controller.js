(function(){

	"use strict";

	angular.module('vd-modal').controller('ModalColumnDirectiveController', ModalColumnDirectiveController);

	ModalColumnDirectiveController.$inject = ['ModalManager'];

	function ModalColumnDirectiveController(ModalManager){
		var vc = this;
		vc.vm = ModalManager.getModalInstanceByName(vc.modalInstance);
	}

})();