class CarProductionRegister {
    constructor() {
        this.carRegister = {};
    }

    addEntry(entry) {
        const [brand, model, produced] = entry.split(' | ');
        const producedCars = parseInt(produced);

        if (!this.carRegister[brand]) {
            this.carRegister[brand] = {};
        }

        if (!this.carRegister[brand][model]) {
            this.carRegister[brand][model] = 0;
        }

        this.carRegister[brand][model] += producedCars;
    }

    displayRegister() {
        for (const brand in this.carRegister) {
            console.log(brand);
            for (const model in this.carRegister[brand]) {
                console.log(`###${model} -> ${this.carRegister[brand][model]}`);
            }
        }
    }
}

const carData = [
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
];

const register = new CarProductionRegister();

carData.forEach(entry => register.addEntry(entry));


register.displayRegister();
