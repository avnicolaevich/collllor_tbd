$(document).ready(function () {

	$(":checkbox").labelauty();

	$(".capabilities__heading").click(function () {
		$(".capabilities__form").toggle('slow');
	});

	$(".contact__heading").click(function () {
		$(".contact__form").toggle('slow');
	});

	$(".password__heading").click(function () {
		$(".password__form").toggle('slow');
	});

	$(".payment__heading").click(function () {
		$(".payment__form").toggle('slow');
	});

	$(".verify__heading").click(function () {
		$(".verify__form").toggle('slow');
	});

	var categoryMultiSelect = $("#category");
	categoryMultiSelect.multiselect({
		header: true,
		width: 466,
		maxWidth: 466,
		noneSelectedText: "Category",
		showCheckAll: false,
		showUncheckAll: false,
		closeIcon: 'ui-multiselect-icon-closethick'
	});

	changeOptGroup()

	customCheckbox('multiselect_category');
	categoryMultiSelect.bind("multiselectoptgrouptoggle", function (event, ui) {
        /* event: the original event object, most likely "click"
         ui.inputs: an array of the checkboxes (DOM elements) inside the optgroup
         ui.label: the text of the optgroup
         ui.checked: whether or not the checkboxes were checked or unchecked in the toggle (boolean) */
         customCheckboxOptGroup(ui);
     });

	var attributesMultiSelect = $("#attributes");
	attributesMultiSelect.multiselect({
		header: true,
		noneSelectedText: "Attributes"
	});

	customCheckbox('multiselect_attributes');
	attributesMultiSelect.bind("multiselectcheckall", function (event, ui) {
		customCheckboxCheckAll('multiselect_attributes', true);
	});
	attributesMultiSelect.bind("multiselectuncheckall", function (event, ui) {
		customCheckboxCheckAll('multiselect_attributes', false);
	});


	$(".chosen-select").chosen({
		width: "100%",
		disable_search_threshold: 10
	});

	$('#selectState').scombobox({
		filterDelay: 300,
		highlight: true,
		filterIgnoreCase: true,
		fillOnTab: true,
		showDropDown: true,
		placeholder: ' '
	});

	$('#company').scombobox({
		filterDelay: 300,
		highlight: true,
		filterIgnoreCase: true,
		fillOnTab: true,
		showDropDown: true,
		placeholder: ' '
	});

	$('#individual').scombobox({
		filterDelay: 300,
		highlight: true,
		filterIgnoreCase: true,
		fillOnTab: true,
		showDropDown: true,
		placeholder: ' '
	});

	$('#self').scombobox({
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

	// $('#Pal').scombobox({
	// 	filterDelay: 300,
	// 	highlight: true,
	// 	filterIgnoreCase: true,
	// 	fillOnTab: true,
	// 	showDropDown: true,
	// 	placeholder: ' '
	// });

	// $('#Bank').scombobox({
	// 	filterDelay: 300,
	// 	highlight: true,
	// 	filterIgnoreCase: true,
	// 	fillOnTab: true,
	// 	showDropDown: true,
	// 	placeholder: ' '
	// });

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

	var selectPayment = $('select[name="payment"]')
	selectPayment.change(function () {
		// selectPayment.change() 
			/* Act on the event */

			var el = $(this).val();
			console.log(el)
			if (el == 'Chek') {
				$('#paymentpaychek').css('display', 'block');
				$('#paymentpaypal').css('display', 'none');
				$('#paymentbank').css('display', 'none');
				$('#paymentindividual').css('display', 'none');
				$('#paymentcompany').css('display', 'none')
			}
			if (el == 'PayPal') {
				$('#paymentpaychek').css('display', 'none');
				$('#paymentpaypal').css('display', 'block');
				$('#paymentbank').css('display', 'none');
				$('#paymentindividual').css('display', 'none');
				$('#paymentcompany').css('display', 'none')
			}
			if (el == 'BankAccount') {
				$('#paymentpaychek').css('display', 'none');
				$('#paymentpaypal').css('display', 'none');
				$('#paymentbank').css('display', 'block');
				$('#paymentcompany').css('display', 'block');
				$('#paymentindividual').css('display', 'none')
			}
	});

	$('select[name="company"]').change(function () {

		var el = $(this).val();
		if (el == 'Company') {
			$('#paymentpaychek').css('display', 'none');
			$('#paymentpaypal').css('display', 'none');
			$('#paymentbank').css('display', 'block');
			$('#paymentcompany').css('display', 'block');
			$('#paymentindividual').css('display', 'none')
		}
		else {
			$('#paymentpaychek').css('display', 'none');
			$('#paymentpaypal').css('display', 'none');
			$('#paymentbank').css('display', 'block');
			$('#paymentcompany').css('display', 'none');
			$('#paymentindividual').css('display', 'block')
		}
	});

	$(function () {
		$("#datepicker").datepicker();
	});
	$(function () {
		$("#monthpicker").datepicker();
	});
	$(function () {
		$("#yearpicker").datepicker();
	});

});

/* Customize jQuery UI MultiSelect Widget ---start--- */
function customCheckbox(checkboxName) {
	var checkBox = $('input[name="' + checkboxName + '"]');
	$(checkBox).each(function () {
		$(this).wrap("<span class='custom-checkbox'></span>");
		if ($(this).is(':checked')) {
			$(this).parent().addClass("custom-checkbox--selected");
			$(this).parent().parent().addClass("custom-checkbox--active");
		}
	});
	$(checkBox).click(function () {
		$(this).parent().toggleClass("custom-checkbox--selected");
		$(this).parent().parent().toggleClass("custom-checkbox--active");
	});
}

function customCheckboxOptGroup(ui) {
	var i;
	for (i = 0; i < ui.inputs.length; i++) {
		var checkBox = $(ui.inputs[i]);
		if (ui.checked != false) {
			checkBox.parent().addClass("custom-checkbox--selected");
			checkBox.parent().parent().addClass("custom-checkbox--active");
		} else {
			checkBox.parent().removeClass("custom-checkbox--selected");
			checkBox.parent().parent().removeClass("custom-checkbox--active");
		}
	}
}

function customCheckboxCheckAll(checkboxName, add) {
	var checkBoxes = $('input[name="' + checkboxName + '"]');
	var i;

	for (i = 0; i < checkBoxes.length; i++) {
		var checkBox = $(checkBoxes[i]);
		if (add){
			checkBox.parent().addClass("custom-checkbox--selected");
			checkBox.parent().parent().addClass("custom-checkbox--active");
		} else {
			checkBox.parent().removeClass("custom-checkbox--selected");
			checkBox.parent().parent().removeClass("custom-checkbox--active");
		}
	}
}

function changeOptGroup() {
	var multiselect = $(".ui-multiselect-optgroup");
	for (i = 0; i < multiselect.length; i++) { 
		var optGroup = $(multiselect[i]);
		optGroup.children('a').after('<span class="multiselect__span">(click to check all)</span>')
	}
}

/* Customize jQuery UI MultiSelect Widget ---end--- */