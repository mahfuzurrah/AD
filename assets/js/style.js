function toggle() {
    var content = document.getElementById("navbarNav");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}










document.getElementById("toggleButton").addEventListener("click", function () {
    var content = document.querySelector(".text__content");
    content.classList.toggle("showLess");

    var buttonText = this.innerHTML === "Read More" ? "Read Less" : "Read More";
    this.innerHTML = buttonText;
});

document.getElementById("toggleButton2").addEventListener("click", function () {
    var content = document.querySelector(".text__content2");
    content.classList.toggle("showLess");

    var buttonText = this.innerHTML === "Read More" ? "Read Less" : "Read More";
    this.innerHTML = buttonText;
});


// Upload Image

function upload(){
    var imgcanvas = document.getElementById("canv1");
    var fileinput = document.getElementById("finput");
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
  }


