// Navbar
function openNav() {
  var x = document.getElementById("myLinks");
  var hamburger = document.getElementById("hamburger");
  var intoSign = document.getElementById("into-sign");
  if (x.style.display === "block") {
    x.style.display = "none";
    hamburger.style.display = "block";
    intoSign.style.display = "none";
  } else {
    x.style.display = "block";
    intoSign.style.display = "block"
    hamburger.style.display = "none";
  }
}

// Smooth Scrolling
$('#nav-bar a, #footer .footer-links a, .box a, #showcase a, #signup a, #popular-post a, #creator a, #product a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});