import { renderLines } from "./ui/lines.js";
import {
  runChat,
  titleAni,
  aboutAni,
  puzzleAni,
  contactAni
} from "./ui/scrollAnimation.js";

renderLines(".ver-wrap");
renderLines(".hor-wrap");
runChat();
window.addEventListener("load", () => {
  titleAni();
  aboutAni();
  puzzleAni();
  contactAni();
});
// puzzleAni();
