// Copy link to page to the user's clipboard
function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => userFeedback()).catch(err => {
        console.error("Unable to copy link: ", err);
        alert("An error occured while trying to copy the link. Please copy it manually.");
    })
}

// Display feedback to the user indicating that the copy was successful
function userFeedback() {
    var icon = document.getElementById("copy-link-icon");
    icon.setAttribute("class", "bi bi-check2");
    setTimeout(() => {
        icon.setAttribute("class", "bi bi-link-45deg");
    }, 2000)
}