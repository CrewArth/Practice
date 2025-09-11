function calcBmi(){
    let markHeight = 1.69;
    let markWeight = 78;
    let johnHeight =1.95 ;
    let johnWeight =92;

    const Mbmi = markWeight / (markHeight * markHeight);
    const Jbmi = johnWeight / (johnHeight * johnHeight);
    console.log('Mark BMI: ', Mbmi);
    console.log('John BMI: ', Jbmi);

    if(Mbmi > Jbmi){
        console.log("Mark BMI is more than John.");
    }
    else{
        console.log("John BMI is more than Mark");
    }
}



// var → function-scoped, can be re-declared & updated.
// let → block-scoped, can be updated but not re-declared in same scope.
// const → block-scoped, cannot be re-assigned (value fixed, but objects/arrays can still mutate).


let markData = {
    'height': 1.69,
    'weight': 78
}

let johnData = {
    'height': 1.78,
    'weight': 92
}

function calculateBmi(height, weight){
    let bmi = weight / (height * height);

    return bmi;
}

mark = calculateBmi(markData.height, markData.weight)
john = calculateBmi(johnData.height, johnData.weight)

if (mark > john){
    console.log("Mark BMI is higher");
}
else{
    console.log("John BMI is higher.");
}