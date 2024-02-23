const template = document.createElement('template')
const styles = new CSSStyleSheet()

styles.replaceSync(`
	:host {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: var(--cap-rich-text-row-gap, 0px);
		font-family: var(--cap-rich-text-font-family, var(--cap-font-family, var(--cap-font-family-sans)));
		font-feature-settings: var(
			--cap-rich-text-font-feature-settings,
			var(--cap-font-feature-settings, var(--cap-font-feature-settings-sans))
		);
		font-optical-sizing: auto;
		letter-spacing: calc(
			(
					(
							12px *
								var(
									--cap-rich-text-letter-spacing-factor,
									var(--cap-letter-spacing-factor, var(--cap-letter-spacing-factor-sans))
								)
						) - 1em
				) * 0.03
		);
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		-webkit-text-size-adjust: none;
	}

	:host([family="sans"]) {
		--cap-rich-text-font-family: var(--cap-font-family-sans);
		--cap-rich-text-font-feature-settings: var(--cap-font-feature-settings-sans);
		--cap-rich-text-letter-spacing-factor: var(--cap-letter-spacing-factor-sans);
	}

	:host([family="serif"]) {
		--cap-rich-text-font-family: var(--cap-font-family-serif);
		--cap-rich-text-font-feature-settings: var(--cap-font-feature-settings-serif);
		--cap-rich-text-letter-spacing-factor: var(--cap-letter-spacing-factor-serif);
	}

	:host([family="mono"]) {
		--cap-rich-text-font-family: var(--cap-font-family-mono);
		--cap-rich-text-font-feature-settings: var(--cap-font-feature-settings-mono);
		--cap-rich-text-letter-spacing-factor: var(--cap-letter-spacing-factor-mono);
	}

	:host([italic]) {
		--cap-rich-text-font-style: italic;
	}

	::slotted(*) {
		margin: 0;
		padding-bottom: 1px;
		padding-top: 1px;
	}

	::slotted(*)::before,
	::slotted(*)::after {
		content: "";
		display: block;
		height: 0;
	}

	::slotted(*)::before {
		margin-top: var(--cap-leading-trim);
	}

	::slotted(*)::after  {
		margin-bottom: var(--cap-leading-trim);
	}

	::slotted(h1),
	::slotted(h2),
	::slotted(h3),
	::slotted(h4),
	::slotted(h5),
	::slotted(h6) {
		font-weight: var(--cap-rich-text-heading-font-weight, 700);
	}

	::slotted(h1){
		font-size: var(--cap-font-size-plus-6);
		line-height: var(--cap-line-height-plus-6);
	}

	::slotted(h2){
		font-size: var(--cap-font-size-plus-5);
		line-height: var(--cap-line-height-plus-5);
	}

	::slotted(h3){
		font-size: var(--cap-font-size-plus-4);
		line-height: var(--cap-line-height-plus-4);
	}

	::slotted(h4){
		font-size: var(--cap-font-size-plus-3);
		line-height: var(--cap-line-height-plus-3);
	}

	::slotted(h5){
		font-size: var(--cap-font-size-plus-2);
		line-height: var(--cap-line-height-plus-2);
	}

	::slotted(h6){
		font-size: var(--cap-font-size-plus-1);
		line-height: var(--cap-line-height-plus-1);
	}

	::slotted(p),
	::slotted(ul),
	::slotted(ol) {
		font-size: var(--cap-font-size-0);
		line-height: var(--cap-line-height-0);
		font-weight: var(--cap-rich-text-body-font-weight, 400);
	}

	::slotted(small) {
		font-size: var(--cap-font-size-minus-1);
		line-height: var(--cap-line-height-minus-1);
		font-weight: var(--cap-rich-text-small-font-weight, 400);
	}

	`)

template.innerHTML = `
	<slot>Rich Text</slot>`

class CapRichText extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' }).adoptedStyleSheets.push(styles)
	}

	connectedCallback() {
		this.shadowRoot.appendChild(template.content.cloneNode(true))
	}
}

customElements.define('cap-rich-text', CapRichText)
