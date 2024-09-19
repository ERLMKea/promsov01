
function kaldMig(func) {
    console.log(func)
    console.log(typeof func)
}

function sov(ms) {
    console.log("skaber nyt promise")
    const prom = new Promise(dummyFunction => {
        console.log("nu vil jeg kalde setTimeout")
        setTimeout(() => kaldMig(dummyFunction), ms)
        console.log("jeg er færdig med at kalde timeout")
    })
    return prom
}

sov(2000).then( () => {
    console.log("vi har sovet 2000")
})

console.log("slut1")

