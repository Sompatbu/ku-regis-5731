angular.module('todoApp')
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise("/login");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "src/view/home.tmpl"
    })
    .state('changepage', {
      url: "/changepage",
      templateUrl: "src/view/changepage.tmpl"
    })
	.state('login', {
	  url: "/login",
	  templateUrl: "src/view/login.tmpl"
	})
});
