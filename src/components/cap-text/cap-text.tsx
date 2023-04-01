import { Component, h, Host, Prop } from '@stencil/core'
import { CapFamily, CapLeading, CapWeight } from './../../types'
import { CapTextLevel } from './types'

@Component({
	tag: 'cap-text',
	styleUrl: 'cap-text.scss',
	shadow: true,
})
export class CapText {
	@Prop({ reflect: true }) level: CapTextLevel = '0'
	@Prop({ reflect: true }) weight: CapWeight = 'soft'
	@Prop({ reflect: true }) family: CapFamily = 'sans'
	@Prop({ reflect: true }) contentBefore: string
	@Prop({ reflect: true }) contentAfter: string
	@Prop({ reflect: true }) ellipsis: boolean = false
	@Prop({ reflect: true }) noWrap: boolean = false
	@Prop({ reflect: true }) italic: boolean = false
	@Prop({ reflect: true }) leading: CapLeading = 'compact'

	render() {
		const contentAttributes = {
			'data-before': this.contentBefore,
			'data-after': this.contentAfter,
		}

		return (
			<Host>
				<span id="content" {...contentAttributes}>
					<slot />
				</span>
			</Host>
		)
	}
}
