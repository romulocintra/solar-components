import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ac-button',
  styleUrl: 'ac-button.scss',
  shadow: true
})
export class AcButton {
  @Element() host: HTMLButtonElement;

  @Prop() text: string;
  @Prop() type: string = 'button';
  @Prop() tooltip: string;
  @Prop() theme: string;


  hostData() {
    return {
      attribute: 'button',
      title: this.tooltip,
      dataType: this.type,
      class: `ac-button ac-button--${this.theme}`
    };
  }

  render() {

    return (
      <span class="ac-button__text">{this.text}</span>
    );
  }
}
