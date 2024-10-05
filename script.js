// Show contact number
document.getElementById("showNumber").addEventListener("click", function() {
  var number = document.getElementById("contactNumber");
  if (number.classList.contains("hidden")) {
    number.classList.remove("hidden");
  } else {
    number.classList.add("hidden");
  }
});
