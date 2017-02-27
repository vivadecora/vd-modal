(function(){

	"use strict";
	angular.module("ghPages").controller("indexController", indexController);

	function indexController(ModalModel){
		var vc = this;
		vc.simpleModal = new ModalModel.getConstructor("simple-modal");
		vc.openSimpleModal = function(){
			vc.simpleModal.isOpen = true;
		}

		vc.helloWorlModal = new ModalModel.getConstructor("hello-world");
		vc.openHelloWorlModal = function(){
			vc.helloWorlModal.isOpen = true;
		}

	}
})();