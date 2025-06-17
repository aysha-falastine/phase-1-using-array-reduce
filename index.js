const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteries = [
  { type: "AA", assembled: 5 },
  { type: "AAA", assembled: 12 },
  { type: "AA", assembled: 4 },
  { type: "AAA", assembled: 10 }
];

const totalBatteries = batteries.reduce((total, battery) => {
  return total + battery.assembled;
}, 0);
