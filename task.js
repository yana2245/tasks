function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
const student4 = new Student('Иван', 'мужской', '20');
const student5 = new Student('Лена', 'женский', '19');
const student6 = new Student('Женя', 'женский', '20');

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = marks;
  } else {
    this.marks = this.marks.concat(marks);
  }
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined) {
    return 0;
  } else {
    return this.marks.reduce((sum, mark) =>
      sum + mark, 0) / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
