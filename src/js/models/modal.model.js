(function() {
	'use strict';

	angular.module("vd-modal").run(function(){
		if(!Array.prototype.getObjectByValue){
		    Array.prototype.getObjectByValue = function(propertyName, propertyValue){
		        for(var i=0; i < this.length;i++){
		            var item = this[i];
		            if(item[propertyName] === propertyValue){
		                return item;
		            }
		        }
		    };
		};		
	})

	angular.module('vd-modal').factory('ModalModel', ModalModel);

	ModalModel.$inject = ['ModalManager'];

	function ModalModel(ModalManager) {
		var modalConstructor = {
			getConstructor: getConstructor
		};

		return modalConstructor;

		function getConstructor(modalName) {
			var model = {
				instanceName: modalName,
				isOpen: false,
				closeModal: closeModal,
				overlayTransparent: false,
				isFullscreen: false,
				isShowingSidebar: true,
				toggleInformationBox: toggleInformationBox
			};

			function toggleInformationBox(){
				model.isShowingSidebar = !model.isShowingSidebar;
			}

			ModalManager.registerModal(model);

			function closeModal() {
				model.isOpen = false;
			}

			return model;
		}
	}
})();