//Water sample JS

let waterSamples = [4.2, 4.8, 5.0, 4.6, 5.2];
function meanAverage(waterSamples) {
    let sum = 0;
    for (let i = 0; i < waterSamples.length; i++) {
        sum += waterSamples[i];
    }
    return sum / waterSamples.length;
}   

let mean = meanAverage(waterSamples);
let averageMean = Math.round(mean * 100) / 100;
let message = `The mean average of the water samples is: ${averageMean}`;
console.log(message);

