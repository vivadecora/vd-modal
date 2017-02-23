(function() {
	'use strict';

	angular.module('vd-modal').factory('ModalManager', ModalManager);

	function ModalManager() {
		var model = {
			modalInstances: [],
			registerModal: registerModal,
			getModalInstanceByName: getModalInstanceByName
		};

		function registerModal(modalInstance) {
			model.modalInstances.push(modalInstance);
		}

		function getModalInstanceByName(instanceName){
			return model.modalInstances.getObjectByValue("instanceName", instanceName);
		}

		return model;
	}
})();