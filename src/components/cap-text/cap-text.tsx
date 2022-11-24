import { Component, Prop, Host, h } from '@stencil/core'
import { CapTextLevel, CapTextWeight, CapTextFamily, CapTextLeading } from './../../types'

@Component({
	tag: 'cap-text',
	styleUrl: 'cap-text.scss',
	shadow: true,
})
export class CapText {
	/**
	 * Description...
	 */
	@Prop() level: CapTextLevel = '0'

	/**
	 * Description...
	 */
	@Prop() weight: CapTextWeight = 'soft'

	/**
	 * Description...
	 */
	@Prop() family: CapTextFamily = 'sans'

	/**
	 * Description...
	 */
	@Prop() contentBefore: string

	/**
	 * Description...
	 */
	@Prop() contentAfter: string

	/**
	 * Description...
	 */
	@Prop() ellipsis: boolean = false

	/**
	 * Description...
	 */
	@Prop() italic: boolean = false

	/**
	 * Description...
	 */
	@Prop() leading: CapTextLeading = 'compact'

	render() {
		const hostClass = [
			`level:${this.level}`,
			`weight:${this.weight}`,
			`family:${this.family}`,
			`leading:${this.leading}`,
			this.ellipsis ? 'ellipsis' : '',
			this.italic ? 'italic' : '',
			this.contentBefore ? 'has:content-before' : '',
			this.contentAfter ? 'has:content-after' : '',
		]

		const contentAttributes = {
			'data-before': this.contentBefore,
			'data-after': this.contentAfter,
		}

		return (
			<Host class={hostClass.join(' ')}>
				<span id="content" {...contentAttributes}>
					<slot />
				</span>
			</Host>
		)
	}
}
