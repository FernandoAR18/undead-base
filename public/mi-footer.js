customElements.define("mi-footer", class extends HTMLElement {
  connectedCallback() {
    this.innerText = "Fernando Giovani Aldana Ramos IC-51M";
  }
}, { extends: "footer" });