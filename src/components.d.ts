/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {
  FormFieldBehavior,
} from './behaviors/form-behavior';
import {
  ValidatorFunction,
} from './utils/validations/validations';
import {
  SelectOption,
} from './components/molecules/ac-select/ac-select';


export namespace Components {

  interface AcButton {
    /**
    * The HTML5 native disable prop.
    */
    'disabled'?: boolean;
    /**
    * Fill mode: * flat - No borders and no raising * solid - Raised button, default * clear - No background and no borders
    */
    'fill': 'clear' | 'solid' | 'flat' | 'outline';
    /**
    * An optional link to open when click on it. Turns the button into a anchor element.
    */
    'href'?: string;
    /**
    * Icon only mode, with a square button, centered icon.
    */
    'iconOnly': boolean;
    /**
    * Set the loading mode, showing a loading icon.
    */
    'loading': boolean;
    /**
    * The size of the button: * small - height: 36px * big - height: 50px * default - 44px
    */
    'size'?: 'small' | 'big';
    /**
    * The HTML5 native anchor target to handle the href property.
    */
    'target'?: '_blank' | '_self' | '_parent' | '_top' | string;
    /**
    * The theme color defined in the color palette. The default is white.
    */
    'theme'?: string;
    /**
    * When hover this button, present a tootip text.
    */
    'tooltip'?: string;
    /**
    * The HTML5 button type. See https://mdn.io/button
    */
    'type': 'button' | 'submit' | 'reset';
  }
  interface AcButtonAttributes extends StencilHTMLAttributes {
    /**
    * The HTML5 native disable prop.
    */
    'disabled'?: boolean;
    /**
    * Fill mode: * flat - No borders and no raising * solid - Raised button, default * clear - No background and no borders
    */
    'fill'?: 'clear' | 'solid' | 'flat' | 'outline';
    /**
    * An optional link to open when click on it. Turns the button into a anchor element.
    */
    'href'?: string;
    /**
    * Icon only mode, with a square button, centered icon.
    */
    'iconOnly'?: boolean;
    /**
    * Set the loading mode, showing a loading icon.
    */
    'loading'?: boolean;
    /**
    * The size of the button: * small - height: 36px * big - height: 50px * default - 44px
    */
    'size'?: 'small' | 'big';
    /**
    * The HTML5 native anchor target to handle the href property.
    */
    'target'?: '_blank' | '_self' | '_parent' | '_top' | string;
    /**
    * The theme color defined in the color palette. The default is white.
    */
    'theme'?: string;
    /**
    * When hover this button, present a tootip text.
    */
    'tooltip'?: string;
    /**
    * The HTML5 button type. See https://mdn.io/button
    */
    'type'?: 'button' | 'submit' | 'reset';
  }

  interface AcCheck {
    /**
    * The actual checked state.
    */
    'checked': boolean;
    /**
    * The native disabled mode.
    */
    'disabled': boolean;
    /**
    * The helper text to guide the user.
    */
    'helperText': string;
    /**
    * The textual label of this field.
    */
    'label': string;
    /**
    * Set the label to the left of checkbox.
    */
    'labelLeft': boolean;
    /**
    * The HTML field name.
    */
    'name': string;
    /**
    * The type of this field.
    */
    'type': 'radio' | 'checkbox';
    /**
    * The HTML field value.
    */
    'value': string;
  }
  interface AcCheckAttributes extends StencilHTMLAttributes {
    /**
    * The actual checked state.
    */
    'checked'?: boolean;
    /**
    * The native disabled mode.
    */
    'disabled'?: boolean;
    /**
    * The helper text to guide the user.
    */
    'helperText'?: string;
    /**
    * The textual label of this field.
    */
    'label'?: string;
    /**
    * Set the label to the left of checkbox.
    */
    'labelLeft'?: boolean;
    /**
    * The HTML field name.
    */
    'name'?: string;
    /**
    * The type of this field.
    */
    'type'?: 'radio' | 'checkbox';
    /**
    * The HTML field value.
    */
    'value'?: string;
  }

  interface AcFaIcon {
    /**
    * Set an animation defined in the ac-fa-icon.scss
    */
    'anim': string;
    /**
    * The icon imported from @fortawesome/free-solid-svg-icons.
    */
    'icon': IconDefinition;
    /**
    * The size of the icon in px.
    */
    'size': number;
  }
  interface AcFaIconAttributes extends StencilHTMLAttributes {
    /**
    * Set an animation defined in the ac-fa-icon.scss
    */
    'anim'?: string;
    /**
    * The icon imported from @fortawesome/free-solid-svg-icons.
    */
    'icon'?: IconDefinition;
    /**
    * The size of the icon in px.
    */
    'size'?: number;
  }

  interface AcHeader {}
  interface AcHeaderAttributes extends StencilHTMLAttributes {}

  interface AcInputBase {
    /**
    * The HTML disabled mode.
    */
    'disabled': boolean;
    /**
    * The label text of the this input group.
    */
    'label': string;
    /**
    * The native HTML field name.
    */
    'name': string;
    /**
    * Enable readonly.
    */
    'readonly': boolean;
    /**
    * The native HTML required mode.
    */
    'required': boolean;
    /**
    * The type of the internal input.
    */
    'type': string;
    /**
    * The value of the internal input.
    */
    'value': any;
  }
  interface AcInputBaseAttributes extends StencilHTMLAttributes {
    /**
    * The HTML disabled mode.
    */
    'disabled'?: boolean;
    /**
    * The label text of the this input group.
    */
    'label'?: string;
    /**
    * The native HTML field name.
    */
    'name'?: string;
    /**
    * Fired when the value of the internal input changes.
    */
    'onChange'?: (event: CustomEvent<any>) => void;
    /**
    * Enable readonly.
    */
    'readonly'?: boolean;
    /**
    * The native HTML required mode.
    */
    'required'?: boolean;
    /**
    * The type of the internal input.
    */
    'type'?: string;
    /**
    * The value of the internal input.
    */
    'value'?: any;
  }

  interface AcNavdrawer {
    /**
    * Show it as an absolute drawer.
    */
    'modal': boolean;
    /**
    * The color theme.
    */
    'theme': string;
    /**
    * Toggle opened state of the modal drawer.
    */
    'toggle': () => void;
  }
  interface AcNavdrawerAttributes extends StencilHTMLAttributes {
    /**
    * Show it as an absolute drawer.
    */
    'modal'?: boolean;
    /**
    * The color theme.
    */
    'theme'?: string;
  }

  interface AcPanel {}
  interface AcPanelAttributes extends StencilHTMLAttributes {}

  interface AcStepper {
    'done': number;
    'next': () => void;
    'previous': () => void;
    'steps': number;
  }
  interface AcStepperAttributes extends StencilHTMLAttributes {
    'done'?: number;
    'onChange'?: (event: CustomEvent<{ index: number }>) => void;
    'steps'?: number;
  }

  interface AcInput {
    /**
    * The disabled mode
    */
    'disabled': boolean;
    /**
    * The actual error message.
    */
    'error': string;
    /**
    * Provide access to the form field logic.
    */
    'formFieldBehavior': FormFieldBehavior;
    /**
    * The helper text to guide the user.
    */
    'helperText': string;
    /**
    * The label text of the this input group.
    */
    'label': string;
    /**
    * The HTML input field's name.
    */
    'name': string;
    /**
    * Set this field as required
    */
    'required': string | boolean;
    /**
    * The type of the internal input.
    */
    'type': string;
    /**
    * The validations that this field need. This validations is checked on: - Blur event - Form submit event
    */
    'validateFn': ValidatorFunction | ValidatorFunction[];
    /**
    * The value of the internal input.
    */
    'value': any;
  }
  interface AcInputAttributes extends StencilHTMLAttributes {
    /**
    * The disabled mode
    */
    'disabled'?: boolean;
    /**
    * The actual error message.
    */
    'error'?: string;
    /**
    * Provide access to the form field logic.
    */
    'formFieldBehavior'?: FormFieldBehavior;
    /**
    * The helper text to guide the user.
    */
    'helperText'?: string;
    /**
    * The label text of the this input group.
    */
    'label'?: string;
    /**
    * The HTML input field's name.
    */
    'name'?: string;
    /**
    * Fired when the value of the internal input changes.
    */
    'onChange'?: (event: CustomEvent<any>) => void;
    /**
    * Set this field as required
    */
    'required'?: string | boolean;
    /**
    * The type of the internal input.
    */
    'type'?: string;
    /**
    * The validations that this field need. This validations is checked on: - Blur event - Form submit event
    */
    'validateFn'?: ValidatorFunction | ValidatorFunction[];
    /**
    * The value of the internal input.
    */
    'value'?: any;
  }

  interface AcSelect {
    /**
    * Set the disabled mode.
    */
    'disabled': boolean;
    /**
    * The helper text to guide the user.
    */
    'helperText': string;
    /**
    * The label text of the this input group.
    */
    'label': string;
    /**
    * Set the loading mode, showing a loading icon.
    */
    'loading': boolean;
    /**
    * If true, the component will handle multiple selected items.
    */
    'multiple': boolean;
    /**
    * The name of the internal input.
    */
    'name': string;
    /**
    * The options that will be displayed in the panel.
    */
    'options': SelectOption[];
    /**
    * The value of the internal input.
    */
    'value': any;
  }
  interface AcSelectAttributes extends StencilHTMLAttributes {
    /**
    * Set the disabled mode.
    */
    'disabled'?: boolean;
    /**
    * The helper text to guide the user.
    */
    'helperText'?: string;
    /**
    * The label text of the this input group.
    */
    'label'?: string;
    /**
    * Set the loading mode, showing a loading icon.
    */
    'loading'?: boolean;
    /**
    * If true, the component will handle multiple selected items.
    */
    'multiple'?: boolean;
    /**
    * The name of the internal input.
    */
    'name'?: string;
    /**
    * Fired when the user select/deselect an option.
    */
    'onChange'?: (event: CustomEvent<any>) => void;
    /**
    * The options that will be displayed in the panel.
    */
    'options'?: SelectOption[];
    /**
    * The value of the internal input.
    */
    'value'?: any;
  }

  interface AcTab {
    /**
    * If true, mark this tab as a selected tab.
    */
    'active': boolean;
  }
  interface AcTabAttributes extends StencilHTMLAttributes {
    /**
    * If true, mark this tab as a selected tab.
    */
    'active'?: boolean;
  }

  interface AcTabs {
    /**
    * The theme color defined in the color palette. The default is primary.
    */
    'theme': string;
  }
  interface AcTabsAttributes extends StencilHTMLAttributes {
    'onTabChange'?: (event: CustomEvent<string>) => void;
    /**
    * The theme color defined in the color palette. The default is primary.
    */
    'theme'?: string;
  }

  interface AcModalController {
    /**
    * An optional property used to refer the parent element that the component will be attached to.
    */
    'bound': string;
    /**
    * Clear properties of the managed component.
    */
    'clear': () => Promise<void[]>;
    /**
    * Set properties to the managed component.
    */
    'set': (props: any) => any;
  }
  interface AcModalControllerAttributes extends StencilHTMLAttributes {
    /**
    * An optional property used to refer the parent element that the component will be attached to.
    */
    'bound'?: string;
  }

  interface AcModal {
    'close': () => any;
    'title': string;
  }
  interface AcModalAttributes extends StencilHTMLAttributes {
    'onClose'?: (event: CustomEvent<void>) => void;
    'title'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AcButton': Components.AcButton;
    'AcCheck': Components.AcCheck;
    'AcFaIcon': Components.AcFaIcon;
    'AcHeader': Components.AcHeader;
    'AcInputBase': Components.AcInputBase;
    'AcNavdrawer': Components.AcNavdrawer;
    'AcPanel': Components.AcPanel;
    'AcStepper': Components.AcStepper;
    'AcInput': Components.AcInput;
    'AcSelect': Components.AcSelect;
    'AcTab': Components.AcTab;
    'AcTabs': Components.AcTabs;
    'AcModalController': Components.AcModalController;
    'AcModal': Components.AcModal;
  }

  interface StencilIntrinsicElements {
    'ac-button': Components.AcButtonAttributes;
    'ac-check': Components.AcCheckAttributes;
    'ac-fa-icon': Components.AcFaIconAttributes;
    'ac-header': Components.AcHeaderAttributes;
    'ac-input-base': Components.AcInputBaseAttributes;
    'ac-navdrawer': Components.AcNavdrawerAttributes;
    'ac-panel': Components.AcPanelAttributes;
    'ac-stepper': Components.AcStepperAttributes;
    'ac-input': Components.AcInputAttributes;
    'ac-select': Components.AcSelectAttributes;
    'ac-tab': Components.AcTabAttributes;
    'ac-tabs': Components.AcTabsAttributes;
    'ac-modal-controller': Components.AcModalControllerAttributes;
    'ac-modal': Components.AcModalAttributes;
  }


  interface HTMLAcButtonElement extends Components.AcButton, HTMLStencilElement {}
  var HTMLAcButtonElement: {
    prototype: HTMLAcButtonElement;
    new (): HTMLAcButtonElement;
  };

  interface HTMLAcCheckElement extends Components.AcCheck, HTMLStencilElement {}
  var HTMLAcCheckElement: {
    prototype: HTMLAcCheckElement;
    new (): HTMLAcCheckElement;
  };

  interface HTMLAcFaIconElement extends Components.AcFaIcon, HTMLStencilElement {}
  var HTMLAcFaIconElement: {
    prototype: HTMLAcFaIconElement;
    new (): HTMLAcFaIconElement;
  };

  interface HTMLAcHeaderElement extends Components.AcHeader, HTMLStencilElement {}
  var HTMLAcHeaderElement: {
    prototype: HTMLAcHeaderElement;
    new (): HTMLAcHeaderElement;
  };

  interface HTMLAcInputBaseElement extends Components.AcInputBase, HTMLStencilElement {}
  var HTMLAcInputBaseElement: {
    prototype: HTMLAcInputBaseElement;
    new (): HTMLAcInputBaseElement;
  };

  interface HTMLAcNavdrawerElement extends Components.AcNavdrawer, HTMLStencilElement {}
  var HTMLAcNavdrawerElement: {
    prototype: HTMLAcNavdrawerElement;
    new (): HTMLAcNavdrawerElement;
  };

  interface HTMLAcPanelElement extends Components.AcPanel, HTMLStencilElement {}
  var HTMLAcPanelElement: {
    prototype: HTMLAcPanelElement;
    new (): HTMLAcPanelElement;
  };

  interface HTMLAcStepperElement extends Components.AcStepper, HTMLStencilElement {}
  var HTMLAcStepperElement: {
    prototype: HTMLAcStepperElement;
    new (): HTMLAcStepperElement;
  };

  interface HTMLAcInputElement extends Components.AcInput, HTMLStencilElement {}
  var HTMLAcInputElement: {
    prototype: HTMLAcInputElement;
    new (): HTMLAcInputElement;
  };

  interface HTMLAcSelectElement extends Components.AcSelect, HTMLStencilElement {}
  var HTMLAcSelectElement: {
    prototype: HTMLAcSelectElement;
    new (): HTMLAcSelectElement;
  };

  interface HTMLAcTabElement extends Components.AcTab, HTMLStencilElement {}
  var HTMLAcTabElement: {
    prototype: HTMLAcTabElement;
    new (): HTMLAcTabElement;
  };

  interface HTMLAcTabsElement extends Components.AcTabs, HTMLStencilElement {}
  var HTMLAcTabsElement: {
    prototype: HTMLAcTabsElement;
    new (): HTMLAcTabsElement;
  };

  interface HTMLAcModalControllerElement extends Components.AcModalController, HTMLStencilElement {}
  var HTMLAcModalControllerElement: {
    prototype: HTMLAcModalControllerElement;
    new (): HTMLAcModalControllerElement;
  };

  interface HTMLAcModalElement extends Components.AcModal, HTMLStencilElement {}
  var HTMLAcModalElement: {
    prototype: HTMLAcModalElement;
    new (): HTMLAcModalElement;
  };

  interface HTMLElementTagNameMap {
    'ac-button': HTMLAcButtonElement
    'ac-check': HTMLAcCheckElement
    'ac-fa-icon': HTMLAcFaIconElement
    'ac-header': HTMLAcHeaderElement
    'ac-input-base': HTMLAcInputBaseElement
    'ac-navdrawer': HTMLAcNavdrawerElement
    'ac-panel': HTMLAcPanelElement
    'ac-stepper': HTMLAcStepperElement
    'ac-input': HTMLAcInputElement
    'ac-select': HTMLAcSelectElement
    'ac-tab': HTMLAcTabElement
    'ac-tabs': HTMLAcTabsElement
    'ac-modal-controller': HTMLAcModalControllerElement
    'ac-modal': HTMLAcModalElement
  }

  interface ElementTagNameMap {
    'ac-button': HTMLAcButtonElement;
    'ac-check': HTMLAcCheckElement;
    'ac-fa-icon': HTMLAcFaIconElement;
    'ac-header': HTMLAcHeaderElement;
    'ac-input-base': HTMLAcInputBaseElement;
    'ac-navdrawer': HTMLAcNavdrawerElement;
    'ac-panel': HTMLAcPanelElement;
    'ac-stepper': HTMLAcStepperElement;
    'ac-input': HTMLAcInputElement;
    'ac-select': HTMLAcSelectElement;
    'ac-tab': HTMLAcTabElement;
    'ac-tabs': HTMLAcTabsElement;
    'ac-modal-controller': HTMLAcModalControllerElement;
    'ac-modal': HTMLAcModalElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
