class SchoolRegister {
    constructor() {
        this.schoolRegister = {};
    }

    addStudent(data) {
    
        const parts = data.split(', ');

    
        const namePart = parts[0].split(': ')[1];
        const gradePart = parts[1].split(': ')[1];
        const scorePart = parts[2].split(': ')[1];

        
        const name = namePart;
        const grade = parseInt(gradePart, 10);
        const score = parseFloat(scorePart);

    
        if (score >= 3.00) {
            
            const nextGrade = grade + 1;

    
            if (!this.schoolRegister[nextGrade]) {
                this.schoolRegister[nextGrade] = [];
            }

            this.schoolRegister[nextGrade].push({ name, score });
        }
    }

    generateReport() {
        let output = '';

        const grades = Object.keys(this.schoolRegister).sort((a, b) => a - b);

        grades.forEach(grade => {
            const students = this.schoolRegister[grade];
            const studentNames = students.map(student => student.name);
            const totalScore = students.reduce((sum, student) => sum + student.score, 0);
            const avgScore = (totalScore / students.length).toFixed(2);

            output += `${grade} Grade\n`;
            output += `List of students: ${studentNames.join(', ')}\n`;
            output += `Average annual score from last year: ${avgScore}\n`;
            output += '===\n';
        });

        return output;
    }
}

const data = [
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
];

const schoolRegister = new SchoolRegister();
data.forEach(entry => schoolRegister.addStudent(entry));
console.log(schoolRegister.generateReport());
