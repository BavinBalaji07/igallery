

var pics = [
    {
        image: "madara.jpg",
        title: "Madara Uchiha",
        info: "Ghost of the Uchihas"
    },
    {
        image: "obito.jpeg",
        title: "Obito Uchiha",
        info: "Phantom of the Leaf Village"
    },
    {
        image: "itachi uchiha.jpeg",
        title: "Itachi Uchiha",
        info: "The Uchiha Slayer."
    },
    {
        image: "sas.jpeg",
        title: "Sasuke Uchiha",
        info: "The last of the Uchihas."
    },
    {
      image: "minatooo.jpeg",
        title: "Minato Namikaze",
        info: "The Yellow Flash of Leaf"
    }
];

var i = 0; 

var photo     = document.getElementById("photo");
var titleText = document.getElementById("title-text");
var infoText  = document.getElementById("info-text");
var countText = document.getElementById("count-text");

function show() {
    photo.src           = pics[i].image;
    titleText.innerHTML = pics[i].title;
    infoText.innerHTML  = pics[i].info;
    countText.innerHTML = (i + 1) + " / " + pics.length;
}
function next() {
    i++;
    if (i >= pics.length) {
        i = 0;
    }
    show();
}
function prev() {
    i--;
    if (i < 0) {
        i = pics.length - 1;
    }
    show();
}
show();