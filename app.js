$(document).ready(function(){
    let timesClicked = 0;
    $('#generate').on('click', function(){
        timesClicked++;
        $('#elements').append(
            `<div>
                <p>${timesClicked}</p>
                <button id="swap">Swap Color</button>
                <button id="delete">Delete</button>
            </div>`);
    });
    $(document).on('click', '#swap', function(){
        $(this).parent().toggleClass('yellow');
    });
    $(document).on('click', '#delete', function(){
        $(this).parent().remove();
    });
});