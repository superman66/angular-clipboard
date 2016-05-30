angular.module('MyApp', [])
.directive('clipboard', [function(){
	return{
		restrict: 'A',
		scope: {
			action: '@clipAction',
			text: '=clipModel',
			clipAlert: '@clipAlert',	//if alert the tip after clip success
			successText: '@clipSuccessText'	//the alert text
		},
		link: function(scope, ele, attr){
			angular.element(ele).attr('data.clipboard-action', scope.action);	//set action: copy or cut. default: copy
			angular.element(ele).attr("data-clipboard-text",scope.text);	//设置要复制的内容
			scope.$watch('text', function(){
				angular.element(ele).attr("data-clipboard-text",scope.text);
			})
			var clipboard = new Clipboard('.'+attr.class);
			//after clip success
			clipboard.on('success', function(e) {
			    if(scope.clipAlert =='true'){
					alert(scope.successText);
			    }
			    e.clearSelection();
			    //clipboard.destroy();	//destory 
			});
			//when error occured
			clipboard.on('error', function(e) {
			    console.error('Action:', e.action);
			    console.error('Trigger:', e.trigger);
			});
		}
	}
}])
.controller('MyController', ['$scope', function($scope){
	$scope.text = 'https://github.com/superman66';
}])