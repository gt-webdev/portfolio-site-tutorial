/**
 * Scrolls the browser window to the element with the given
 * id attribute, setting its relative location to be on top.
 * @param {string} id 
 */
function scrollTo(id) {
    let el = document.getElementById(id);
    let top = el.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
}