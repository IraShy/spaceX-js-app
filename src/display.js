const readlineSync = require('readline-sync');

class Display {

  static menu() {
    console.log('Please select from the following options:');
    console.log('0. Exit');
    console.log('1. View Elon\'s roadster info');
    console.log('2. View future launches');
    console.log('3. View one past launches');
  }

  static getOption() {
    return readlineSync.questionInt('> ');
  }

  static getFlightNum() {
    return readlineSync.question('flight number: ');
  }

  static roadster(data){
    console.log(`Name: ${data.name}`);
    console.log(`Launch Date: ${data.launch_date_utc}`);
    console.log(`Launch Mass: ${data.launch_mass_kg}kg`);
    console.log(`Speed: ${data.speed_kph.toFixed(0)}kph`);
    console.log(`Distance from Earth: ${data.earth_distance_km.toFixed(0)}`);
    console.log(`Distance to Mar: ${data.mars_distance_km.toFixed(0)}`);
    console.log(`Description: ${data.details}`);
  };
}

module.exports = {
  Display,
};
