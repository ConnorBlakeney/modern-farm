export const Catalog = (harvestedArray) => {
  const contentElement = document.querySelector(".container")

  for (const harvestedObj of harvestedArray) {
    contentElement.innerHTML += `
        <section class="plant">${harvestedObj.type}</section>
        `
  }
}
