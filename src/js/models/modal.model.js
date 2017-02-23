(function() {
	'use strict';

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
				toggleSidebar: toggleSidebar
			};

			function toggleSidebar(){
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