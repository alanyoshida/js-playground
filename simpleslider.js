$(function() {
    var width = 620;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#contentcarousel');
    var $slideContainer = $('.ulcarousel', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    $('.ulcarousel li:first').before($('.ulcarousel li:last')); 

    function startSlider() {
        interval = setInterval(function() {
            //get the width of the items ( i like making the jquery part dynamic, so if you change the width in the css you won't have o change it here too ) '
            var item_width = $slides.outerWidth() + 10;
            
            //calculae the new left indent of the unordered list
            var left_indent = parseInt($slideContainer.css('left')) - item_width;
            
            //make the sliding effect using jquery's anumate function '
            $('.ulcarousel:not(:animated)').animate({'left' : left_indent},500,function(){    
                
                //get the first list item and put it after the last list item (that's how the infinite effects is made) '
                $('.ulcarousel li:last').after($('.ulcarousel li:first')); 
                
                //and get the left indent to the default -210px
                $('.ulcarousel').css({'left' : '-'+width+'px'});
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();
});