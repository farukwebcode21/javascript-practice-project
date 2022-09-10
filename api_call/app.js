console.log("connected properley");

document.getElementById("btn_blue").addEventListener("click", function () {
  document.body.style.backgroundColor = "hotpink";
});

document.getElementById("btn").addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});

document.getElementById("addMenu").addEventListener("click", () => {
  const li = document.createElement("li");
  const textnode = document.createTextNode("Water + Pani");
  li.appendChild(textnode);
  const myList = document.getElementById("myList");
  myList.appendChild(li);
});
document.getElementById("moveElement").addEventListener("click", () => {
  const node = document.getElementById("myList_2").lastElementChild;
  document.getElementById("myList").appendChild(node);
});

const user = { id: 1, name: "Goribe newj", job: "Actor" };
const stringfied = JSON.stringify(user);
console.log(stringfied);
const shop = {
  name: "Redbool Store",
  address: "Mirpur-12",
  revinew: 19000,
  product: ["Orange Juice", "Cocola", "Sprite", "7Up"],
  owner: {
    name: "rahim",
    profession: "Farmer",
  },
  isExpensive: false,
};
const shopStrinfied = JSON.stringify(shop);
const converted = JSON.parse(shopStrinfied);
// console.log(shop);
// console.log(shopStrinfied);
// console.log(converted);
/* const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data.title));
}; */

// const loadData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((res) => res.json())
//     .then((data) => displayUser(data));
// };

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (data) => {
  const ul = document.getElementById("user-name");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = `User  : ${user.name} \Email: ${user.email}`;

    ul.appendChild(li);
  }
};

const dataLoad = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => showData(data));
};

const showData = (data) => {
  const div = document.querySelector(".title");
  for (const post of data) {
    // console.log(post);
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.innerText = ` ${post.title}`;
    p.innerText = post.body;
    div.appendChild(h2);
    div.appendChild(p);
  }
};

// load Country data
const loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((countrys) => displayCountryDetails(countrys));
};
loadCountry();

const displayCountryDetails = (countrys) => {
  // console.log(countrys);
  // for (const country of countrys) {
  //   console.log(country);
  // }

  countrys.forEach((country) => {
    console.log(country);
    const countryDiv = document.querySelector(".country");
    const div = document.createElement("div");
    div.classList.add("country-div");
    const h4 = document.createElement("h4");
    h4.innerText = country.name.common;
    div.appendChild(h4);
    countryDiv.appendChild(div);
  });
};
