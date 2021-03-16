var counter = 0;

$(document).on("click", ".click_me", function() {
    counter = counter + 1;
    if (counter == 3){
        //alert('Told you I was useless!');
        $('.click_me').attr('data-bs-content','Told you I was useless!');
        $('.click_me').popover('toggle');
    }
    
    if (counter == 7){
        //alert('Stop clicking. Nothing will happen!');
        $('.click_me').attr('data-bs-content','Stop clicking. Nothing will happen!');
    }
    if (counter == 12){
        //alert('You are wasting your time bud!');
        $('.click_me').attr('data-bs-content','You are wasting your time bud!');
        $('.click_me').popover('hide');
        counter = 0;
    }
});