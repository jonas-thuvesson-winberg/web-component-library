import helloWorldTemplate from "./index.html";

class HelloWorldComponent2 extends HTMLElement {
  #shadowRoot;
  #name;
  constructor() {
    super();
    this.#shadowRoot = this.attachShadow({ mode: "closed" });
    const templateRoot = document.createElement("template");
    templateRoot.setAttribute("class", "hello-world-template-wrapper");
    templateRoot.innerHTML = helloWorldTemplate;
    this.#shadowRoot.appendChild(templateRoot.content.cloneNode(true));

    this.#name = this.#shadowRoot.querySelector("span");
  }

  connectedCallback() {
    if (!this.hasAttribute("name")) {
      this.#name = "World 2";
    }
  }

  static get observedAttributes() {
    return ["name"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "name":
        this.setName(newValue);
        console.log(`Name changed from ${oldValue} to ${newValue}`);
        break;
    }
  }

  setName(name) {
    this.#name.innerHTML = name;
  }
}

customElements.define("hello-world-2", HelloWorldComponent2);
