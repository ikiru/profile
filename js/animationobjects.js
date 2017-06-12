$(document).ready(function() {

// ----------------------- space -----------------------------------------------

    animateDiv();

  });

  function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

  }

  function animateDiv() {
    var newq = makeNewPosition();
    $('.ufo').animate({top: newq[0],left: newq[1]}, function() {
      animateDiv();
    });




    // ----------------------- sky -------------------------------------------------


    $(".cloud1").animate({left: '1000px'}, 100000, 'linear');
    $(".cloud2").animate({left: '1000px'}, 115000, 'linear');

    $(".balloon").animate({left: '1000px'}, 70000, 'swing');






    // ----------------------- Land ------------------------------------------------



    // ----------------------- Sea -------------------------------------------------



    // ----------------------- Deep Sea --------------------------------------------
}
