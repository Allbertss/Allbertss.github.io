// smooth scroll
$("header ul a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ 
        scrollTop: $(href).offset().top - 50 }, 1000);
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
let imageIndex = 6;
window.onload = function() {
    setInterval(change, 3500);
}

function change() {
    if (imageIndex == 0)
        imageIndex = 6;

    $('#home-image').attr('src', 'images/interior' + imageIndex + '.jpg');
    
    imageIndex--;
}
