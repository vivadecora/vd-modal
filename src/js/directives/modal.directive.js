(function(){
    'use strict';

    angular.module('vd-modal').directive('modal', ModalDirective);

    function ModalDirective(){
        var directive = {
            transclude: true,
            templateUrl: cdn('static/components/modal/templates/modal.template.html'),
            restrict: 'EA',
            scope: true,
            replace: true,
            controller: 'ModalDirectiveController',
            bindToController: {
                model: '='
            },
            controllerAs: 'vc'
        };
        return directive;
    }
})();
