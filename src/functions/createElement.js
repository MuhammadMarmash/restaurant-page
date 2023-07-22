const createElement = function ({
    type = "div",
    classes = 0,
    id = 0,
    src = 0,
    alt = 0,
    textContent = 0,
    href = 0,
    father = 0,
    title = 0,
    style = 0,
} = {}) {
    const element = document.createElement(type);
    if (classes !== 0) for (let i in classes) element.classList.add(classes[i]);
    if (id !== 0) element.id = id;
    if (src !== 0) element.src = src;
    if (alt !== 0) element.alt = alt;
    if (textContent !== 0) element.textContent = textContent;
    if (href !== 0) element.href = href;
    if (father !== 0) father.appendChild(element);
    if (title !== 0) element.title = title;
    if (style !== 0) element.style = style;

    return element;
};

export default createElement;
