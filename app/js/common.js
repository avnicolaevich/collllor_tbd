$(document).ready(function(){
    $(":checkbox").labelauty();

    $("#first").click(function(){
        $("#capabilities").css("display", "block");
    });

    $("#second").click(function(){
        $("#contact").css("display", "block");
    });

    $("#third").click(function(){
        $("#password").css("display", "block");
    });

    $("#fourth").click(function(){
        $("#payment").css("display", "block");
    });

    $("#fifth").click(function(){
        $("#verify").css("display", "block");
    });
    // $('.header__sign').on('click', function (e) {
    //     e.preventDefault();
    //     $(this).parent().addClass('active');
    //     $(this).parent().siblings().removeClass('active');
    //     target = $(this).attr('href');
    //     $('.header__content > div').not(target).hide();
    //     $(target).fadeIn(600);
    // });

    $('#selectState').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });
    $('#attributes').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });
    $('#category').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });

    $('#check').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });

    $('#selectStatePayment').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });

    $('#verifyState').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });

    $('#originTerm').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });
    
    // $('.header__link').click(function() {
    //     var checkElement = $(this).next();
    //     checkElement.stop().animate({'height':'toggle'}, 0.1, 'linear');
    //     if((checkElement.is('form')) && (checkElement.is(':visible'))) {
    //         return false;
    //     } else if ((checkElement.is('form')) && (checkElement.is(':hidden'))) {
    //         return true;
    //     }
    // });

    // $(document).click( function(event){
    //     if( $(event.target).closest("form").length )
    //         return;
    //     $(".registration").fadeOut("0.1");
    //     event.stopPropagation();
    // });
});


