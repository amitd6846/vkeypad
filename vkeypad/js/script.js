$('.ir_slick_wrpr').slick({
    infinite: false,

    centerMode: false,
    autoplay: false,
    responsive: [{
        breakpoint: 480,
        settings: {
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
        }
    }]
});
var code;

function showKeys() {
    $('#keypad').addClass('show_keypad');
    $('.ir_slick_wrpr').addClass('hide_slick');
}

function addCode(key) {
    var code = document.forms[0].code;
    if (code.value.length < 10) {
        code.value = code.value + key;

    }
    if (code.value.length == 10) {
        setTimeout(function() {
            $('.vKeypad_btn').prop('disabled', false);
            $('#keypad').removeClass('show_keypad');
            $('.ir_slick_wrpr').removeClass('hide_slick');
            $('#keypad').addClass('dail_p');
        }, 100);

    }
    if (code.value.length < 1) {

    }
}

function removeTextTag() {
    var strng = document.getElementById("custom_keypad").value;
    document.getElementById("custom_keypad").value = strng.substring(0, strng.length - 1)
}

function emptyCode() {
    document.forms[0].code.value = "";
}
$(document).mouseup(function(e) {
    var container = $(".vKeypad_wrpr");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('#keypad').removeClass('show_keypad');
        $('.ir_slick_wrpr').removeClass('hide_slick');
    }
});