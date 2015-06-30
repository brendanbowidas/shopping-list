$(document).ready(function() {
    //Remove all list items//
    $('.clear').click(function(){
              $('.list-item').fadeOut();
    });
        //remove single item
    $('.list').on('click', '.remove', function() {
        $(this).closest('.list-item').fadeOut();
    });

    $('.list').on('click', '.box', function() {
        $(this).closest('.list-item').toggleClass('checked');

             $(this).children(':first').removeClass();
             $(this).children(':first').attr('class', 'fa fa-check-square-o');







    });

    //Add new item to list
    $('.submit').click(function() {
        var newItem = $('#item').val();
        $('#list-display .list').append('<li class="list-item"><span class="box"><i class="fa fa-square-o" id="checkBox"></i></span>' + newItem + '<span class="remove"><i class="fa fa-times-circle"></i></span></li>');
        $('#item').val('');

    });


});

