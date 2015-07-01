$(document).ready(function () {

      $('.list').sortable();
    //Remove all list items//
    $('.clear').click(function () {
        $('.list-item').fadeOut();
    });

    //remove single item
    $('.list').on('click', '.remove', function () {
        $(this).closest('.list-item').fadeOut();
    });

    //check off item
    $('.list').on('click', '.box', function () {

        $(this).closest('.list-item').addClass('checked', 'fade');
        var checked = $('<i class="fa fa-check-square-o">');
        var spanCheck = $('<span class="box-checked">');



        $(this).find('.fa').remove();


        $(this).append(spanCheck,checked);


    });


    //uncheck item
    $('.list').on('click','.box-checked', function () {

        $(this).closest('.list-item').removeClass('checked', 'fade');
        var unChecked = $('<i class="fa fa-square-o" id="boxUnchecked">');
        var spanCheck = $('<span class="box-checked">');
        $(this).find('.fa').remove();
        $(this).append(unChecked);
    });





    //Add new item to list(button)
    $('.submit').click(function () {
        var newItem = $('#item').val();
        if (newItem != '') {
            $('#list-display .list').append('<li class="list-item"><span class="box"><i class="fa fa-square-o" id="boxEmpty"></i></span>' + newItem + '<span class="remove"><i class="fa fa-times-circle"></i></span></li>');
        }
        $('#item').val('');
        $('.counter').text('40');
    });

    //Add new item to list(enter key)
    $(document).keydown(function (e) {
        var newItem = $('#item').val();
        if (e.which === 13 && newItem != '') {
            var newItem = $('#item').val();
            $('#list-display .list').append('<li class="list-item"><span class="box"><i class="fa fa-square-o" id="boxEmpty"></i></span>' + newItem + '<span class="remove"><i class="fa fa-times-circle"></i></span></li>');
            $('#item').val('');
        }
    });

//check character length
    $('#item').keyup(function(){
        var itemLength = $(this).val().length;
        var charactersLeft = 40 - itemLength;
        $('.counter').text(charactersLeft);
        if(charactersLeft < 0) {
            $('.submit').prop('disabled', 'disabled')
            $('.counter').text('Exceeded character limit!');
        }

    });


});
