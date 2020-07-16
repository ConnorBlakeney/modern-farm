const growingPlants = []

export const addPlant = (seedObj) => {
  if (Array.isArray(seedObj)) {
    seedObj.forEach((seed) => growingPlants.push(seed))
  } else {
    growingPlants.push(seedObj)
  }
}

export const usePlants = () => growingPlants.slice()
