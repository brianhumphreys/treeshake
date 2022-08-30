import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('voith-detailed-card') 
export class DetailedCard extends LitElement{

    static get styles() {
        return css`
            #detailed-card {
                box-shadow: 0 2px 8px rgb(0, 0, 0, 0.1);
                padding: 2em;
                border-radius: 10px;
            }
            :host-context(body.dark) #card {
                box-shadow: 0 2px 8px rgb(255, 255, 255, 0.5);
            }
        `;
    }
   
    render() {
        console.log('Render DetailedCard')
        return html`
            <div id="detailed-card">
                <slot></slot>
            </div>
        `;
    }
}