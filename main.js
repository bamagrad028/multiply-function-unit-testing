// My Solution
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    let result = 0;
    
    //TODO: Write a for loop which adds the "a" number to itself "b" times.

    return result;
}


//My Unit Test

function testMultiply() {
    // start testing a happy path

    let result = multiply(2, 3);
    console.assert(result === 6, JSON.stringify ( {
        "test": 'multiply(2, 3)',
        "expected": 6,
        "result": result

    }));
}
testMultiply();

function add (a, b) {
    return a + b;
}

function multiply(a, b) {
    let result = 0;
    for(let i = 0; i < b; i++) {
        result = add(result, a);
    }
    return result;
}

function testMultiply() {

    //Test # 1
    // start with a happy path
    let result = multiply(2, 3);
    console.assert(result === 6, JSON.stringify( {
        "test": 'multiply(2, 3',
        "expected": 6,
        "result": result
    }));
}
testMultiply();

/* Test # 2
    Think about non obvious senarios.
    Our solution should be able to handle 0s:
    i.e., 0 * 3 === 3
*/

result = multiply(0, 3);

console.assert(result === 0, JSON.stringify( {
    "test": 'multiply(0, 3)',
    "expected": 0,
    "result": result
}));

/* Test # 3
    Think about non obvious scenarios.
    Our solution should be able to handle negative numbers:
    i.e., 2 * -3 === 6
*/

result = multiply(2, -3);
console.assert(result === -6, JSON.stringify({
    "test": 'multiply(2, -3)',
    "expected": -6,
    "result": result

}));

/* Test # 4
    Think about non obvious scenarios.
    The multiply function is non applicable for non-numbers. So, our solution should return NaN if an argument is not a number, or is undefiend, or is NAN
    i.e., "test string" * 3 === Nan
*/

result = multiply("test string", 3);

console.assert(result === NaN, JSON.stringify( {
    "test": 'multiply("test string", 3)',
    "expected": NaN,
    "result": result

}));

/* Test # 5
    Think about non obvious scenarios.
    Our solution should be able to handle decimal numbers:
    i.e., 3 * 2.2 === 6.6
*/

result = multiply(3, 2.2);
console.assert(result === NaN, JSON.stringify( {
    "test": ' multiply(3, 2.2)',
    "expected": 6.6,
    "result": result
}));
