var sideNavbar = document.getElementById("sidenavbar")
var sideNavbarIcon = document.getElementById("sidenavbaricon")
var menuclose = document.getElementById("close")
sideNavbarIcon.addEventListener("click", function () {
    sideNavbar.style.right = 0
})
menuclose.addEventListener("click", function () {
    sideNavbar.style.right = "-50%"
})