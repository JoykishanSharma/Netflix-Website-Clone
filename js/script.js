var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.display === "block") {
            var current_rotation = 270;
            document.querySelector(".expand_icon").style.transform = 'rotate(' + current_rotation + 'deg)';
            content.style.display = "none";
        }
        else {
            var current_rotation = 135;
            document.querySelector(".expand_icon").style.transform = 'rotate(' + current_rotation + 'deg)';
            content.style.display = "block";
        }
    });
}