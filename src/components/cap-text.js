const template = document.createElement('template')
const styles = new CSSStyleSheet()

styles.replaceSync(`
	:host {
		display: block;
		font-family: var(--cap-text-font-family, var(--cap-font-family, var(--cap-font-family-sans)));
		font-feature-settings: var(
			--cap-text-font-feature-settings,
			var(--cap-font-feature-settings, var(--cap-font-feature-settings-sans))
		);
		font-optical-sizing: auto;
		font-size: var(--cap-text-font-size, var(--cap-font-size-0));
		font-style: var(--cap-text-font-style, normal);
		font-weight: var(--cap-text-font-weight, 400);
		letter-spacing: calc(
			(
					(
							12px *
								var(
									--cap-text-letter-spacing-factor,
									var(--cap-letter-spacing-factor, var(--cap-letter-spacing-factor-sans))
								)
						) - 1em
				) * 0.03
		);
		line-height: var(--cap-text-line-height, var(--cap-line-height-0));
		padding-bottom: 1px;
		padding-top: 1px;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		-webkit-text-size-adjust: none;
	}

	:host([family="sans"]) {
		--cap-text-font-family: var(--cap-font-family-sans);
		--cap-text-font-feature-settings: var(--cap-font-feature-settings-sans);
		--cap-text-letter-spacing-factor: var(--cap-letter-spacing-factor-sans);
	}

	:host([family="serif"]) {
		--cap-text-font-family: var(--cap-font-family-serif);
		--cap-text-font-feature-settings: var(--cap-font-feature-settings-serif);
		--cap-text-letter-spacing-factor: var(--cap-letter-spacing-factor-serif);
	}

	:host([family="mono"]) {
		--cap-text-font-family: var(--cap-font-family-mono);
		--cap-text-font-feature-settings: var(--cap-font-feature-settings-mono);
		--cap-text-letter-spacing-factor: var(--cap-letter-spacing-factor-mono);
	}

	:host([level="-2"]) {
		--cap-text-font-size: var(--cap-font-size-minus-2);
		--cap-text-line-height: var(--cap-line-height-minus-2);
	}

	:host([level="-1"]) {
		--cap-text-font-size: var(--cap-font-size-minus-1);
		--cap-text-line-height: var(--cap-line-height-minus-1);
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

	:host([level="+3"]) {
		--cap-text-font-size: var(--cap-font-size-plus-3);
		--cap-text-line-height: var(--cap-line-height-plus-3);
	}

	:host([level="+4"]) {
		--cap-text-font-size: var(--cap-font-size-plus-4);
		--cap-text-line-height: var(--cap-line-height-plus-4);
	}

	:host([level="+5"]) {
		--cap-text-font-size: var(--cap-font-size-plus-5);
		--cap-text-line-height: var(--cap-line-height-plus-5);
	}

	:host([level="+6"]) {
		--cap-text-font-size: var(--cap-font-size-plus-6);
		--cap-text-line-height: var(--cap-line-height-plus-6);
	}

	:host([level="+7"]) {
		--cap-text-font-size: var(--cap-font-size-plus-7);
		--cap-text-line-height: var(--cap-line-height-plus-7);
	}

	:host([level="+8"]) {
		--cap-text-font-size: var(--cap-font-size-plus-8);
		--cap-text-line-height: var(--cap-line-height-plus-8);
	}

	:host([level="+9"]) {
		--cap-text-font-size: var(--cap-font-size-plus-9);
		--cap-text-line-height: var(--cap-line-height-plus-9);
	}

	:host([level="+10"]) {
		--cap-text-font-size: var(--cap-font-size-plus-10);
		--cap-text-line-height: var(--cap-line-height-plus-10);
	}

	:host([level="+11"]) {
		--cap-text-font-size: var(--cap-font-size-plus-11);
		--cap-text-line-height: var(--cap-line-height-plus-11);
	}

	:host([level="+12"]) {
		--cap-text-font-size: var(--cap-font-size-plus-12);
		--cap-text-line-height: var(--cap-line-height-plus-12);
	}

	:host::before,
	:host::after {
		content: "";
		display: block;
		height: 0;
	}

	:host::before {
		margin-top: var(--cap-leading-trim);
	}

	:host::after {
		margin-bottom: var(--cap-leading-trim);
	}

	:host([content-before]) .inner::before {
		content: attr(data-before);
	}

	:host([content-after]) .inner::after {
		content: attr(data-after);
	}

	:host([ellipsis]) {
		--cap-text-content-overflow: hidden;
		--cap-text-content-text-overflow: ellipsis;
		--cap-text-content-white-space: nowrap;
		--cap-text-content-width: 100%;
		--cap-text-content-min-width: 0;
	}

	:host([no-wrap]) {
		--cap-text-content-white-space: nowrap;
		--cap-text-content-width: 100%;
		--cap-text-content-min-width: 0;
	}

	:host([italic]) {
		--cap-text-font-style: italic;
	}

	:host([has-leading]),
	:host([has-trailing]) {
		--cap-text-inner-grid-template-rows: 1lh 1fr;
		--cap-text-content-grid-row: span 2;
	}

	:host([has-leading]) {
		--cap-text-inner-grid-template-columns: auto 1fr;
	}

	:host([has-trailing]) {
		--cap-text-inner-grid-template-columns: 1fr auto;
	}

	:host([has-leading][has-trailing]) {
		--cap-text-inner-grid-template-columns: auto 1fr auto;
	}

	.inner {
		display: grid;
		grid-template-rows: var(--cap-text-inner-grid-template-rows, auto);
		grid-template-columns: var(--cap-text-inner-grid-template-columns, auto);
		column-gap: var(--cap-text-inner-column-gap, 0px);
		align-items: var(--cap-text-inner-align-items, center);
	}

	.content {
		display: block;
		text-overflow: var(--cap-text-content-text-overflow, clip);
		white-space: var(--cap-text-content-white-space, normal);
		width: var(--cap-text-content-width, auto);
		min-width: var(--cap-text-content-min-width, auto);
		overflow: var(--cap-text-content-overflow, visible);
		grid-row: var(--cap-text-content-grid-row, auto);
	}

	::slotted(a) {
		color: var(--cap-text-anchor-color, currentColor);
		text-decoration-line: var(--cap-text-anchor-text-decoration-line, underline);
		text-decoration-color: var(--cap-text-anchor-text-decoration-color, currentColor);
		text-decoration-style: var(--cap-text-anchor-text-decoration-style, solid);
		text-decoration-thickness: var(--cap-text-anchor-text-decoration-thickness, auto);
		text-underline-offset: var(--cap-text-anchor-text-underline-offset, auto);
	}

	@media (hover: hover) {
		::slotted(a:hover) {
			--cap-text-anchor-color: var(--cap-text-anchor-color-hover, currentColor);
			--cap-text-anchor-text-decoration-line: var(--cap-text-anchor-text-decoration-line-hover, underline);
			--cap-text-anchor-text-decoration-color: var(--cap-text-anchor-text-decoration-color-hover, currentColor);
			--cap-text-anchor-text-decoration-style: var(--cap-text-anchor-text-decoration-style-hover, solid);
			--cap-text-anchor-text-decoration-thickness: var(--cap-text-anchor-text-decoration-thickness-hover, auto);
			--cap-text-anchor-text-underline-offset: var(--cap-text-anchor-text-underline-offset-hover, auto);
		}
	}

	::slotted(strong) {
		font-weight: var(--cap-text-strong-font-weight, 700);
		color: var(--cap-text-strong-color, inherit);
	}`)

template.innerHTML = `
	<div class="inner">
		<slot name="leading"></slot>
		<div class="content"><slot>Text</slot></div>
		<slot name="trailing"></slot>
	</div>`

class CapText extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' }).adoptedStyleSheets.push(styles)
	}

	connectedCallback() {
		this.shadowRoot.appendChild(template.content.cloneNode(true))

		const inner = this.shadowRoot.querySelector('.inner')

		if (this.hasAttribute('content-before')) {
			inner.setAttribute('data-before', this.getAttribute('content-before'))
		}

		if (this.hasAttribute('content-after')) {
			inner.setAttribute('data-after', this.getAttribute('content-after'))
		}
	}
}

customElements.define('cap-text', CapText)
