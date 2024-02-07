const template = document.createElement('template')

template.innerHTML = `
	<style>
		:host {
			--cap-text-leading-trim: calc(((1lh + 2px) - ((var(--cap-text-cap-height) / var(--cap-text-upm)) * 1em)) / -2);

			display: block;
			background: rgb(0 0 0 / 5%);
			font-family: var(--cap-text-font-family);
			font-size: var(--cap-text-font-size);
			line-height: var(--cap-text-line-height);
		}

		:host([family="sans"]) {
			--cap-text-font-family: var(--cap-font-family-sans);
			--cap-text-cap-height: var(--cap-font-cap-height-sans);
			--cap-text-upm: var(--cap-font-upm-sans);
		}

		:host([family="serif"]) {
			--cap-text-font-family: var(--cap-font-family-serif);
			--cap-text-cap-height: var(--cap-font-cap-height-serif);
			--cap-text-upm: var(--cap-font-upm-serif);
		}

		:host([family="mono"]) {
			--cap-text-font-family: var(--cap-font-family-mono);
			--cap-text-cap-height: var(--cap-font-cap-height-mono);
			--cap-text-upm: var(--cap-font-upm-mono);
		}

		:host([level="0"]) {
			--cap-text-font-size: var(--cap-font-size-0);
			--cap-text-line-height: var(--cap-line-height-0);
		}

		:host([level="+1"]) {
			--cap-text-font-size: var(--cap-font-size-plus-1);
			--cap-text-line-height: var(--cap-line-height-plus-1);
		}

		:host([level="+2"]) {
			--cap-text-font-size: var(--cap-font-size-plus-2);
			--cap-text-line-height: var(--cap-line-height-plus-2);
		}

		.inner {
			padding: 1px 0;
		}

		.inner::before,
		.inner::after {
			content: '';
			display: block;
			margin-top: var(--cap-text-inner-pseudo-margin-top, 0);
			margin-bottom: var(--cap-text-inner-pseudo-margin-bottom, 0);
		}

		.inner::before {
			--cap-text-inner-pseudo-margin-top: var(--cap-text-leading-trim);
		}

		.inner::after {
			--cap-text-inner-pseudo-margin-bottom: var(--cap-text-leading-trim);
		}
	</style>
	<div class="inner">
		<slot>Text</slot>
	</div>
	`

class CapText extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
	}

	static get observedAttributes() {
		return ['family', 'level']
	}

	connectedCallback() {
		if (!this.hasAttribute('family')) {
			this.setAttribute('family', 'sans')
		}

		this.shadowRoot.appendChild(template.content.cloneNode(true))
	}
}

customElements.define('cap-text', CapText)
