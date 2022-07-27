var num_slides = 2

var curr = 0;

var slides = $(".portfolio-flex");


// helper to change slides via arrow
function changeSlide(slides, curr, next, changed = -1) {
    slides.eq(curr).addClass("hidden");
    if (changed == -1) {
        changed = next ? (curr + (num_slides + 1)) % num_slides : (curr + (num_slides - 1)) % num_slides;
    }
    slides.eq(changed).removeClass("hidden");
    console.log("changed slides!");
    return changed;
}


// continuously listens for a click
$(".portfolio-arrow").bind("click", function() {
    // figures out which arrow has been clicked
    switch ($(this).attr('id')) {
        case "next":
            curr = changeSlide(slides, curr, true);

            console.log("clicked next!");
        break;
        case "prev":
            curr = changeSlide(slides, curr, false);
            console.log("clicked prev!");
        break;
    }
});