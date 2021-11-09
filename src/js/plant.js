import * as State from "./state.js";
// const feed = changeState("fert")(1);
export const blueFood = State.changeState("fert")(5);

// const hydrate = changeState("water")(1);

export const growLight = State.changeState("light")(5);
export const superWater = State.changeState("water")(5);