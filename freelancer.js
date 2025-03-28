//Reference the elements defined in HTML
const avgPrice = document.querySelector("#average_price");
const freelancerList = document.querySelector("#list");

//Create initial array 
let freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 },
  ];

  //Function for adding an additional freelancer as a list item
  function addFreelancerEntry(freelancer) {
    const li = document.createElement("li");
    //innerHTML allows for formatting vs. textContent
    li.innerHTML = `<strong>${freelancer.name}</strong> — ${freelancer.occupation} — $${freelancer.price}`;
    freelancerList.append(li);
  }

  //Calculates function for finding avg starting price and displays it
  function updateAveragePrice(){
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const average = Math.round(total / freelancers.length);
    avgPrice.textContent = `The average starting price is $${average}.`;
  }

  //Render initial list w/ correct average price
  freelancers.forEach(addFreelancerEntry);
  updateAveragePrice();

  //Add person (Carol) to array after a couple seconds and updates average price
  setTimeout(() => {
    const carol = {name: "Carol", occupation: "Programmer", price: 70};
    freelancers.push(carol);
    addFreelancerEntry(carol);
    updateAveragePrice();
  }, 2000);

  //Generate random arrays w/ name/price/occupation at timed interval and update function accordingly
  setInterval(() => {
    let randomFreelancers = [
        { name: "Dr. Slice", price: 25, occupation: "gardener" },
        { name: "Dr. Pressure", price: 51, occupation: "programmer" },
        { name: "Prof. Possibility", price: 43, occupation: "teacher" },
        { name: "Prof. Prism", price: 81, occupation: "teacher" },
        { name: "Dr. Impulse", price: 43, occupation: "teacher" },
        { name: "Prof. Spark", price: 76, occupation: "programmer" },
        { name: "Dr. Wire", price: 47, occupation: "teacher" },
        { name: "Prof. Goose", price: 72, occupation: "driver" },
      ];
      let newFreelancer = randomFreelancers[Math.floor(Math.random() * randomFreelancers.length)];
      freelancers.push(newFreelancer);
      addFreelancerEntry(newFreelancer);
      updateAveragePrice();
  }, 3000);