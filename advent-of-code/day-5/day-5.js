const {
  seeds,
  seedToSoil,
  soilToFertiliser,
  fertiliserToWater,
  waterToLight,
  lightToTemperature,
  temperatureToHumidity,
  humidityToLocation,
  convertDataToArray,
} = require("./day-5-data");


function genericCalc(input, map) {
  const output = [];
  for (let i = 0; i < input.length; i++) {
    let found = false;
    for (let j = 0; j < map.length; j++) {
      const sourceStart = map[j][1];
      const sourceEnd = sourceStart + map[j][2] - 1;
      if (input[i] >= sourceStart && input[i] <= sourceEnd) {
        const destinationStart = map[j][0];
        const outputData = destinationStart + (input[i] - sourceStart);
        output.push(outputData);
        found = true;
        break;
      }
    }
    if (!found) {
      output.push(input[i]);
    }
  }
  console.log(output)
  return output;
}

soil = genericCalc(seeds, seedToSoil);
fertiliser = genericCalc(soil, soilToFertiliser)
water = genericCalc(fertiliser, fertiliserToWater) 
light = genericCalc(water, waterToLight)
temperature = genericCalc(light, lightToTemperature)
humidity = genericCalc(temperature, temperatureToHumidity)
location = genericCalc(humidity, humidityToLocation)

console.log("minimum", Math.min(...location))