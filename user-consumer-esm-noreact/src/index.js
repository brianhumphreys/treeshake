import { css, html, LitElement } from 'lit';
import {Card} from 'web-components-test';
// import { customElement } from 'lit/decorators';

// @customElement('voith-card')
class App extends LitElement {
    static get styles() {
        return css`
            #app {
                background-color: green;
                padding: 2em;
            }
        `;
    }

    render() {
        console.log('Render App');
        console.log(Card);
        return html`
            <div id="app">
                <voith-card>card</voith-card>
            </div>
        `;
    }
}
App = customElements.define('test-app', App);
export default {App};