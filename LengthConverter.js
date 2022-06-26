
//NOT COMPLETED YET...STILL WORKING ON THIS ONE
//NOT COMPLETED YET...STILL WORKING ON THIS ONE
//NOT COMPLETED YET...STILL WORKING ON THIS ONE


let miles = 0.62137;
let kilo = 1.60934;
let centimeters = 2.540;
let inchesss = 0.393701;

const converter = (kilometers) => {
    console.log("I will now convert Kilometers to Miles: ");
    return kilometers * miles;
}

const conversion = (mil) => {
    console.log("I will now convert Miles to Kilometers: ");
    return mil * kilo;
}

const inc = (noo) => {
    console.log("I will now convert Inches to Centimeters: ");
    return noo * centimeters;
}

const centi = (goob) => {
    console.log("I will now convert Centimeters to Inches: ")
    return goob * inchesss;
}


console.log(converter(7));
console.log(conversion (9));
console.log(inc(3));
console.log(centi(7));