// to remove placeholder once search bar is active
const elem = document.querySelector(".search");
document.addEventListener("click", () => {
  if (elem === document.activeElement) {
    elem.setAttribute("placeholder", "");
  } else {
    elem.setAttribute("placeholder", "Search or type");
  }
});

let carsData = [
  {
    name: "Audi 718 Cayman S",
    manufactorer: "Audi",
    liked: false,
    coupe: true,
    img: "images/car1.png",
    passengers: 4,
    mode: "Automatic",
    price: 400,
    new: "New",
    id: 0,
  },
  {
    name: "Mercedes 718 Cayman S",
    manufactorer: "Mercedes",
    liked: true,
    coupe: true,
    img: "images/car2.png",
    passengers: 4,
    mode: "Manual",
    price: 400,
    new: "Used",
    id: 1,
  },
  {
    name: "Suzuki 718 Cayman S",
    manufactorer: "Suzuki",
    liked: false,
    coupe: false,
    img: "images/car3.png",
    passengers: 4,
    mode: "Manual",
    price: 400,
    new: "Old",
    id: 2,
  },
  {
    name: "Audi 718 Cayman S",
    manufactorer: "Audi",
    liked: false,
    coupe: true,
    img: "images/car4.png",
    passengers: 4,
    mode: "Automatic",
    price: 1000,
    new: "New",
    id: 3,
  },
  {
    name: "Mercedes 718 Cayman S",
    manufactorer: "Mercedes",
    liked: false,
    coupe: true,
    img: "images/car5.png",
    passengers: 4,
    mode: "Manual",
    price: 700,
    new: "New",
    id: 4,
  },
  {
    name: "Suzuki 718 Cayman S",
    manufactorer: "Suzuki",
    liked: false,
    coupe: true,
    img: "images/car6.png",
    passengers: 4,
    mode: "Manual",
    price: 400,
    new: "Old",
    id: 5,
  },
  {
    name: "Mercedes 718 Cayman S",
    manufactorer: "Mercedes",
    liked: false,
    coupe: true,
    img: "images/car1.png",
    passengers: 4,
    mode: "Manual",
    price: 200,
    new: "New",
    id: 6,
  },
  {
    name: "Audi 718 Cayman S",
    manufactorer: "Audi",
    liked: false,
    coupe: true,
    img: "images/car2.png",
    passengers: 4,
    mode: "Manual",
    price: 450,
    new: "Used",
    id: 7,
  },
  {
    name: "Suzuki 718 Cayman S",
    manufactorer: "Suzuki",
    liked: true,
    coupe: true,
    img: "images/car3.png",
    passengers: 4,
    mode: "Manual",
    price: 200,
    new: "Old",
    id: 8,
  },
];

let condition = document.getElementById("status");
let type = document.getElementById("type");
// selected based on filters
var carsSelect = [];
if (condition.value === "all" && type.value === "all") {
  carsSelect = carsData;
} else if (condition.value === "all") {
  carsSelect = carsData.filter((car) => car.manufactorer === type.value);
} else if (type.value === "all") {
  carsSelect = carsData.filter((car) => car.new === condition.value);
} else {
  carsSelect = carsData.filter(
    (car) => car.new === condition.value && car.manufactorer === type.value
  );
}

let parentCars = document.getElementsByClassName("cars")[0];
// to list cars selected
function update() {
  for (let i = 0; i < carsSelect.length; i++) {
    let carDiv = document.createElement("div");
    carDiv.setAttribute("class", "car");
    let nameDiv = document.createElement("div");
    carDiv.appendChild(nameDiv);
    nameDiv.setAttribute("class", "name");
    let carName = document.createElement("h5");
    nameDiv.appendChild(carName);
    carName.textContent = carsSelect[i].name;
    let like = document.createElement("i");
    nameDiv.appendChild(like);
    like.setAttribute("class", "fa-heart");
    if (carsSelect[i].liked == true) {
      like.classList.add("fa-solid", "like");
    } else {
      like.classList.add("fa-regular");
    }
    let coupe = document.createElement("span");
    carDiv.appendChild(coupe);
    if (carsSelect[i].coupe == true) {
      coupe.textContent = "Coupe";
    }
    let imgDiv = document.createElement("div");
    carDiv.appendChild(imgDiv);
    let imgSrc = document.createElement("img");
    imgDiv.appendChild(imgSrc);
    imgSrc.setAttribute("src", carsSelect[i].img);
    let foot = document.createElement("div");
    carDiv.appendChild(foot);
    foot.setAttribute("class", "foot");
    let footP = document.createElement("p");
    foot.appendChild(footP);
    let noSeats = document.createElement("span");
    footP.appendChild(noSeats);
    noSeats.outerHTML = `<i class="fa-regular fa-user"></i> ${carsSelect[i].passengers}  `;
    let mode = document.createElement("span");
    footP.appendChild(mode);
    mode.outerHTML = `<i class="fa-solid fa-rotate"></i> ${carsSelect[i].mode}`;
    let price = document.createElement("span");
    foot.appendChild(price);
    price.innerHTML = `<b>$${carsSelect[i].price}/d</b>`;
    parentCars.appendChild(carDiv);
  }
}

update();
// on change of car type
type.addEventListener("change", () => {
  let cars = document.querySelectorAll(".car");
  if (cars.length > 0) {
    for (let i = cars.length - 1; i >= 0; i--) {
      // empty current selection before listing new selection
      cars[i].remove();
    }
  }

  if (condition.value === "all" && type.value === "all") {
    carsSelect = carsData;
  } else if (condition.value === "all") {
    carsSelect = carsData.filter((car) => car.manufactorer === type.value);
  } else if (type.value === "all") {
    carsSelect = carsData.filter((car) => car.new === condition.value);
  } else {
    carsSelect = carsData.filter(
      (car) => car.new === condition.value && car.manufactorer === type.value
    );
  }
  update();
});
// on change of car condition
condition.addEventListener("change", () => {
  let cars = document.querySelectorAll(".car");
  if (cars.length > 0) {
    for (let i = cars.length - 1; i >= 0; i--) {
      cars[i].remove();
    }
  }

  if (condition.value === "all" && type.value === "all") {
    carsSelect = carsData;
  } else if (condition.value === "all") {
    carsSelect = carsData.filter((car) => car.manufactorer === type.value);
  } else if (type.value === "all") {
    carsSelect = carsData.filter((car) => car.new === condition.value);
  } else {
    carsSelect = carsData.filter(
      (car) => car.new === condition.value && car.manufactorer === type.value
    );
  }
  update();
});

// to add/remove like
let hearts = document.getElementsByClassName("fa-heart");
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", () => {
    let newLike = carsData.find((like) => like.id === carsSelect[i].id);
    console.log(newLike);
    newLike.liked = !newLike.liked;
    if (hearts[i].classList.contains("fa-regular")) {
      hearts[i].classList.replace("fa-regular", "fa-solid");
      hearts[i].classList.add("like");
    } else {
      hearts[i].classList.replace("fa-solid", "fa-regular");
      hearts[i].classList.remove("like");
    }
  });
}
