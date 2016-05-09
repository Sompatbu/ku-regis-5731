angular.module('scheduleApp', ['ui.router'])
  .controller('ScheduleListController', function () {
    var scheduleList = this
		scheduleList.list = [{
"name": {
"th": "กระบวนการพัฒนาซอฟต์แวร์เชิงเดี่ยว",
"en": "Individual Software Development Process"
},
"credit": {
"self": 6,
"lab": 0,
"total": 3,
"lecture": 3
},
"prereq": [
{
"simultaneous": false,
"id": "01219111"
}
],
"description": {
"th": "กระบวนการพัฒนาซอฟต์แวร์ การจัดการเวลา การติดตามเวลา ช่วงเวลาในการวางแผนการผลิต การวางแผนการผลิต การจัดการเวลาส่วนบุคคล คำสัญญา และตารางนัดหมาย แผนงานโครงการ การค้นหาข้อผิดพลาด รายการตรวจสอบรหัส การคาดคะเนข้อบกพร่อง เศรษฐศาสตร์ของการกำจัดข้อบกพร่อง ข้อบกพร่องจากการออกแบบ คุณภาพผลิตภัณฑ์และกระบวนการ คำสัญญาเชิงบุคคลที่มีต่อคุณภาพ",
"en": "Software development process, time management, tracking time, period and production planning, managing personal time, commitments and schedules, project plan, finding defects, code review checklist, projecting defects, economics of defect removal, design defects, product quality, process and personal commitment to quality."
},
"id": "01219245"
}
      	  
		]

    scheduleList.addToList = function () {
      scheduleList.list.push({id: scheduleList.id, prereq: scheduleList.prereq, text: scheduleList.text, totalCredits: scheduleList.totalCredits, lectureCredits: scheduleList.lectureCredits, labCredits: scheduleList.labCredits, description: scheduleList.description})
      scheduleList.id = ''
	  scheduleList.prereq = ''
	  scheduleList.text = ''
	  scheduleList.totalCredits = ''
	  scheduleList.lectureCredits = ''
	  scheduleList.labCredits = ''
	  scheduleList.description = ''
    }

    scheduleList.remaining = function () {
      var count = 0
      angular.forEach(scheduleList.list, function (list) {
        count += list.done ? 0 : 1
      })
      return count
    }

    scheduleList.archive = function () {
      var oldList = scheduleList.list
      scheduleList.list = []
      angular.forEach(oldList, function (list) {
        //if (!todo.done) todoList.todos.push(todo)
      })
    }
  })
