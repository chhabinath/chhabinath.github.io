let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Chhabinath's Portfolio";
})

window.addEventListener("focus", () =>{
    document.title = docTitle;
})