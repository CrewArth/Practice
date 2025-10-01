
// Getting the Docs
startBtn = document.getElementById('startRoutine').addEventListener("click", startWorkflow)
resetBtn = document.getElementById('reset').addEventListener("reset", resetData)
startR = document.getElementById('startR')
bp = document.getElementById('bp')
alltask = document.getElementById('alltask')
lid = document.getElementById('lid')

let todayTask = ['prepare breakfast', 'wash dishes', 'make coffee'];

function prepareBreakfast() {
    const promise1 = new Promise(function (resolve, reject) {
        const status = true;

        if (status) {
            setTimeout(function () {
                resolve("Preparing the Breakfast")
            }, 2000)
        } else {
            reject("Error in Breakfast")
        }
    })
    return promise1;
}

function washDishes() {
    const promise2 = new Promise(function (resolve, reject) {
        const status = true;

        if (status) {
            setTimeout(function () {
                resolve("Dishes Washed")
            }, 1000)

        } else {
            reject("Couldn't wash dishes")
        }
    })
    return promise2;
}

function makeCoffee() {
    const promise3 = new Promise(function (resolve, reject) {
        const status = true;

        if (status) {
            setTimeout(function () {
                resolve("Prepared Coffee")
            }, 2000)
        } else {
            reject("No Coffee Today")
        }
    })

    return promise3;
}

function showTodaysTask() {

    todayTask.map(function (val, x) {
        console.log(val, x + 1);
        let capChar = val.charAt(0).toUpperCase() + val.slice(1); 
    
        // lid.append(`${x+1}, " ", ${capChar}, <br>`)
        lid.append("   ", x+1, "  ",capChar)
        // lid.innerHTML = (`${x+1}, ${capChar} <br>`)

        // ttask = lid.innerHTML = x+1, capChar
        // lid.innerHTML = ttask + capChar
        
    })
}
async function startWorkflow() {
    try {
        startR.innerHTML = "";
        showTodaysTask();

        const t1 = await prepareBreakfast()
        .then((data) => {
            console.log(data); f= alltask.innerHTML = data+ "<br>" ;
        })
        .catch((err) => { console.error(err) });

        const t2 = await washDishes()
        .then((data) => { console.log(data); alltask.innerHTML = f + data+ "<br>"  })  //alltask.append(data)+ "<br>"
        .catch((err) => { console.log(err) });

        const t3 = await makeCoffee()
        .then((data) => { console.log(data); alltask.append(data)+ "<br>" })
        .catch((err) => { console.error(err) });
    }
    catch (err) {
        console.error(err)
    }
}

function resetData() {
    document.body.innerHTML = ""
    
}
