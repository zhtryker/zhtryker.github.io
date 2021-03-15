var counter = 0;

$(document).on("click", ".click_me", function() {
    counter = counter + 1;
    if (counter == 3){
        alert('it works!');
        $('[data-toggle="popover"]').popover();
    }
    
});