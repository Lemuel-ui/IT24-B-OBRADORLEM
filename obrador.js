class Shoe {
    constructor(model, releaseYear, sizes, price) {
        this.model = model;
        this.releaseYear = releaseYear;
        this.sizes = sizes;
        this.price = price;
    }

    getDetails() {
        return `Model: ${this.model}\nRelease Year: ${this.releaseYear}\nSizes: ${this.sizes}\nPrice: $${this.price.toFixed(2)}`;
    }
}


class NikeAirMax extends Shoe {
    constructor() {
        super("Nike Air Max", 2022, "7 / 8 / 9 / 10 / 11", 150);
    }
}


class AdidasUltraboost extends Shoe {
    constructor() {
        super("Adidas Ultraboost", 2023, "6 / 7 / 8 / 9 / 10 / 11 / 12", 180);
    }
}


class PumaRSX extends Shoe {
    constructor() {
        super("Puma RS-X", 2021, "8 / 9 / 10 / 11", 130);
    }
}


class ShoeSelectionSystem {
    constructor() {
        this.shoes = {
            "1": new NikeAirMax(),
            "2": new AdidasUltraboost(),
            "3": new PumaRSX()
        };
    }

    displayOptions() {
        console.log("Select a shoe model:");
        console.log("1: Nike Air Max");
        console.log("2: Adidas Ultraboost");
        console.log("3: Puma RS-X");
    }

    getShoeDetails(option) {
        const shoe = this.shoes[option];
        return shoe ? shoe.getDetails() : "Shoe model not found.";
    }
}


const shoeSystem = new ShoeSelectionSystem();


function handleUserSelection(option) {
    console.log(shoeSystem.getShoeDetails(option));
}


function startSelectionProcess() {
    shoeSystem.displayOptions();
    
  
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter the number of the shoe you want to select: ', (option) => {
        handleUserSelection(option);
        readline.close();
    });
}


startSelectionProcess();