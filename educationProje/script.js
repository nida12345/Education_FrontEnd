$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        //burada nav-toggle sınıfı ile değiştirdik
        $('.navbar').toggleClass('nav-toggle');
    });

    //login butonuna basınca giriş sayfası gelsin
    $('#login').click(function(){

        $('.login-form').addClass('popup');
    });

    //form da çarpıya basınca kapatsın
    $('.login-form .fa-times').click(function(){

        $('.login-form').removeClass('popup');
    });

    $(window).on('load scroll' , function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        $('.login-form').removeClass('popup');

        //sectionlar arasında gezinirken active olan section id sine göre active classınjı vermek
        $('section').each(function(){
            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
        
    });
});