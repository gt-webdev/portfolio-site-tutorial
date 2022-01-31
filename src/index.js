/**
 * Scrolls the browser window to the element with the given
 * id attribute, setting its relative location to be on top.
 * @param {MouseEvent} event The event triggered by a click 
 */
function scrollToElement(event) {
    // Find and remove the last "active" nav element, if exists
    let lastActive = getLastActive();
    if (lastActive) {
        lastActive.classList.remove('active');
    }

    event.target.classList.add('active');
    let id = event.target.getAttribute('data-target')
    let el = document.getElementById(id);
    let top = el.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
}

function getLastActive() {
    return document.querySelector('.active');
}