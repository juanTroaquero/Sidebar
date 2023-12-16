const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      ModeSwtich = body.querySelector(".toggle-switch"),
      modeTex = body.querySelector(".mode-text")


toggle.addEventListener("click", ()=> {
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", ()=> {
    sidebar.classList.remove("close");
});

ModeSwtich.addEventListener("click", ()=> {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeTex.innerText = "Light Mode"
    }else {
        modeTex.innerText = "Dark Mode"
    }
});

