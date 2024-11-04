$(document).ready(function() {
    $("img").hover(function(){
        $(this).attr("src","images/evilspiderman.png");
        $("h2").text("AHHHHHHH!!! WHAT HAPPENED TO SPIDERMAN?!??!");
        $("h1").text("WHAT????");
    },
    function() {
        $(this).attr("src", "images/spidermanback.jpg");
        $("h2").text("Phew");
        $("h1").text("Oh there he is");
    });
    $("button").click(function(){
        $("img").attr("src","images/spidermanregular.jpg");
        $("h2").text("This is an image of Spiderman");
        $("h1").text("Hello");
    })
});