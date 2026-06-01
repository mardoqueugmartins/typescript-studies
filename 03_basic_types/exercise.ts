//1. Crie uma tupla que represente a Response de uma requisição HTTP. O primeiro valor dela sempre deve te ruma string, representando o Body. e o segundo um number, representando o Status code.

const response: [string, number] = ['{HTPP}', 200];

console.log(response)



//2. Crie uma lista que contenha apenas valores correspondentes à mesma tupla criada no exercício anterior.
const responses: [string, number][] = [['{}', 200], ['{}', 400]]

console.log(responses)


//3. Crie um Enum que guarde os status de uma compra, crie uma variável e assinale um valor à ela utilizando as opções abaixo:

// WaitingForPayment ("Aguardando Pagamento");
// PaymentConfirmed ("Pagamento Confirmado");
// SentForCustomer ("Enviado para o cliente");
// ReceivedByCustomer ("Recebido pelo cliente");

// enum OrderStatus {
//     WaitingForPayment = 'Aguardando Pagamento',
//     PaymentConfirmed = 'Pagamento Confirmado',
//     SentForCustomer = 'Enviado para o cliente',
//     ReceivedCustomer = 'Recebido pelo Cliente'
// }

// const orderStatus = OrderStatus.ReceivedCustomer
// console.log(orderStatus)

//4. Crie uma função chamada "sub", que receba dois numbers e que retorne a subtração de ambos. Essa função precisa ter um number como seu topo de retorno.

const sub = (x: number, y:number): number => {
    return x - y;
}

sub(10, 10);



//5. Crie uma função chamada "printLog", que receba um parâmetro que possa ser um number ou uma string, e que logue-o no consle. Essa função precisa ter um void como seu tipo de retorno.

const printLog = (message: string | number): void => {
    console.log(message)
}

printLog('Hello World!')

//6. Assinale a variável "cid" como valor da "customerId", mas convertendo a para number utilizando Type Assertion.

const cid: any = "123456";

const customerId = cid as number;

export {};
