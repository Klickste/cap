import { Component, h, Host, Prop } from '@stencil/core'
import { CapFamily, CapLeading, CapWeight } from './../../types'
import { CapRichTextLevel } from './types'

@Component({
	tag: 'cap-rich-text',
	styleUrl: 'cap-rich-text.scss',
})
export class CapRichText {
	@Prop({ reflect: true }) headingFamily: CapFamily = 'sans'
	@Prop({ reflect: true }) bodyFamily: CapFamily = 'serif'
	@Prop({ reflect: true }) headingWeight: CapWeight = 'heavy'
	@Prop({ reflect: true }) bodyWeight: CapWeight = 'soft'
	@Prop({ reflect: true }) italic: boolean = false
	@Prop({ reflect: true }) leading: CapLeading = 'open'
	@Prop({ reflect: true }) level: CapRichTextLevel = '0'

	render() {
		return (
			<Host>
				<slot />
			</Host>
		)
	}
}
