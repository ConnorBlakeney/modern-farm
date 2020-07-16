import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

/* planArray will be an array. 
will need to use nested loops to iterate over every plant.
can use if/else if statements or a switch */

export const plantSeeds = (planArray) => {
  for (const fieldObj of planArray) {
    for (const plantObj of fieldObj) {
      switch (plantObj) {
        case "Asparagus":
          addPlant(createAsparagus())
        case "Corn":
          addPlant(createCorn())
        case "Potato":
          addPlant(createPotato())
        case "Soybean":
          addPlant(createSoybean())
        case "Sunflower":
          addPlant(createSunflower())
        case "Wheat":
          addPlant(createWheat())
      }
    }
  }
}
