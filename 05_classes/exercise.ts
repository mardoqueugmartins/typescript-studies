/*
1. Crie uma ProductInterface, que possua as seguintes propriedades:
- id (number e randonly)
- name (string)
- price (number)
- getFormattedPrice, método que retorne uma string contendo o price formatado (R$100, por exemplo)
*/
interface ProductInterface {
    readonly id: number;
    name: string;
    price: number;
    getFormattedPrice(): string;
}

/*
2. Crie uma classe chamada Product, que implemente a ProductInterface criada no exercício anterior.
*/
class Product implements ProductInterface {
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    id: number;
    name: string;
    price: number;
    getFormattedPrice(): string {
        return `R$${this.price}`
    }
    
}

/*
3. Crie uma classe chamada TShirt, que estenda a Product e que possua as seguintes propriedades:
- size (private)
- color (private)
*/
class TShirt extends Product {
    private size: string;
    private color: string;
    constructor (id: number, name: string, price: number, size: string, color: string) {
        super(id, name, price)
        this.size = size;
        this.color = color;

    }
}