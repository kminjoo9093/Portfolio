import { renderLines } from "./ui/lines.js";
import { runChat } from "./ui/scrollAnimation.js";

window.addEventListener('load', ()=>{
  renderLines('.ver-wrap');
  renderLines('.hor-wrap');
  runChat();
})