(function(){

	"use strict";

	angular.module("vd-modal").directive("modalColumn", ModalColumnDirective);

	function ModalColumnDirective(){

		var directive = {
			restrict: "AE",
			templateUrl: function(element, attributes){
				var layoutNameToTemplateUrlMap = {
					"sidebar": "/src/js/templates/modal-column-sidebar.template.html",
					"content": "/src/js/templates/modal-column-content.template.html"
				};
				return layoutNameToTemplateUrlMap[attributes.layout];
			},
			scope: {
				layout: "@layout",
				modalInstance: "@modalInstance"
			},
			controller: "ModalColumnDirectiveController",
			controllerAs: "vc",
			replace: true,
			transclude: true,
			bindToController: true
		};

		return directive;

	}

})();
