
//producer function to generate to random numbers
function producer() {
    const a = Math.floor(Math.random()*10);
    const b = Math.floor(Math.random()*10);

    // return a + " + " + b + " = ";
    // return `${a} + ${b} =`;
    return [a, b];
}

//consumer function to add the two numbers
function consumer(a, b) {
    const total = a + b;
    return total;
}

// some logic to turn "a + b "
function parser(str) {
    
    return [a, b]
}


const [a, b] = producer();
const output = consumer(a, b);
console.log(a + " + " + b + " = ");
console.log(output);
document.querySelector("h1").innerHTML = `${a} + ${b} =` + " " + output;
