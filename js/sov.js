
function sov(ms) {
    console.log("skab nyt promise");
    const prom = new Promise( dummyFunction => setTimeout( dummyFunction, ms) );
    return prom;
}


console.log("Vi starter")
sov(10000).then( () => {
    console.log("Vi har sovet")
    console.log("Vi er klar til at fortsætte")
})

console.log("Slut")

