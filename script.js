const body = document.querySelector("body");
const bears = document.querySelectorAll(".bear");
const title = document.querySelector(".title");
const footer = document.querySelector("footer");
const mark = document.querySelector("mark");
const colors = ['dimgray', 'silver', 'whitesmoke', 'slategray', 'midnightblue', 'mediumblue', 'dodgerblue', 'deepskyblue', 'powderblue', 'lavender', 'mediumaquamarine', 'lightseagreen', 'seagreen', 'olive', 'forestgreen', 'limegreen', 'springgreen', 'lime', 'honeydew', 'lightyellow', 'bisque', 'khaki', 'yellow', 'orange', 'tan', 'peru', 'sienna', 'chocolate', 'coral', 'lightsalmon', 'salmon', 'tomato', 'red', 'firebrick', 'maroon', 'rosybrown', 'pink', 'hotpink', 'deeppink', 'orchid', 'slateblue', 'purple', 'plum'];

body.addEventListener("click", function () {
    for (let i = 0; i < bears.length; i++) {
        const coloridx = Math.floor(Math.random() * colors.length);
        bears[i].style.color = colors[coloridx];
    }
    title.style.color = bears[1].style.color;
    footer.style.color = bears[1].style.color;
    mark.style.backgroundColor = bears[1].style.color;
});
