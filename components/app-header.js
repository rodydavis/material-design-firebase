class AppHeader extends HTMLElement {
    constructor() {
        super();
        this._title = ""
    }

    static get observedAttributes() { return ["title", "centerTitle"]; }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name == 'title') this._title = newValue;
        this._updateRendering();
    }
    connectedCallback() {
        this._updateRendering();
    }

    get title() {
        return this._title;
    }
    set title(v) {
        this.setAttribute("title", v);
    }

    _updateRendering() {
        const centerTitle = this.getAttribute("centerTitle") != null;
        this.innerHTML = `
        <mwc-top-app-bar ${centerTitle ? 'centerTitle' : ''}>
        <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
        <div slot="title">${this.title}</div>
        <mwc-icon-button
          id="login-button"
          icon="person"
          slot="actionItems"
        ></mwc-icon-button>
        <div><!-- content --></div>
      </mwc-top-app-bar>
      `;
    }
}

window.customElements.define('app-header', AppHeader);