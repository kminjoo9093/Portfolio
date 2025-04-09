export const renderLines = (lineDirection) => {
  const lineWrap = document.querySelector(lineDirection);
  if (!lineWrap) return;
  const lines = lineWrap.querySelectorAll(".line");
  const lineArr = [...lines];

  let delayTime = 0.1;
  while (lineArr.length) {
    let selectedLine = lineArr.splice(
      Math.floor(Math.random() * lineArr.length),
      1
    )[0]; //반환값을 배열로 안받기 위해 [0]
    selectedLine.style.animationDelay = `${delayTime}s`;
    delayTime += 0.1;
  }
};