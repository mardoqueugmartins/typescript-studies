/*
1. Crie uma função que receba um valor e que apenas retorne-o.
Torne o tipo desse valor dinâmico utilizando Generics.
*/
const returnValue = <T>(value: T): T => {
    return value;
}

const count = returnValue<number>(2)



/*
2. Crie uma função que receba um valor e retorne um Array contendo ele.
Torne o tipo do valor recebido e do retorno da função dinâmicos utilizando Generics.
*/
const returnValueArray = <T>(value: T): T[] => {
    return [value]
}

const countArray = returnValueArray(2)

/*
3. Crie uma função que receba um array e retorne o segundo elemento dele.
Torne o tipo deesse array dinâmico utilizando Genercis.
*/
const getSecondValueFromArray = <T>(array: T[]): T => {
    return array[1];
}

const secondValueFromNumberArray = getSecondValueFromArray<number>([1, 2])
const secondValueFromStringArray = getSecondValueFromArray<string>(['1', '2'])

/*
4. Crie uma função assíncrona que receba dois valores: x e y (numbers) e retorne a soma deles.
Deixe explicito o tipo de retorno dessa função, utilizando Generics.
*/

const sum = async (x: number, y: number): Promise<number> => {
    return x + y;
}