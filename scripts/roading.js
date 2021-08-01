const contents = document.querySelector(`.contents`);
var num = 12 //contents 안 파일갯수//
function imgRoad() {
    for(let i =1; i < num+1; i++) {
      const image = new Image();
      image.src = `contents/${i}.png`;
      image.classList.add(`contents`)
      contents.appendChild(image);
        console.log(i);
    }
}
imgRoad();
