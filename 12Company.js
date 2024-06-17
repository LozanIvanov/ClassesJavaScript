class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department) {
            throw new Error("Invalid input!");
        }
        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartmentName = "";
        let maxAverageSalary = 0;

        for (const department in this.departments) {
            const totalSalary = this.departments[department].reduce((acc, curr) => acc + curr.salary, 0);
            const averageSalary = totalSalary / this.departments[department].length;

            if (averageSalary > maxAverageSalary) {
                maxAverageSalary = averageSalary;
                bestDepartmentName = department;
            }
        }

        const employees = this.departments[bestDepartmentName].sort((a, b) => {
            if (a.salary === b.salary) {
                return a.name.localeCompare(b.name);
            }
            return b.salary - a.salary;
        });

        let result = `Best Department is: ${bestDepartmentName}\n`;
        result += `Average salary: ${maxAverageSalary.toFixed(2)}\n`;

        employees.forEach(employee => {
            result += `${employee.name} ${employee.salary} ${employee.position}\n`;
        });

        return result.trim();
    }
}


let c = new Company();
c.addEmployee("Stamat", 2000, "engineer", "Construction");
c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Martin", 500, "support", "Construction");
c.addEmployee("Stanley", 2000, "architect", "Construction");
c.addEmployee("Stamat", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
