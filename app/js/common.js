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

    $(".chosen-select").chosen({width: "100%"});

    $('#selectState').scombobox({
        filterDelay: 300,
        highlight: true,
        filterIgnoreCase: true,
        fillOnTab: true,
        showDropDown: true,
        placeholder: ' '
    });

    // $('#attributes').scombobox({
    //     filterDelay: 300,
    //     highlight: true,
    //     filterIgnoreCase: true,
    //     fillOnTab: true,
    //     showDropDown: true,
    //     fullMatch: true,
    //     placeholder: ''
    // });

    // $('#category').scombobox({
    //     filterDelay: 300,
    //     highlight: true,
    //     filterIgnoreCase: true,
    //     fillOnTab: true,
    //     showDropDown: true,
    //     placeholder: ' '
    // });

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

});


