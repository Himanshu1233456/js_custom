$(window).scroll(function ()
{
    var distance = $(window).scrollTop();
    $('.sects').each(function (i)
    {
        if ($(this).position().top <= distance + 250)
        {           
            $('.navbar-nav a.active').removeClass('active');
            $('.navbar-nav a').eq(i).addClass('active');
        }
    });
}).scroll();