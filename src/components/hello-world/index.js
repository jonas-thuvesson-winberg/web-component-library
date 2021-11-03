import helloWorldTemplate from "./index.html";

class HelloWorldComponent extends HTMLElement {
  #shadowRoot;
  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: "closed" });
    const templateRoot = document.createElement("template");
    templateRoot.setAttribute("class", "hello-world-template-wrapper");
    templateRoot.innerHTML = helloWorldTemplate;
    this.#shadowRoot.appendChild(templateRoot.content.cloneNode(true));
  }
}

customElements.define("hello-world", HelloWorldComponent);
