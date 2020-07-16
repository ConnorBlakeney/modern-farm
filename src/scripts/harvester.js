export const harvestPlants = (plantsArray) => {
  let seedArray = []
  for (const plantObj of plantsArray) {
    if (plantObj.type === "Corn") {
      const outputHalf = plantObj.output / 2
      for (let i = 0; i < outputHalf; i++) {
        seedArray.push(plantObj)
      }
    } else {
      for (let j = 0; j < plantObj.output; j++) {
        seedArray.push(plantObj)
      }
    }
  }

  return seedArray
}
