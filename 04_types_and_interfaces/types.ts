type UserType = {
    id: number;
    name: string;
    email: string;
    age?: number;
}

type AuthorType = {
    books: string[];
}


const user: UserType = {
    email: 'email@mail.com',
    id: 1,
    name: 'Mardoqueu',
    age: 21 // Opcional
};

const author: UserType & AuthorType = {
    id: 4,
    name: 'George Orwell',
    books: ['Revolução dos bichos'],
    email: 'mail@mail.com'
}

const user2: UserType = {
    id: 2,
    name: 'Karina',
    email: 'email@mail.com'
};

export {}

