(function(){

	"use strict";
	angular.module("ghPages").controller("indexController", indexController);

	function indexController(ModalModel){
		var vc = this;
		vc.simpleModal = new ModalModel.getConstructor("simple-modal");
		vc.helloWorlModal = new ModalModel.getConstructor("hello-world");
		vc.sidebarModal = new ModalModel.getConstructor("sidebar-modal");
		vc.flexboxModal = new ModalModel.getConstructor("flexbox-modal");
		vc.sidebarModal.isFullscreen = true;
		
		vc.openSimpleModal = function(){
			vc.simpleModal.isOpen = true;
		}

		vc.openFlexboxModal = function(){
			vc.flexboxModal.isOpen = true;
		}

		vc.openHelloWorlModal = function(){
			vc.helloWorlModal.isOpen = true;
		}
		vc.openSidebarModal = function(){
			vc.sidebarModal.isOpen = true;
		}

	}
})();