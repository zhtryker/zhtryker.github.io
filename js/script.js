var counter = 0;

$(document).on("click", ".click_me", function() {
    counter = counter + 1;
    if (counter == 3){
        alert('Told you I was useless!');
        $('.click_me').popover('toggle');
    }
    if (counter == 5){
        alert('Stop clicking. Nothing will happen!');
    }
    if (counter == 8){
        alert('You are wasting your time bud!');
        counter = 0;
    }
});