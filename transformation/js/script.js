$(document).ready(function() {
    $("img").hover(function(){
        $(this).attr("src","https://static.wikia.nocookie.net/marvelmovies/images/7/7a/2009996-spiderman3poster.jpg/revision/latest/scale-to-width-down/250?cb=20120625154252");
        $("h2").text("AHHHHHHH!!! WHAT HAPPENED TO SPIDERMAN?!??!");
        $("h1").text("WHAT????");
    },
    function() {
        $(this).attr("src", "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/230057_Spider-Man3_2007_1400x2100_US_1.jpg?itok=axS0bxW1");
        $("h2").text("Phew");
        $("h1").text("Oh there he is");
    });
    $("button").click(function(){
        $("img").attr("src","https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg");
        $("h2").text("This is an image of Spiderman");
        $("h1").text("Hello");
    })
});