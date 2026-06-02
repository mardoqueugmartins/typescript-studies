interface UserInterface {
    id: number;
    name: string;
    email: string;
};


const user3: UserInterface = {
    id: 2,
    name: 'Mardoqueu',
    email: 'test@mail.com'
};


// Interfaces com Funções
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y:number) => {
    return x + y;
}

const sub: MathFunc = (x: number, y:number) => {
    return x - y;
};


// Interfaces com métodos
interface UserInterface2 {
    id: number;
    name: string;
    register(): string; // função
}

const user4: UserInterface2 = {
    id: 1,
    name: 'Martins',
    register() {
        return 'Registrado com sucesso!';
    },
};


// Interfaces com Unions
interface AuthorInterface {
    books: string[];
}

const author2: AuthorInterface & UserInterface = {
    id: 4,
    name: 'George Orwell',
    books: ['Revolução dos bichos'],
    email: 'mail@mail.com'
}

const author3: AuthorInterface | UserInterface = {
    id: 5,
    name: 'Mardoqueu',
    email: 'mail@mail.com'
}