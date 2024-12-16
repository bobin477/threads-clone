const profileIcon = document.getElementById("profile-icon");
const popupMenu = document.getElementById("popup-menu");

profileIcon.addEventListener("click", (e) => {
  popupMenu.style.display =
    popupMenu.style.display === "block" ? "none" : "block";
  console.log(popupMenu.style.display);
});

document.addEventListener("click", (e) => {
  console.log(profileIcon.contains(e.target));
  if (!profileIcon.contains(e.target)) {
    popupMenu.style.display = "none";
  }
});
