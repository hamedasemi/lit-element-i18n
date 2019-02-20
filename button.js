import { LitElement, html } from 'lit-element'
import { i18nMixin, translate } from './lit-element-i18n'

export class AppButton extends i18nMixin(LitElement) {
    render() {
        return html`
            ${translate('app:button', {who: 'this'})}
        `
    }
}

customElements.define('app-button', AppButton)