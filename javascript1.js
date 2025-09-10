// function varchar(){
//     var a = 10;
//     var b;

//     console.log("A Value: ", a);
//     console.log("B Value: ", b);

//     let a = 15;
//     let a;
// }

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