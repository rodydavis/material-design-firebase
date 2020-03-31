class AppHeader extends HTMLElement {
    constructor() {
        super();
        this._title = "";
    }

    static get observedAttributes() {
        return [
            "title",
            "centerTitle",
            "leadingIcon",
        ];
    }

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
        var html = [];
        const centerTitle = this.getAttribute('centerTitle') != null;
        const leadingIcon = this.getAttribute('leadingIcon');
        html.push(`<mwc-top-app-bar ${centerTitle ? 'centerTitle' : ''}>`);
        if (leadingIcon != null) {
            html.push(`<mwc-icon-button icon="${leadingIcon}" slot="navigationIcon"></mwc-icon-button>`);
        }
        if (this.title != null) {
            html.push(`<div slot="title">${this.title}</div>`);
        }
        html.push(`
            <mwc-icon-button
            id="login-button"
            icon="person"
            slot="actionItems"
          ></mwc-icon-button>
          `);
        html.push(`
        <div><!-- content --></div>
        </mwc-top-app-bar>
        `);
        this.innerHTML = html.join("");
    }
}

window.customElements.define('app-header', AppHeader);