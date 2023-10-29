import { Component, Host, Prop, State, Watch, Element, h } from '@stencil/core'

@Component({
	tag: 'cap-media-query',
	styleUrl: 'cap-media-query.scss',
	shadow: true,
})
export class CapMediaQuery {
	@Element() element!: HTMLCapMediaQueryElement
	@Prop() condition!: string
	@Prop() property!: string
	@Prop() value?: string
	@State() matchMediaQuery: boolean

	private valueInitial: string | boolean
	private mediaQuery = (condition: string): MediaQueryList => window.matchMedia(condition)
	private children: NodeListOf<HTMLCapTextElement | HTMLCapRichTextElement>

	@Watch('matchMediaQuery')
	watchMatchMediaQuery() {
		Array.from(this.children).map((child: HTMLCapTextElement | HTMLCapRichTextElement) => {
			if (child[this.property] !== undefined) {
				if (typeof child[this.property] === 'string' && this.value && typeof this.valueInitial === 'string') {
					child.setAttribute(this.property, this.matchMediaQuery ? this.value : this.valueInitial)
				} else if (typeof child[this.property] === 'boolean') {
					if (this.matchMediaQuery) {
						if (this.valueInitial === true) {
							child.removeAttribute(this.property)
						} else {
							child.setAttribute(this.property, '')
						}
					} else {
						if (this.valueInitial === true) {
							child.setAttribute(this.property, '')
						} else {
							child.removeAttribute(this.property)
						}
					}
				}
			}
		})
	}

	componentWillLoad() {
		this.children = this.element.querySelectorAll('cap-text, cap-rich-text')
		this.valueInitial = this.children[0][this.property]

		const mediaQuery = this.mediaQuery(this.condition)

		mediaQuery.addEventListener('change', (event: MediaQueryListEvent) => {
			this.matchMediaQuery = event.matches
		})

		this.matchMediaQuery = mediaQuery.matches
	}

	render() {
		return (
			<Host>
				<slot></slot>
			</Host>
		)
	}
}
