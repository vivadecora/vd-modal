'use strict';

(function(){
	angular.module("vd-modal").run(run);

	function run(){
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
	}

})();

