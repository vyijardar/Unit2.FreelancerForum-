
//Initiating an array of possible names and an array of possible occupations.
const names = ["Dr. Slice", "Dr. Pressure", "Prof. Possibility"];
const prices = [25, 51, 43];
const occupations = ["Gardener","programmer","teacher"];
const maxFreelancers = 8;

//Initiating an array of  two freelancers with names, occupations, and starting prices.
const freelancers = [
  { name: "Alice",
    price: 30, 
    occupation: "Writer"
   },
  { 
    name: "Bob", 
    price: 50, 
    occupation: "teacher"
   },
];

// `setInterval` will call `addFreelancer` every 1000 milliseconds (1 second)
const addFreeIntervalId = setInterval(addFreelancer, 1000);
render();
/*
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
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

//  * Add a random freelancer to the `freelancers` array

function addFreelancer() {

 // Stop adding shapes if we've reached the maximum number of shapes
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreeIntervalId);
    return;
  }

  const name = names [Math.floor(Math.random() * names.length)];
  const price = prices [Math.floor(Math.random() * prices.length)];
  const occupation = occupations [Math.floor(Math.random() * occupations.length)];
  freelancers.push({name, price, occupation});
  render();

  //Calculates the average starting price of the freelancers array.
  
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
