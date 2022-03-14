import { Component, Host, Prop, h } from '@stencil/core'
import { FamilyTypes } from './../../types'

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
   * Renders the object.
   *
   * @return     {JSX.Element}  { cap-rich-text custom element }
   */
  render() {
    const hostClass = [this.family]

    return (
      <Host class={hostClass.join(' ')}>
        <slot />
      </Host>
    )
  }
}
