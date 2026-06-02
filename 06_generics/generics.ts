function identity<T>(value: T): T {
    return value;
}

const result = identity(10); // number

// ------------------

function identity2<T>(value: T): T {
    return value;
}

const result2 = identity2("Hello, Mardoqueu!"); // string

// ------------------

function identity3<T>(value: T): T {
    return value;
}

const result3 = identity3({ // Object
    name: "Mardoqueu", // string
    age: 25 // number
});