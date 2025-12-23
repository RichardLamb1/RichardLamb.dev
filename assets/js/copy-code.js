// Add a copy button to each code block
document.querySelectorAll('pre > code').forEach(el => {
    el.parentNode.className = 'position-relative';
    const anchor = document.createElement('a');
    anchor.onclick = () => copyCode(el);
    anchor.className = 'copy-code-btn';
    anchor.title = "Copy code";
    const icon = document.createElement('i');
    icon.className = 'bi bi-copy';
    el.parentNode.append(anchor);
    anchor.append(icon);
});

/**
 * Copies the code
 * 
 * @param {Element} el <code> element to copy the text out of
 */
function copyCode(el) {
    var text = el.innerText;
    // It always pisses me off when websites leave a return character at the end of code I'm copying.
    // Especially if I'm pasting it into a terminal.
    // So let's set a good example here and remove that whitespace at the end.
    navigator.clipboard.writeText(text.trimEnd()).then(() => copyCodeFeedback(el)).catch(err => {
        console.error("Unable to copy code: ", err);
        alert("An error occured while trying to copy the code. Please copy it manually.");
    })
}

/**
 * Display feedback to the user indicating that the copy was successful
 * 
 * @param {Element} el <code> element to copy the text out of
 */
function copyCodeFeedback(el) {
    var icon = el.parentElement.getElementsByTagName('a')[0].getElementsByTagName('i')[0];
    icon.setAttribute("class", "bi bi-check2");
    setTimeout(() => {
        icon.setAttribute("class", "bi bi-copy");
    }, 2000)
}