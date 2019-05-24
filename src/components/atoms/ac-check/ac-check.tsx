import { Component, Element, Prop, Watch } from '@stencil/core';

import { FormFieldBehavior, FormFieldComponent } from '../../../behaviors/form-behavior';
import { Bind } from '../../../utils/lang/bind';
import { ValidatorFunction } from '../../../utils/validations/validations';

/**
 * Accera's full-featured checkbox webcomponent.
 */
@Component({
  tag: 'ac-check',
  styleUrl: 'ac-check.scss',
})
export class AcCheck implements FormFieldComponent {
  formFieldBehavior = new FormFieldBehavior(this);

  @Element() host: HTMLAcCheckElement;

  /**
   * The textual label of this field.
   */
  @Prop() label: string;

  /**
   * The helper text to guide the user.
   */
  @Prop() helperText: string;

  /**
   * The HTML field name.
   */
  @Prop() name: string;

  /**
   * The HTML field value.
   */
  @Prop() value: string;

  /**
   * Set the label direction.
   */
  @Prop() direction: 'left' | 'right' = 'right';

  /**
   * The actual checked state.
   */
  @Prop({ mutable: true }) checked: boolean;

  /**
   * The type of this field.
   */
  @Prop() type: 'radio' | 'checkbox' = 'checkbox';

  /**
   * The native disabled mode.
   */
  @Prop() disabled: boolean;

  /**
   * Mark this field as required.
   */
  @Prop() required: string | boolean;

  /**
   * Error state and message of this field.
   */
  @Prop({ mutable: true }) error: string;

  /**
   * Set the error state based on the error prop.
   * @param error An error message.
   */
  @Watch('error')
  errorDidUpdate(error: string) {
    if (error) { this.formFieldBehavior.setInvalid(); } else { this.formFieldBehavior.setValid(); }
  }

  /**
   * Validation pipeline for this field.
   */
  @Prop() validator: ValidatorFunction | ValidatorFunction[];

  componentDidLoad() {}
  componentDidUnload() {}
  componentWillLoad() {}

  hostData() {
    return {
      attribute: 'input',
      class: {
        [`ac-check--label-${this.direction}`]: this.direction !== undefined,
        [`ac-check--${this.type}`]: this.type !== undefined,
        'ac-check--disabled': this.disabled,
        'ac-check--error': !!this.error,
      }
    };
  }

  @Bind
  handleChange() {
    this.checked = !this.checked;
  }

  render() {
    const nativeInputId = this.name + '_' + this.value;

    return [
      <div class="ac-check__container">
        <input
          id={nativeInputId}
          class="ac-check__native"
          type={this.type}
          name={this.name}
          value={this.value}
          onChange={this.handleChange}
          disabled={this.disabled}
        />
        <label class="ac-check__custom" htmlFor={nativeInputId}>
        </label>
        {this.label && <label class="ac-check__label" htmlFor={nativeInputId}>{this.label}</label>}
      </div>,
      (this.error || this.helperText) && <label class="ac-check__helper-text" htmlFor={nativeInputId}>{this.error || this.helperText}</label>
    ];
  }
}
