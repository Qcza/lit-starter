import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './components/sample/sample.component';

@customElement('root-component')
export class RootComponent extends LitElement {
  render() {
    return html`<sample-component></sample-component>`;
  }
}
