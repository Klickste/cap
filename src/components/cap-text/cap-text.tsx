import { Component, Prop, Host, h } from '@stencil/core'
import { CapTextLevel, CapTextWeight } from './../../types'

@Component({
	tag: 'cap-text',
	styleUrl: 'cap-text.css',
	shadow: true,
})
export class CapText {
	/**
	 * { item_description }
	 */
	@Prop() level: CapTextLevel = '0'

	/**
	 * { item_description }
	 */
	@Prop() weight: CapTextWeight = 'soft'

	/**
	 * { item_description }
	 */
	@Prop() contentBefore: string

	/**
	 * { item_description }
	 */
	@Prop() contentAfter: string

	render() {
		return (
			<Host class={`${this.level} ${this.weight}`}>
				<span id="content" data-before={this.contentBefore} data-after={this.contentAfter}>
					<slot />
				</span>
			</Host>
		)
	}
}
