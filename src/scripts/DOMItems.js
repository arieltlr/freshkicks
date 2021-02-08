

export const DOMItems = () => {
    const testGreeting = {
        key1: "hola",
        key2: {
            key3: "buenos dias"
        }
    };
    const greeting = testGreeting?.key2?.key3 || testGreeting.key1;
    document.body.classList.add("center");
    const container = document.createElement("div");
    container.classList.add("container", "center");
    container.innerHTML = `<h1>${greeting} todos</h1>`;
    document.body.append(container);

}