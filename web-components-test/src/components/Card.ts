import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('voith-card')
export class Card extends LitElement {
    static get styles() {
        return css`
            #card {
                box-shadow: 0 2px 8px rgb(0, 0, 0, 0.1);
                padding: 2em;
                border-radius: 2px;
                background-color: white;
            }
            :host-context(body.dark) #card {
                box-shadow: 0 2px 8px rgb(255, 255, 255, 0.5);
            }
        `;
    }

    render() {
        console.log('Render Card');
        return html`
            <div id="card">
                <slot></slot>
            </div>
        `;
    }
}