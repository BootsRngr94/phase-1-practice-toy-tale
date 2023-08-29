fetch('http://localhost:3000/toys')
  .then((response => response.json()))
  .then((data) => renderData(data))

  function renderData(toyArray){
    const toyDiv = document.querySelector('#toy-collection');
      toyArray.forEach((toy) => {

        let toyName = document.createElement('h2')
        let toyImg = document.createElement('img')
        let toyLikes = document.createElement('p')
        let toyButton = document.createElement('button')
        let div = document.createElement('div')
        div.className = "card"

        toyName.textContent = toy.name
        toyImg.src = toy.image
        toyImg.className = "toy-avatar"
        toyLikes.textContent = toy.likes
        toyButton.textContent = "Cool!"
        toyButton.className = "like-btn"
        
        toyButton.addEventListener("click", () => {
          toyLikes.textContent = parseInt(toyLikes.textContent) + 1
        });

        toyDiv.append(div)
        div.append(toyName, toyImg, toyLikes, toyButton)
        

      });
  }


let addToy = false;

const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
addBtn.addEventListener("click", () => {
// hide & seek with the form
addToy = !addToy;
  if (addToy) {
    toyFormContainer.style.display = "block";
  } else {
    toyFormContainer.style.display = "none";
  }
});
  

const form = document.querySelector('form')
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const newToy = {
    name : e.target.name.value,
    image : e.target.image.value,
    likes : 0
  }
  renderData([newToy])
});
