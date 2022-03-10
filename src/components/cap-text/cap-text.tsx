import { Component, Host, Prop, h } from '@stencil/core'
import { TextLevelTypes, TextWeightTypes, TextHeadingTypes } from './../../types'

@Component({
  tag: 'cap-text',
  styleUrl: 'cap-text.scss',
  shadow: true,
})
export class CapText {
  @Prop() content: string = 'Text'
  @Prop() ellipsis: boolean = false
  @Prop() heading: TextHeadingTypes
  @Prop() level: TextLevelTypes = '0'
  @Prop() noWrap: boolean = false
  @Prop() paragraph: boolean
  @Prop() textAfter: string
  @Prop() textBefore: string
  @Prop() weight: TextWeightTypes = 'soft'

  render() {
    const Tag = this.heading ? `h${this.heading.toString()}` : this.paragraph ? 'p' : 'span'
    const addons = {
      'data-text-before': this.textBefore,
      'data-text-after': this.textAfter,
    }
    const hostClass = [
      this.ellipsis && 'ellipsis',
      this.noWrap && 'no-wrap',
      this.level,
      this.weight,
    ]

    return (
      <Host class={hostClass.join(' ')}>
        <Tag class="content" {...addons}>
          {this.content}
        </Tag>
      </Host>
    )
  }
}
