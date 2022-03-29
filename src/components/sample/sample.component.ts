import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sample-component')
export class SampleComponent extends LitElement {
  static styles = css`
    :host {
      color: blue;
    }
  `;

  @property()
  public name = 'World';

  override render() {
    return html`<p>Hello ${this.name}!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sample-component': SampleComponent;
  }
}
