let portraits = [
  {
    name: "Israfuil Mammadov",
    rating: 1,
    task: 2,
    startDate: "2024.01.15",
    price: 40,
    views: 24,
    bio: " Experienced in general handyman tasks. Reliable and efficient.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Ruslan Malikov",
    rating: 3,
    task: 24,
    startDate: "2024.02.20",
    price: 35,
    views: 2,
    bio: " Skilled in home repairs and maintenance. Dedicated to quality service.",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Vasif Abdullayev ",
    rating: 4,
    task: 1,
    startDate: "2024.07.20",
    price: 30,
    views: 14,
    bio: " Elite tasker with expertise in complex installations and repairs.",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Ruhid Shukurlu",
    rating: 2,
    task: 15,
    startDate: "2022.07.20",
    price: 15,
    views: 25,
    bio: " Committed to providing satisfactory service for various tasks.",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    name: "Helena Parker ",
    rating: 5,
    task: 20,
    startDate: "2005.07.20",
    price: 10,
    views: 41,
    bio: " Committed to providing satisfactory service for various tasks.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Azer Tasker",
    rating: 1,
    task: 1,
    startDate: "2024.01.02",
    price: 15,
    views: 4,
    bio: " Committed to providing satisfactory service for various tasks.",
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    name: "Ayshan Hasanova",
    rating: 0,
    task: 0,
    startDate: "2024.07.20",
    price: 20,
    views: 84,
    bio: " Committed to providing satisfactory service for various tasks.",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Lale Huseynova",
    rating: 5,
    task: 30,
    startDate: "2020.07.20",
    price: 70,
    views: 24,
    bio: "Highly experienced in event management and coordination..",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

// async function getElements(){
//   let portraits= await fetch('https://randomuser.me/api/portraits')
//   .then (res=>res.json())
//   console.log(portraits)
// }
// getElements();
const portraitsContainer = document.querySelector(".cards")
for (let i = 0; i < portraits.length; i++) {
  let portrait = document.createElement("div")
  portrait.className = "portrait"
  portrait.innerHTML = `
 <div class="col-lg-4">
      <div id="cards">
       <div class="card">
                        <div class="top-content">
                            <div class="name">
                                <img src="${portraits[i].image}" alt="Card image">
                                <h3>${portraits[i].name}</h3> <span></span>
                            </div>

                            <div class="star">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <h4>${portraits[i].rating}</h4>
                                <p>${portraits[i].views}</p>
                            </div>
                        </div>
                        <div class="middle-content">
                            <div class="tasks">
                                <img src="/image/Verified.svg" alt="">
                                <p class="pros"> ${portraits[i].task} Tasks </p>
                            </div>
                            <div class="pro">
                                <img src="/image/Hashtag.svg" alt="">
                                <p class="pros">${portraits[i].startDate}</p>
                            </div>
                            <div class="heart">
                                 <img src="/image/Heart.svg" alt="">
                                 <p>New Pro</p>
                            </div>
                        </div><br><br>
                        <div class="span">
                            <span>${portraits[i].bio}</span>
                        </div><br><br>


                        <div class="bottom-content">
                            <span>view profile</span>
                            <h6>${portraits[i].price}$</h6>
                            <button>
                                <p>Book Now</p>
                            </button>
                        </div>
                    </div>
                    </div>
                    </div>
 `
  portraitsContainer.appendChild(portrait)
}

let boxes = document.querySelectorAll("input[type=checkbox]");
let filterableCards = document.querySelectorAll(".card");
let filterList = document.querySelector(".middle-content p")


boxes.forEach(b => b.addEventListener("change", tick));
function tick(e) {
  let state = e.target.checked;
  boxes.forEach(b => b.checked = false);
  e.target.checked = state;
}



let filterPortraits = (e) => {
  let filteredPortraits = [];
  for (let i = 0; i < portraits.length; i++) {
    if (portraits[i].startDate > "2023.08.19") {
      filteredPortraits = [...filteredPortraits, portraits[i]];

      document.querySelector(".filters .active").classList.remove("active");
      e.target.classList.add("active")
      if (card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "pros") {
        return card.classList.replace("hide", "show");
      }
      card.classList.add("hide");
    }
  }
}
boxes.forEach(input => input.addEventListener("click", filterPortraits));






















// function SendRequest() {
//   fetch("https://randomuser.me/api/?portraits=100")
//     .then(response => response.json())
//     .then(data => {
//       //console.log(data.portraits)
//       let item = '';

//       data.forEach(portrait => {
//         const { image, name, surname, bio } = portrait;
//         let description = portrait.description
//         let text = description.length > 100 ? description.slice(0, 100) + "..." : description
//         item += `
//        <div class="col-lg-4">
//       <div id="cards">
//        <div class="card">
//                         <div class="top-content">
//                             <div class="name">
//                                 <img src="${portrait.image}" alt="Card image">
//                                 <h3>${portrait.name}</h3> <span>${user.surname}</span>
//                             </div>

//                             <div class="star">
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <i class="fa-solid fa-star"></i>
//                                 <h4>4.5</h4>
//                                 <p>(24)</p>
//                             </div>
//                         </div>
//                         <div class="middle-content">
//                             <div class="tasks">
//                                 <img src="/image/Verified.svg" alt="">
//                                 <p>987 Tasks </p>
//                             </div>
//                             <div class="pro">
//                                 <img src="/image/Hashtag.svg" alt="">
//                                 <p>Top Pro</p>
//                             </div>
//                             <div class="heart">
//                                  <img src="/image/Heart.svg" alt="">
//                                  <p>New Pro</p>
//                             </div>
//                         </div><br><br>
//                         <div class="span">
//                             <span>${portrait.bio}</span>
//                         </div><br><br>


//                         <div class="bottom-content">
//                             <span>view profile</span>
//                             <h6>$35</h6>
//                             <button>
//                                 <p>Book Now</p>
//                             </button>
//                         </div>
//                     </div>
//                     </div>
//                     </div>
//       `
//       });
//       document.getElementById('list').innerHTML = item
//     })
//     .catch(error => console.log(error));

// }


// function myFunction() {
//     var x = document.getElementById("navbar");
//     if (x.className === "orders") {
//       x.className += " responsive";
//     } else {
//       x.className = "orders";
//     }
//   }
//   function hover() {
//     var x = document.getElementById("content");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
//   let acc = document.getElementsByClassName("top");
// let i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     let content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });

