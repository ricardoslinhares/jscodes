class User {
  constructor({name, surname, email, role}) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.role = role;
    this.courses = [];
    this.messages = [];
  };
  
  // courses = []; -> Class Field: Se não tiver arg no constructor como parâmetro (this.courses), pode ser usada normalmente com o mesmo resultado
  // messages = []; -> idem à explicação acima
  
  addCourse(course, level) {
    this.courses.push({Course: course, Level: level});
  };
  
  removeCourse(course) {
    this.courses = this.courses.filter(courseName => courseName.Course !== course);
  };
  
  editCourse(courseName, level) {
    let findCourse = this.courses.find(course => course.Course === courseName);
    if (findCourse) {
      findCourse.Level = level;
    };
  };
  
  sendMessage(to, message) {
    this.sendEmail(this.email, to.email, message);
  };
  
  sendEmail (from, to, message) {
    let newMessage = `${to} -> ${from}: ${message}`;
    this.messages.push(newMessage);
  };
  
  showMessagesHistory() {
    this.messages.forEach(message => console.log(message));
  };
  
};

let student1 = new User({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student'});
let student2 = new User({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student'});
let teacher1 = new User({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher'});

student1.addCourse('maths', 2);
student1.addCourse('physics', 1);
student1.removeCourse('physics');
teacher1.addCourse('biology', 3);
teacher1.editCourse('biology', 4);
console.log(`${student1.name}: ${student1.courses.length} courses`); // -> Rafael: 1 courses
console.log(`${teacher1.name}: ${teacher1.courses.length} courses`); // -> Paula: 1 courses
teacher1.sendMessage(student1, 'test message');
teacher1.sendMessage(student1, 'another message');
student1.sendMessage(teacher1, 'and another message');
teacher1.showMessagesHistory();
student1.showMessagesHistory();
// -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: test message
// -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: another message
// -> rfife@rhyta.com -> rfife@rhyta.com: and another message
