import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"

const yearlyPlan = createPlan()
console.log(yearlyPlan)
console.log(plantSeeds(yearlyPlan))
