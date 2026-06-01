// Basic Types
let id: number = 5; //Numbers
let names: string = "Mardoqueu" // Strings
let isPublished: boolean = true; // Booleans


//Special stypes
let id2: any; // Pode ser qualquer coisa.
let data: unknown; // Receber um valor que você ainda não conhece.



// Arrays - Guardar vários valores do mesmo tipo.
const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ["a", "b", "c"];
const Booleans: boolean[] = [true, false];
const anyValues: any[] = [1, "a", true] 


// Tuples - Guardar vários valores em posições fixas.
const person: [number, string, boolean] = [1, "Marodqueu", true] // Precisa seguir a ordem.


// Unions - Permitir mais de um tipo.
const uid: number | string = 5; // Pode usar number ou string.


// Enums - Padronizar variáveis.
enum Directions {
    up = 'cima',
    down = 'baixo',
    left = 'esquerda',
    right = 'direita'
}

const direction1 = Directions.down
console.log(direction1) // baixo


// Type Assertion -
const cid: any = 1;
const costumerId = cid as number;

const costumerIds = ['1', '2', '3']
const uuid = '123'


// Functions
const sum = (num1: number, num2: number) => {
    return num1 + num2;
}

sum (1, 5);


// Void - Não retorna nada.
const printMessage = (message: string) => {
    console.log(message)
}