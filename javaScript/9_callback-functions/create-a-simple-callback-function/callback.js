function sayHello() {
    console.log('Hello');
}

function executeCallback ( callback ) {
    callback();
}

executeCallback(sayHello);

executeCallback(() => console.log("goodbye"))