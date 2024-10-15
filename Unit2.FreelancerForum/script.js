const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  // { name: "Prof. Prism", price: 81, occupation: "teacher" },
  // { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  // { name: "Prof. Spark", price: 76, occupation: "programmer" },
  // { name: "Dr. Wire", price: 47, occupation: "teacher" },
  // { name: "Prof. Goose", price: 72, occupation: "driver" }
];

const names = ["Dr. Slice", "Dr. Pressure", "Prof. Possibility","Prof. Prism"];
const prices = [25, 51, 43, 81];
const occupations = ["gardener", "programmer", "teacher","driver"];
const maxFreelancers = 8;



const addFreeIntervalId = setInterval(addFreelancer, 1000);
console.log("calling interval");
// addFreelancer();
render();

function render() {
  //Render the names
  const namesList = document.querySelector(".names");
  namesList.textContent="Name";
  const nameElements = freelancers.map((freelancer) => {
    const nameElement = document.createElement("div");
    
    nameElement.innerHTML=freelancer.name;
    return nameElement;
  });
  

  //Render the price
  const priceList = document.querySelector(".price");
  
  const priceElements = freelancers.map((freelancer) => {
    const priceElement = document.createElement("div");
  
    priceElement.innerHTML=freelancer.price;
    
    return priceElement;
  });
  
  //Render the occupation
  const occupationList = document.querySelector(".occupation");
  const occupationElements = freelancers.map((freelancer) => {
    const occupationElement = document.createElement("div");
    occupationElement.innerHTML=freelancer.occupation;
    return occupationElement;
  });
  namesList.replaceChildren(...nameElements);
  priceList.replaceChildren(...priceElements);
  occupationList.replaceChildren(...occupationElements);
  
}
// Adds a random addFreelancer
function addFreelancer() {
  if (freelancers.length >= maxFreelancers) {
    // tell it stop
    clearInterval(addFreeIntervalId);
    return;
  }

  const name = names [Math.floor(Math.random() * names.length)];
  const price = prices [Math.floor(Math.random() * prices.length)];
  const occupation = occupations [Math.floor(Math.random() * occupations.length)];
  freelancers.push({name, price, occupation});
  render();

  // Update average price
  
  var arr = Object.values(freelancers);
  console.log(arr);
  
  const avgTotalPrice = freelancers.reduce ((accumulator,element) => {
    return accumulator=accumulator + element.price
  },0);
  let average=avgTotalPrice/arr.length;
  console.log(average);

  const avgPrice=document.querySelector('.avgprice');
  avgPrice.innerHTML = "The average price is " + average;
  return average;

}
