// smooth scroll
$("header ul a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ 
        scrollTop: $(href).offset().top - 100 }, 1000);
    }
);

// progress-bar
$(window).scroll(function(){
    var scroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (scroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
});

// home, cycle images
let imageIndex = 4;
window.onload = function() {
    setInterval(change, 3500);
    setInterval(changeAboutUs, 3500);
}

function change() {
    if (imageIndex == 0)
        imageIndex = 4;

    $('#home-image').attr('src', 'images/interior' + imageIndex + '.jpg');
    
    imageIndex--;
}

// about-us, cycle images
let imageIndex2 = 2;
function changeAboutUs() {
    if (imageIndex2 == 0)
        imageIndex2 = 2;

    $('#about-us-image').attr('src', 'images/interior-f' + imageIndex2 + '.jpg');
    
    imageIndex2--;
}
