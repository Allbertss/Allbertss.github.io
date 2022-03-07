// smooth scroll
$("header ul a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ 
        scrollTop: $(href).offset().top - 125 }, 1000);
    }
);

// progress-bar
$(window).scroll(function(){
    var scroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (scroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
});

// home gallery
let galleryIndex = 1;
showImage(galleryIndex);

function changeIndex(value) {
    showImage(galleryIndex += value);
}

function showImage(value) {
    let gallery = $('.gallery');

    if (value > gallery.length)
        galleryIndex = 1;

    if (value < 1)
        galleryIndex = gallery.length;

    for (let i = 0; i < gallery.length; i++)
        gallery[i].style.display = 'none';

    gallery[galleryIndex - 1].style.display = 'block';
}

// modal
// let modal;;
// let button = $('button');

// function onLoad() {
//     modal = document.getElementsByClassName('lang-modal')[0]

//     modal.style.display = 'block';
// }

// button.onclick = function() {
//     modal.style.display = 'none';
// }
