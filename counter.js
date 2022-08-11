class MyCounter extends HTMLElemen {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  //lifecyle//
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadow.innerHTML = `
        <h1>Counter</h1>
        ${this.count}
        <button id='btn'>Increment</button>
        `;
  }
}

customElements.define("my-counter", MyCounter);
