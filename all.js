$(document).ready(function(){

    $('.btn-top').click(function (e) { 
        e.preventDefault();
        $( "html" ).animate({
            scrollTop: 0,
          }, 500 );
    });

    $('.userNum').click(function (e) { 
        e.preventDefault();

        var txt = $(this).text();
        var num = txt.substring(0 , txt.length -1);
        $('.userNumVar').text(num);

        if(num.length > 5){ num = txt.substring(1 , txt.length -1);}

        var price = parseInt(num) * 0.06;
        $('.simple-price').text(price);

        price = parseInt(num) * 0.16;
        $('.stadar-price').text(price);
    });

    $('.qa-list').click(function (e) { 
        e.preventDefault();
        $(this).find('p').slideToggle();
        $(this).find('a').toggleClass('blue');
        $(this).find('a').toggleClass('minus');

        $(this).siblings().find('a').removeClass('blue');
        $(this).siblings().find('a').removeClass('minus');
        $(this).siblings().find('p').slideUp();

    });

})