$(document).ready(function(){
    
    $(":checkbox").labelauty();

    $(".capabilities__heading").click(function(){
        $(".capabilities__form").css("display", "block");
    });

    $(".contact__heading").click(function(){
        $(".contact__form").css("display", "block");
    });

    $(".password__heading").click(function(){
        $(".password__form").css("display", "block");
    });

    $(".payment__heading").click(function(){
        $(".payment__form").css("display", "block");
    });

    $(".verify__heading").click(function(){
        $(".verify__form").css("display", "block");
    });

    $("#category").multiselect({
        header: true,
        width: 466,
        maxWidth: 466,
        noneSelectedText: "Category"
    });

    $("#attributes").multiselect({
        header: true,
        width: 466,
        maxWidth: 466,
        noneSelectedText: "Attributes"
    });

    $(".chosen-select").chosen({width: "100%"});


    $('#selectState').scombobox({
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

    // $('.capabilities__heading').click(function() {
    //     var checkElement = $(this).next();
    //     checkElement.stop().animate({'height':'toggle'}, 0.1, 'linear');
    //     if((checkElement.is('#capabilities')) && (checkElement.is(':visible'))) {
    //         return false;
    //     } else if ((checkElement.is('#capabilities')) && (checkElement.is(':hidden'))) {
    //         return true;
    //     }
    // });



});


