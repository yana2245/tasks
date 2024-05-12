class Student {
    constructor(name) {
    this.name = name;
    this.marks = {};
  }

  
  addMark(mark, subject) {
    if (mark < 2 || mark > 5 ) {
      alert('Нельзя добавить');
  return;
    }

    if (!this.marks[subject]) {
      this.marks[subject] = [];
    } 
    this.marks[subject].push(mark);
  }


  getAverageBySubject(subject) {
    if(!this.marks[subject]) {
        return 0;
    } else {
        return (this.marks[subject].reduce((sum, mark) =>
            sum + mark, 0) / this.marks[subject].length).toFixed(1);  
    }
  }
  
  getAverage() {
const subject = Object.keys(this.marks);
   
      return subject.reduce((sum, subject) =>
        sum + this.getAverageBySubject(subject), 0) / subject.length;
    
  }
  
}

class Subjects {
    constructor(subjects) {
    this.subjects = subjects;
    }

    addSubjects(name) {
        if(!this.subjects.find(item => item.name === name)) {
            this.subjects = [...this.subjects, new Subjects(name)]
        }
    }


}