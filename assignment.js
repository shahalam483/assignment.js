

function kilometerToMeter(distance){
    var result= distance*1000;
    return result;
}

var meter = kilometerToMeter(5);
console.log(meter);



function budgetCalculator(watch, phone, latop){

    var result1 = watch*50;
    var result2 = phone*100;
    var result3 = latop*500;
    var tolal = result1 + result2 + result3;
    return tolal;
}

var totalBudget=budgetCalculator( 10, 10, 10);
console.log(totalBudget);












