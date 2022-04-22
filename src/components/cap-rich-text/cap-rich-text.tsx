import { Component, Host, Prop, h } from '@stencil/core'
import { FamilyTypes, LeadingTypes } from './../../types'

@Component({
  tag: 'cap-rich-text',
  styleUrl: 'cap-rich-text.scss',
  shadow: false,
})
export class CapRichText {
  /**
   * Description...
   */
  @Prop() family: FamilyTypes = 'sans'

  /**
   * Description...
   */
  @Prop() leading: LeadingTypes = 'compact'

  /**
   * Renders the object.
   *
   * @return     {JSX.Element}  { cap-rich-text custom element }
   */
  render() {
    return (
      <Host class={`${this.family} ${this.leading}`}>
        <slot />
      </Host>
    )
  }
}
