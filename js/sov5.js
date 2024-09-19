
// 1. Create a Promise to fetch the water
let promise = new Promise((resolve, reject) => {
    // Pretend a delay of 2 sec to fetch it!
    setTimeout(()=> {
        // Fetched the water. Let's resolve the promise
        if (3>4) {
            resolve('Hurray! Fetched the Water.');
        } else {
            reject('Det gik galt');
        }

    }, 2000);
});

function good(result) {
    console.log(`cooking rice with the ${result}`);
}

function bad(error) {
    console.log(`cooking rice with the ${error}`);
}

const grandParentsCooking = () => {
    // The handler function to handle the resolved promise
    promise.then(good, bad);
}


// 3. Calling the function to activate the set up.
grandParentsCooking()

