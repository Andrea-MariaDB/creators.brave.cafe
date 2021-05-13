var urlArray = [
    "https://brave.cafe/",
    "https://pbanks.net/",
    "https://www.guilhermepantoja.com/",
    "https://carolpelu.com/",
    "https://recipeasly.org/",
    "https://ashkankamyab.com/",
    "https://cubecube.org/",
    "https://twitter.com/andrei_pestee",
    "https://3dprintguides.com/",
    "https://limbo.center/"
];

function randomUrl() {
    var randomNumber = Math.floor(Math.random() * urlArray.length);
    var newUrl = urlArray[randomNumber];
    window.location.href = newUrl;
}
