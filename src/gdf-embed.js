'use strict';
class GDriveFolderEmbed extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() { return ["folderID", "render"]; } // You could remove / use this line and extend the component with "attributeChangedCallback"
  async connectedCallback() {
    const folder = `${this.getAttribute("folderID")}`;
    const show = `${this.getAttribute("render")}`;
    const url =
      "https://drive.google.com/embeddedfolderview?id=" + folder + "#" + show;
    this.shadowRoot.innerHTML = `<style>        
    iframe {
width: 100vw;
height: 100vh;
position: fixed;
left: 0;
top: 0;
bottom: 0;
right: 0;
z-index: 9999;
border: none;
    }</style><slot></slot> 
    <iframe src=${url} webkitallowfullscreen="" mozallowfullscreen="" sandbox="allow-forms allow-scripts allow-popups allow-same-origin allow-pointer-lock" allowfullscreen="" frameBorder="0" scrolling="auto" loading="eager" seamless></iframe>`;
  }
}
// optional
const deepFreeze = obj => {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object') deepFreeze(obj[prop]);
  });
  return Object.freeze(obj);
};
const frozenComponent = deepFreeze(GDriveFolderEmbed);
customElements.define("gdf-embed", frozenComponent);
