import { Component, Host, Prop, h } from '@stencil/core'
import { FamilyTypes, TextHeadingTypes, TextLevelTypes, TextWeightTypes } from './../../types'

@Component({
  tag: 'cap-text',
  styleUrl: 'cap-text.scss',
  shadow: true,
})
export class CapText {
  /**
   * Description...
   */
  @Prop({ attribute: 'append' }) dataAppend: string

  /**
   * Description...
   */
  @Prop({ attribute: 'prepend' }) dataPrepend: string

  /**
   * Description...
   */
  @Prop() ellipsis: boolean = false

  /**
   * Description...
   */
  @Prop() family: FamilyTypes = 'sans'

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

  /**
   * Renders the object.
   *
   * @return {JSX.Element}    cap-text custom element
   */
  render(): any {
    const Tag = this.heading ? `h${this.heading.toString()}` : this.paragraph ? 'p' : 'span'
    const addons = {
      'data-prepend': this.dataPrepend,
      'data-append': this.dataAppend,
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
