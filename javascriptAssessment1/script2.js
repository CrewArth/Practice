let data = document.getElementById('data');

async function brushTeeth() {
    try {
        await new Promise((resolve, reject) => {
            resolve(
                setTimeout(() => {
                    data.append("Brushed Teeth.")
                }, 1000))

            reject();
        })
    }
    catch (error) {
        reject(error);
    }
}

async function haveBreakfast() {
    try {
        await new Promise((resolve, reject) => {
            resolve(
                setTimeout(() => {
                    data.append("Had Breakfast.")
                }, 1500));
            reject();
        })
    }
    catch (error) {
        reject(error);
    }
}

async function goToWork() {
    try {
        await new Promise((resolve, reject) => {
            resolve(
                setTimeout(() => {
                    data.append("Reached Office")
                    data.append("All Task Done!")
                }, 1000));
            reject();
        })
    }
    catch (error) {
        reject(error);
    }
}



brushTeeth()
haveBreakfast()
goToWork()