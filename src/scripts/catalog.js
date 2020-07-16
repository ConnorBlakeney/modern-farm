const Plant = (plant) => `<section class="plant">${plant.type}</section>`

export const Catalog = (plants) => {
  document.querySelectorAll(".container").innerHTML = plants.map(Plant).join("")
}
