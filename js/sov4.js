
// 1. Create a Promise to fetch the water
let promise = new Promise(function(resolve, reject) {
    // Pretend a delay of 2 sec to fetch it!
    setTimeout(function() {
        // Fetched the water. Let's resolve the promise
        if (3>4) {
            resolve('Hurray! Fetched the Water.');
        } else {
            reject('Det gik galt');
        }

    }, 2000);
});

// 2. Function to Set up the handler to handle a promise result.
// It is to inform the grandparents when the result is available.
const grandParentsCooking2 = () => {
    // The handler function to handle the resolved promise
    promise.then(function(result) {
        // Fetched the water. Now grandparents can start the cooking
        console.log(`cooking rice with the ${result}`);
    }, function(error) {
        console.log(`cooking rice with the ${error}`);
    });
}

const grandParentsCooking = () => {
    // The handler function to handle the resolved promise
    promise.then((result) => {
        // Fetched the water. Now grandparents can start the cooking
        console.log(`cooking rice with the ${result}`);
    }, (error) => {
        console.log(`cooking rice with the ${error}`);
    });
}



// 3. Calling the function to activate the set up.
grandParentsCooking()

