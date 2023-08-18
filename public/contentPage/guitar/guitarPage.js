import { createComments } from "../commonSetUp.js";
import switchToGuitar from "./switchToGuitar.js";

export default class guitarPage {
  constructor() {
    switchToGuitar();
    createComments();
  }
}