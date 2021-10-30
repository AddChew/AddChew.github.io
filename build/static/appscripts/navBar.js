// Function to extract the basename of a url path
let get_basename = path => {
    const index = path.lastIndexOf("/") + 1
    return path.substring(index)
}

// Function to set active tab
let set_active_tab = () => {
    const url = get_basename(window.location.pathname)
    const navItem = document.querySelector(`li a[href="${url}"]`)
    navItem.classList.add("active")
}

// Function to toggle display of navbar
let toggle_navbar = () => {
    const navbar = document.querySelector(".nav-bar")
    navbar.classList.toggle("nav-bar-active")
}

// Set the corresponding navigation tab to be active based on basename
document.addEventListener("DOMContentLoaded", () => {
    const navbutton = document.querySelector(".nav-bar-button")
    navbutton.addEventListener("click", toggle_navbar)
    set_active_tab()
})