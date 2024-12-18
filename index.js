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

const arrIcon = ["fa-house", "fa-user", "fa-plus", "fa-cogs", "fa-phone"];
const menu = document.querySelector(".menu");

arrIcon.map((item, index) => {
  let addClassAdd = "";
  if (item === "fa-plus") {
    addClassAdd = "add";
  }

  return (menu.innerHTML += `
     <div class="menu-item ${addClassAdd}">
      <a href="#" class="${index == 0 ? "active" : ""}" >
        <i class="fa-solid ${item} "></i>
      </a>
    </div>
  `);
});

const menuItems = document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelectorAll(".menu-item a")
      .forEach((el) => el.classList.remove("active"));
    item.querySelector(".menu-item a").classList.add("active");
  });
});
