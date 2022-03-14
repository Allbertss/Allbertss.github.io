// smooth scroll
$("nav a").on("click", function (e) {
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

// hover (touch) for mobile
document.addEventListener("touchstart", function() {}, true);