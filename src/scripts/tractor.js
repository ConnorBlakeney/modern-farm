import {
  Asparagus,
  Corn,
  Potato,
  Soybean,
  Sunflower,
  Wheat,
} from "./seeds/asparagus.js"
import { addPlant } from "./field.js"

/* planArray will be an array. 
will need to use nested loops to iterate over every plant.
can use if/else if statements or a switch */

export const plantSeeds = (planArray) => {
  planArray.forEach((row) => {
    row.forEach((plantType) => {
      switch (plantType) {
        case "Asparagus":
          addPlant(Asparagus)
          break
        case "Corn":
          addPlant(Corn)
          break
        case "Potato":
          addPlant(Potato)
          break
        case "Soybean":
          addPlant(Soybean)
          break
        case "Sunflower":
          addPlant(Sunflower)
          break
        case "Wheat":
          addPlant(Wheat)
          break
        default:
          break
      }
    })
  })
}
