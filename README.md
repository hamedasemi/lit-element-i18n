# LitElement Internationalisation
LitElement Internationalisation

## Install
```sh
npm install --save lit-element-i18n
```

## Resources  
/assets/locales/en/app.json
```json
{ "hi": "Hi" }
```
/assets/locales/sv/app.json
```json
{ "hi": "Hej" }
```

## Usage
```js
import { LitElement, html } from 'lit-element'
import { i18nMixin, translate } from 'lit-element-i18n'

class DemoElement extends i18nMixin(LitElement) {

    constructor(){
        super();
        this.languageResources = '/assets/locales/{{lng}}/{{ns}}.json'
    }

    render() {
        return html`
            <h1>${translate('app:hi')}</h1>
            
            <select @change='${this.changeLanguages}'>
                <option value='en'>EN</option>
                <option value='sv'>SV</option>
            </select>
        `
    }

    changeLanguages(event) {
        this.changeLanguage(event.target.value)
    }
}

customElements.define('demo-element', DemoElement)
``` 