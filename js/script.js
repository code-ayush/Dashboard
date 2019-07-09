function hideunhide() {
  var x = document.getElementById("menu");
  var y = document.getElementById("content");
  if (x.style.display === "none") {
    x.style.display = "block";

    y.style.paddingLeft = "230";
  } else {
    x.style.display = "none";
    y.style.paddingLeft = "0";
  }
}
