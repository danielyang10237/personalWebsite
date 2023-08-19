import { createComments } from "../commonSetUp.js";
import switchToOcean from "./switchToOcean.js";

export default class oceanPage {
  constructor() {
    switchToOcean();
    createComments();
  }
}

