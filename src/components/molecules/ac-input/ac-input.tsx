import { Component, Prop, Element, Event, EventEmitter, ComponentInterface, State } from '@stencil/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FormField, FormFieldLogic, ValidatorFunction } from '../../../helpers/form-field-logic';
import { Bind } from '../../../helpers';

/**
 * Accera's full-featured Input Field webcomponent.
 */
@Component({
  tag: 'ac-input',
  styleUrl: 'ac-input.scss',
  shadow: true
})
export class AcInput implements ComponentInterface, FormField {
  acInputBase: HTMLAcInputBaseElement;

  @Prop({ mutable: false, reflectToAttr: false }) formField: FormFieldLogic = new FormFieldLogic(this);
  @Prop() validateFn: ValidatorFunction | ValidatorFunction[];
  @State() errorMessage: string;

  @Element() host: HTMLAcInputElement;

  /**
   * The label text of the this input group.
   */
  @Prop() label: string;

  /**
   * The value of the internal input.
   */
  @Prop({ mutable: true }) value: any;

  /**
   * The type of the internal input.
   */
  @Prop() type: string;

  /**
   * The helper text to guide the user.
   */
  @Prop() helperText: string;

  /**
   * The HTML input field's name.
   */
  @Prop() name: string;

  /**
   * The disabled mode
   */
  @Prop() disabled: boolean;

  /**
   * Set this field as required
   */
  @Prop() required: boolean;

  /**
   * Fired when the value of the internal input changes.
   */
  @Event({ bubbles: true }) change: EventEmitter<any>;

  @State() isShowingPassword: boolean;

  @Bind
  private togglePassword() {
    this.isShowingPassword = !this.isShowingPassword;
  }

  @Bind
  private handleChange() {
    this.value = this.acInputBase.value;
    this.change.emit(this.value);

    this.formField.setDirty();
    this.formField.validate()
      .then(err => {
        this.acInputBase.classList.add(err ? 'ac-input--alert' : 'ac-input--success');
        this.acInputBase.classList.remove(err ? 'ac-input--success' : 'ac-input--alert');
      });
  }

  @Bind
  private handleFocus() {
    this.formField.setTouched();
  }

  render() {
    const icon = this.isShowingPassword ? faEyeSlash : faEye;
    return [
      <ac-input-base
        ref={acInputBase => {
          this.acInputBase = acInputBase as any;
        }}
        label={this.label}
        name={this.name}
        type={this.isShowingPassword ? 'text' : this.type}
        value={this.value}
        disabled={this.disabled}
        required={this.required}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
      >
        <slot name="item-start" slot="item-start" />
        {this.type === 'password'
          ? <ac-button slot="item-end" theme="secondary" onClick={this.togglePassword} icon-only fill="flat">
              <ac-fa-icon icon={icon} />
            </ac-button>
          : <slot name="item-end" slot="item-end" />}
      </ac-input-base>,
      <span class="ac-input__helper-text">
        {this.errorMessage || this.helperText}
      </span>
    ];
  }
}
