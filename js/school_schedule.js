// School Schedule
var currentSchedule = '';

// Class Details
var className = 'Science';
var classSize = 5;
var classDay = 'Tuesday';
var classOpen = (classSize > 0);

// Student Schedule
function addToSchedule (className) {
  if (currentSchedule.includes(classDay)) {
    return 'You already have a class scheduled on ' + classDay + '.';
  } else {
    if (classOpen) {
      currentSchedule += classDay;
      classSize -= 1;
      return className + ' was succesfully added.' + '\n' + className + ' has been scheduled on ' + classDay + '.';
    } else {
      return 'Class is full.';
    }
  }
}

console.log(addToSchedule(className));
