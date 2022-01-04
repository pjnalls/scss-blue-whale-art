const createDiv = (className) => {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  return div;
};

const main = () => {
  const root = document.getElementById("root"),
    canvas = createDiv("canvas"),
    body = createDiv("body"),
    sideFin = createDiv("side-fin"),
    mouth = createDiv("mouth"),
    cheek = createDiv("cheek"),
    eye = createDiv("eye"),
    tail = createDiv("tail"),
    top = createDiv("top");

  body.appendChild(sideFin);
  body.appendChild(mouth);
  body.appendChild(cheek);
  body.appendChild(eye);
  body.appendChild(tail);
  body.appendChild(top);

  canvas.appendChild(body);

  root.appendChild(canvas);
};

main();
