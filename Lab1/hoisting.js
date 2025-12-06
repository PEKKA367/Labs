// it will work even though we created the function later. That`s hoisting
greetings();

function greetings() {
    console.log('Hi there!');
}