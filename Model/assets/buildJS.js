var acc1 = document.getElementsByClassName("firstaccordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc1[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active_accordion");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "table") {
      panel.style.display = "none";
    }
    else {
      panel.style.display = "table";
    }
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    }
    else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
