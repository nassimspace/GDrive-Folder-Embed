'use strict';
class GDriveFolderEmbed extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const folder = `${this.getAttribute("folderID")}`;
    const show = `${this.getAttribute("render")}`;
    const url =
      "https://drive.google.com/embeddedfolderview?id=" + folder + "#" + show;
    this.shadowRoot.innerHTML = `<style>        
    iframe {
width: 100vw;
max-width: 100%;
height: 100vh;
position: block;
left: 0;
padding-top: 0;
bottom: 0;
right: 0;
z-index: 9999;
border: none;
    }</style>
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
const frozenGDFE = deepFreeze(GDriveFolderEmbed);
customElements.define("gdf-embed", frozenGDFE);
