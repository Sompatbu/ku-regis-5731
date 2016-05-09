angular.module('todoApp', ['ui.router'])
  .controller('TodoListController', function($scope, $http) {
    var todoList = this
	todoList.todos = [];
	todoList.schedule = [];
	todoList.credit = 0;
	$http.get("https://whsatku.github.io/skecourses/combined.json").then(function (response) {
      $scope.todoList.todos = response.data;
      console.log(response);
	})
    /*todoList.todos = [
      {id: '01219245',prereq: '01219111', text: 'Individual Software Development Process', totalCredits: '3', lectureCredits: '3', labCredits: '0', description: 'Software development process, time management, tracking time, period and production planning, managing personal time, commitments and schedules, project plan, finding defects, code review checklist, projecting defects, economics of defect removal, design defects, product quality, process and personal commitment to quality.'},
      {id: '01219449',prereq: '', text: 'Software Patterns and Architecture', totalCredits: '3', lectureCredits: '3', labCredits: '0', description: 'Software architecture process, software quality attributes, software architecture documentation, model-driven architecture, service-oriented architecture, architectural design patterns, concurrent and networked object patterns, enterprise system patterns, internet-based system patterns.'},
	  {id: '01219381',prereq: '', text: 'Multimedia Data Engineering', totalCredits: '3', lectureCredits: '3', labCredits: '0', description: 'Multimedia systems technology, data formats and standards, compression standards, input/output and storage technologies, user interface, multimedia database, multimedia communications, and distributed multimedia systems.'},
	  {id: '01219498',prereq: '', text: 'Special Problems', totalCredits: '3', lectureCredits: '0', labCredits: '0', description: 'Study and research in software and knowledge engineering at the bachelor’s degree level and compile into a report.'},
	  {id: '01219113',prereq: '01219111', text: 'Object-Oriented Programming II', totalCredits: '3', lectureCredits: '2', labCredits: '3', description: 'Create and design data types; dynamic method invocation; encapsulation; inheritance; polymorphism; interfaces; exception handling; generics; reflections.'},
	  {id: '01219213',prereq: '', text: 'Communication Skills for Software and Knowledge Engineers', totalCredits: '3', lectureCredits: '3', labCredits: '0', description: 'Principle concepts of communication; communication within the teams; communication with customers; meeting management and handling for various types of meetings, business meetings, planning meetings, status meetings, and retrospective meetings; practices in various situations related to topics in the course.'},
	  {id: '01219361',prereq: '01204351', text: 'Business Intelligence', totalCredits: '3', lectureCredits: '3', labCredits: '0', description: 'Management support systems; decision making process; architectures and elements of business intelligence; data warehousing; data warehouse development methodology; application of data warehousing for business intelligence; knowledge discovery; data mining technique; application of data mining for business intelligence.'},
	  {id: '01219373',prereq: '', text: 'Innovation Management', totalCredits: '3', lectureCredits: '3', labCredits: '0', description: 'Definition and types of technological innovation, characteristics and innovation management, paradigm shifts in innovation theory and process models, malfunctions in managing an innovation process, strategic and operative conditions facilitating innovation, dynamics of linking innovation strategies to technology cycles and managing innovation streams, implementing innovation strategies through business process redesign, managing knowledge in the organization and motivating human creativity, innovation networks and strategic technology alliances, benchmarking innovation efficiency.'},
	  {id: '01219212',prereq: '01204212', text: 'Abstract Data Types Laboratory', totalCredits: '1', lectureCredits: '0', labCredits: '3', description: 'Laboratory for 01204212 Abstract Data Types and Problem Solving.'},
	  {id: '01219333',prereq: '', text: 'Introduction to Data Mining', totalCredits: '3', lectureCredits: '3', labCredits: '0', description: 'Basic concepts of data mining, data mining applications, techniques and models, ethics and privacy issues, data mining software suite, data mining methodologies, decision tables, decision trees, classification rules, clustering, statistical modeling, and linear models.'},
	  {id: '01219332',prereq: '', text: 'Data Warehouse', totalCredits: '3', lectureCredits: '3', labCredits: '0', description: 'Fundamentals of data warehousing, project planning, business requirement definition, dimensional modeling, technical architecture, physical configuration options, project selection, physical database design, data staging process, data staging techniques, target user applications, deployment of data warehouse, system growth management.'},
	  {id: '01219412',prereq: '', text: 'Technical Writing for Software and Knowledge Engineers', totalCredits: '3', lectureCredits: '3', labCredits: '0', description: 'User documents; design documents; project requirements; project plans; project progress reports; technical reports.'},
	  {id: '01219215',prereq: '01219216', text: 'Computer System Laboratory', totalCredits: '1', lectureCredits: '0', labCredits: '1', description: 'Microprocessor interfacing; low-level C coding; memory systems and cache; binary analysis with debuggers; buffer overflow attacks; coding shell programs.'},
	  {id: '01219495',prereq: '', text: 'Software and Knowledge Engineering Individual Project', totalCredits: '3', lectureCredits: '3', labCredits: '0', description: 'Individual project on interesting topic in software and knowledge engineering.'},
	  {id: '01219482',prereq: '', text: 'Hypermedia Presentation', totalCredits: '3', lectureCredits: '3', labCredits: '0', description: 'Hypermedia technology, graphic presentation, animation, video image, audio, perception psychology, multimedia presentation techniques, hypermedia-linked information, presentation design, advertisement, public announcement, hypermedia presentation on the web and Internet.'},
	  {id: '01219214',prereq: '', text: 'Probability and Statistics for Software and Knowledge Engineers', totalCredits: '3', lectureCredits: '3', labCredits: '0', description: 'Probability; conditional probability and independence of events; random variables; distribution and density functions; functions of one random variable; multiple random variables; statistical inference; estimation; hypothesis testing; regression; application to software and knowledge engineering problems.'},
	  {id: '01219492',prereq: '', text: 'Software Entrepreneurship', totalCredits: '3', lectureCredits: '3', labCredits: '0', description: 'Introduction and case studies. Business model development. Strategic planning. Financial resource management. Risk management. Basic accounting. Procedures and laws for establishing a company. Practice with materials in the course.'},
	  {id: '01219244',prereq: '01219243', text: 'Software Specification and Design Laboratory', totalCredits: '1', lectureCredits: '0', labCredits: '3', description: 'Laboratory for 01219243 Software Specification and Design.'},
	  {id: '00000000',prereq: '', text: 'Dummy', totalCredits: '3', lectureCredits: '3', labCredits: '0', description: ''}	  
	  ]*/

    todoList.addSchedule = function (todo) {
      todoList.schedule.push(todo)
	  todoList.credit = todoList.credit + todo.credit.total;
	  console.log(todo);
	  console.log(todoList.schedule);
      //todoList.todoText = ''
    }

    todoList.remaining = function () {
      var count = 0
      angular.forEach(todoList.todos, function (todo) {
        count += todo.done ? 0 : 1
      })
      return count
    }

    todoList.archive = function (todo) {
      var oldSchedule = todoList.schedule
      todoList.schedule = []
	  todoList.credit = 0
      angular.forEach(oldSchedule, function (todos) {
        if (todo.id != todos.id)
		{
			todoList.schedule.push(todos)
			todoList.credit = todoList.credit + todos.credit.total;
		}		
      })
    }
	
	todoList.toJSON = function () {
	  prompt("Please copy from textbox below or in Console", JSON.stringify(todoList.schedule));
      console.log(JSON.stringify(todoList.schedule));
    }
  })
  .controller('LoginController', function($state) {
    var login = this
	
	
	login.auth = function (user, password) {
		if(user == '5610545731' && password == '1234')
		$state.go('home');
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
