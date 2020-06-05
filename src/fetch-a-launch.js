const fetch = require('node-fetch');
// const readlineSync = require('readline-sync');

// const flight = (data) => ({
//   flight_number: data.flight_number,
//   mission_name: data.mission_name,
//   launch_date: data.launch_date_local.slice(0, 10),
//   rocket_name: data.rocket.rocket_name,
//   rocket_type: data.rocket.rocket_type,
//   launch_success: data.launch_success,
//   details: data.details,
// });


const getLaunch = async (flightNum) => {
  try {
    console.clear();
    const response = await fetch(`https://api.spacexdata.com/v3/launches/${flightNum}`);
    if (!response.ok) {
        throw new Error(`Error with roadster response ${response.status}`);
      }
    const data = await response.json();
    return data;
    // console.log(flight(data));
  } catch (err) {
    console.error(err.message)
  }
};

const futureLaunches = async () => {
  try {
    console.clear();
    const response = await fetch('https://api.spacexdata.com/v3/launches/upcoming');
    if (!response.ok) {
        throw new Error(`Error with roadster response ${response.status}`);
      }
    const data = await response.json();
    return data;
    // data.forEach((launch) => {
    //   console.log(flight(launch));
    // });
  } catch (err) {
    console.error(err.message)
  }
};

module.exports = {
  getLaunch,
  futureLaunches
};

// console.clear();

// const options = [' Roadster distance from Mars', 'View future launches', 'View one past launch'];
// const index = readlineSync.keyInSelect(options, "What are you up to?") + 1;


// switch(index) {
//   case 0:
//     console.log('exit');
//     process.exit();
//   case 1:
//     console.log('roadster');
//     break;
//   case 2:
//     futureLaunches();
//     break;
//   case 3:
//     const flightNum = readlineSync.question('flight number: ')
//     getLaunch(flightNum);
//     break;
// }
//  module.exports = {
//    getLaunch,
//    futureLaunches,
//  }
