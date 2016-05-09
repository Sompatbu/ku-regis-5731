angular.module('loginApp', ['ui.router'])
  .controller('LoginController', function() {
    var login = this
	
	login.auth = function (user, password) {
		if(user == '5610545731' && password == '1234')
		console.log(true);
	}
  })
  
/*var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("https://whsatku.github.io/skecourses/combined.json").then(function (response) {
      $scope.myData = response.data;
      console.log(response);
  });
});*/
