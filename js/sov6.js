
const sov = (ms) => {
    return new Promise( dummyFunction => setTimeout(dummyFunction, ms));
}

const doSomethingAsync = async () => {
    console.log("11111111 før sov");
    await sov(2000);
    console.log("1111færdig med at sove i async process");
    console.log("1111nu kan jeg gå igang med at lave noget");
}


console.log("start1");
doSomethingAsync();
console.log("slut1");

