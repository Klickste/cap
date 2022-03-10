import { Component, Host, Prop, h } from '@stencil/core'
import { TextFamilyTypes, TextHeadingTypes, TextLevelTypes, TextWeightTypes } from './../../types'

@Component({
  tag: 'cap-text',
  styleUrl: 'cap-text.scss',
  shadow: true,
})
export class CapText {
  /**
   * Description...
   */
  @Prop() content: string = 'Text'

  /**
   * Description...
   */
  @Prop() contentAfter: string

  /**
   * Description...
   */
  @Prop() contentBefore: string

  /**
   * Description...
   */
  @Prop() ellipsis: boolean = false

  /**
   * Description...
   */
  @Prop() family: TextFamilyTypes = 'sans'

  /**
   * Description...
   */
  @Prop() heading: TextHeadingTypes

  /**
   * Description...
   */
  @Prop() italic: boolean

  /**
   * Description...
   */
  @Prop() level: TextLevelTypes = '0'

  /**
   * Description...
   */
  @Prop() noWrap: boolean = false

  /**
   * Description...
   */
  @Prop() paragraph: boolean

  /**
   * Description...
   */
  @Prop() weight: TextWeightTypes = 'soft'

  render() {
    const Tag = this.heading ? `h${this.heading.toString()}` : this.paragraph ? 'p' : 'span'
    const addons = {
      'data-content-before': this.contentBefore,
      'data-content-after': this.contentAfter,
    }
    const hostClass = [
      this.ellipsis ? 'ellipsis' : '',
      this.family,
      this.level,
      this.noWrap ? 'no-wrap' : '',
      this.italic ? 'italic' : '',
      this.weight,
    ]

    return (
      <Host class={hostClass.join(' ')}>
        <Tag class="content" {...addons}>
          <slot />
        </Tag>
      </Host>
    )
  }
}
