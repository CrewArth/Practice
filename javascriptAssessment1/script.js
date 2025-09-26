
let displayData = document.getElementById('displayData');
let newdata = document.getElementById('newdata');

function startCoffeeProcess(){

    let orders = [];

    const customerName = prompt("Please Enter your Name: ").trim();
    console.log(customerName);

    let orderDetails = prompt(`Hey ${customerName}! What would you like to have?`);
    orderDetails = orderDetails.trim();
    orders = orderDetails.split(',');
    


    let details = {
        'name': customerName,
        'orders': orders
    }
    console.log("Customer Order Details: ", details);

    if(orders[0] == undefined || orders[0] == ""){
        displayData.append("Please Enter Some Order!")
    }
    else{    
    displayData.append(`Hey ${customerName}! Your Order: ${orders} will be ready soon.`)}
    }