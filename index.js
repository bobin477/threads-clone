const profileIcon = document.getElementById("profile-icon");
const popupMenu = document.getElementById("popup-menu");

function openPopupmenu(e) {
  popupMenu.style.display =
    popupMenu.style.display === "block" ? "none" : "block";
  console.log(popupMenu.style.display);
}

function handleClickOut(e) {
  if (!profileIcon.contains(e.target)) {
    popupMenu.style.display = "none";
  }
}

document.addEventListener("click", handleClickOut);

function handleOnclickActive(el) {
  document
    .querySelectorAll(".menu-item a")
    .forEach((el) => el.classList.remove("active"));
  el.querySelector(".menu-item a").classList.add("active");
}

function renderAppbarMenu() {
  const arrIcon = ["fa-house", "fa-user", "fa-plus", "fa-cogs", "fa-phone"];
  const menu = document.getElementById("menu");

  arrIcon.map((item, index) => {
    let addClassAdd = "";
    if (item === "fa-plus") {
      addClassAdd = "add";
    }

    return (menu.innerHTML += `
       <div class="menu-item ${addClassAdd}" onclick="handleOnclickActive(this)">
        <a href="#" class="${index == 0 ? "active" : ""}" >
          <i class="fa-solid ${item} "></i>
        </a>
      </div>
    `);
  });
}

renderAppbarMenu();
