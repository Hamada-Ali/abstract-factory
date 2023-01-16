
// class chape (how pizza look like)

class Pizza {
    constructor(name,size,type) {
        this.name = name;
        this.size = size;
        this.type = type;
    }

    prepare() {
        console.log("prepare");
    }
    bake() {
        console.log("bake");
    }
    deliver() {
        console.log("deliver");
    }
}

// meatPizza (how it look like)

class MeatPizza extends Pizza {
    constructor() {
        super("Chicago style pizza", "Large", "Meat")
    }
}

// the same for vegePizza
class VegePizza extends Pizza {
    constructor() {
        super("Only natural", "Large", "Vegetarian")
    }
}

// factory
class MakePizza {

    // factory method

    createPizza(type) {
        switch (type) {
            case "meat":
                return new MeatPizza()
            case "vege":
                return new VegePizza()
            default:
                throw new Error("Something went wrong...");
        }
    }
}

// abstract factory
class MakeMeatPizza extends MakePizza {
    constructor() {
        super()
    }

    create() {
        return this.createPizza("meat")
    }
}

// abstract factory
class MakeVegePizza extends MakePizza {
    constructor() {
        super()
    }

    create() {
        return this.createPizza("vege")
    }
}

class OrderPizza {

}

const test = new MakeVegePizza().create();
console.log(test)
