const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			display: block;
		}
	</style>
	<slot>Text</slot>`

class CapText extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
	}

	async connectedCallback() {
		this.shadowRoot.appendChild(template.content.cloneNode(true))
	}
}

customElements.define('cap-text', CapText)
