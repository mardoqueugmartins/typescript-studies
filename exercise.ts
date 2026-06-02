/* 
1. Crie os seguintes Types:
 - UserType, que contenha as pripriedades id (number) e name (string);
 - BookType, que contenha as propriedades id (number), name (string) e authorId (number);
 AuthorType, que expanda o UserType e adicione a propriedade books (BookType[]) à ele;
 Crie uma variável para cada um deles, e logue-as no console.
 */
type UserType = {
    id: number;
    name: string;
}

type BookType = {
    id: number;
    name: string;
    authorId: number;
}

type AuthorType = UserType & {
    books: BookType[];
}

/*
2. Crie uma lista de usuários (utilizando o UserType criado no exercício acima) e logue-a no console.
*/

const users: UserType[] = [
    {
        id: 1,
        name: 'Mardoqueu'
    },
    {
        id: 2,
        name: 'Karina'
    },
]


/*
3. Crie uma interface chamada "MathFunc", que represente uma função que receba x (number) e y (number) e que retorne um number.
Implemente a interface criada em duas funções.
*/

interface MathFunc {
    (x: number, y: number): number;
}

const sum: MathFunc = (x: number, y: number) => {
    return x + y;
}

const multiply: MathFunc = (x: number, y: number) => {
    return x * y;
}

/*
4. Crie as seguintes interfaces:
- ProductInterface, que contenha as propriedades id (number), name (string) e price (number).
- OrderInterface, que contenha as propriedades id (number) e products (productInterface[]).
- Crie uma vriável para cada uma delas. Logue-as no console.
*/

interface ProductInterface {
    id: number;
    name: string;
    price: number;
}

interface OrderInterface {
    id: number;
    products: ProductInterface[];
}

