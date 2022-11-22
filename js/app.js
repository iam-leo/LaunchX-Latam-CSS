let acc = document.querySelectorAll(".accordion");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    let arrow = this.childNodes[3];

    if (panel.classList.contains('hidden')) {
      panel.classList.remove("hidden");
      panel.classList.add("block");
      arrow.classList.remove('rotate-90');
      arrow.classList.add('-rotate-90');
    } else {
        panel.classList.add("block");
        panel.classList.add("hidden");
        arrow.classList.remove('-rotate-90');
        arrow.classList.add('rotate-90');
    }
  });
}