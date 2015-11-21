$('document').ready(function () {

    $('.readmore').click(function (e) {
        e.preventDefault();
        $('.readmore').addClass('hide').removeClass('show');
        $('#show-this-on-click').slideDown('slow');
        $('#show-this-on-click').next('.hide').slideDown('slow').removeClass('hide');
        $('#show-this-on-click').focus();

    });
    $('.readless').click(function (e) {
        e.preventDefault();
        $('#show-this-on-click').slideUp('slow');
        $('#show-this-on-click').prev('.hide').addClass('show').removeClass('hide');
        $('.readless').addClass('hide').removeClass('show').slideUp('slow');
        $('#show-this-on-click').focus();

    });
    $('.learnmore').click(function (e) {
        e.preventDefault();
        $('.learnmore').addClass('hide').removeClass('show');
        $('#learnmoretext').slideDown('slow');
        $('#learnmoretext').focus();
    });
    $('.hamburger').click(function()
    {
        
        $('nav').slideToggle(function()
        {
        $('nav li').css('display','block');
        $('nav').css('float','right');
    })
        
    })
});


