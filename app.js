const logsMessage = message => console.log(message);

// logsMessage("Hello!");

// setTimeout(() => logsMessage("After 2 seconds, I will appear!"), 2000);

const getWords = () => {
    console.log("this logs instantly!");

    setTimeout(() => {
        console.log("I log three seconds after the function is called!");

        setTimeout(() => {
            console.log("This will run five seconds after getWords is called");

            setTimeout(() => {
                console.log("A final word.")
            }, 1000);
        }, 2000);
    }, 3000);
}

// getWords();

const done = () => console.log("Job's done!");

const countdown = (num, callback) => {
    if (num == 0) {
        callback();
    } else {
        console.log(num)
        setTimeout(() => {
            countdown(num - 1, callback);
        }, 1000);
    }
}

// countdown(5, done);

const lunchTime = true;

const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if (lunchTime) {
            const myLunch = {
                lunch: "Soup",
                drink: "Coke"
            };
            resolve(() => {
                console.log("yay")
            });
        } else {
            const err = new Error("It's not lunchtime!");
            reject(err);
        }
    });
}

orderMeSomeFood()
    .then(value => history.push("/profile"))
    .catch(err => console.log(err));