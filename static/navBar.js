// Function to extract the basename of a url path
let get_basename = path => {
    const index = path.lastIndexOf("/") + 1
    return path.substring(index)
}   

// Set the corresponding navigation tab to be active based on basename
document.addEventListener("DOMContentLoaded", () => {
    const url = get_basename(window.location.pathname)
    const navItem = document.querySelector(`a[href="${url}"]`)
    navItem.classList.add("active")
})