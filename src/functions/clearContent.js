export default function clearContent() {
    const content = document.querySelector("#content");
    let child = content.lastElementChild;
    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }
}
