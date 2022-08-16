// interface for params in func constructor
interface IParams { 
    size: string,
    price: number,
}

// interface for class
interface IPizza {
    size: string,
    // price: number, ---- в интерфейсе не должно быть приватных  
    changePrice(newPrice: number): void,
}

class Pizza implements IPizza{
    public size: string;
    private price: number; // private - only in class!!!

    constructor({size, price}: IParams){ 
        this.size = size;
        this.price = price;
    }

    changePrice(newPrice: number): void {
        this.price = newPrice;
    }

}

const Pepperoni = new Pizza ({size: "medium", price: 200}); // => {..., price: 200}
Pepperoni.changePrice(350); // => {..., price: 350}

console.log("07-classes:", Pepperoni);
export {}