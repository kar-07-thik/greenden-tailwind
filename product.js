var sideNavbar = document.getElementById("sidenavbar")
var sideNavbarIcon = document.getElementById("sidenavbaricon")
var menuclose = document.getElementById("close")
sideNavbarIcon.addEventListener("click", function () {
    sideNavbar.style.right = 0
})
menuclose.addEventListener("click", function () {
    sideNavbar.style.right = "-50%"
})
var search = document.getElementById("searchbar")
var container = document.getElementById("productcontainer")
var productList = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var entervalue = event.target.value.toUpperCase()
    for (count = 0; count<productList.length; count=count+1) {
        var productname = productList[count].querySelector("h1").textContent
        if (productname.toUpperCase().indexOf(entervalue) < 0) {
            productList[count].style.display ="none"
        }
        else{
            productList[count].style.display="block"
        }
    }

})