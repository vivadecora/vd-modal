(function(){

	"use strict";
	angular.module("ghPages").controller("indexController", indexController);

	function indexController(ModalModel){
		var vc = this;
		vc.simpleModal = new ModalModel.getConstructor("simple-modal");
		vc.openSimpleModal = function(){
			vc.simpleModal.isOpen = true;
		}
	}
})();