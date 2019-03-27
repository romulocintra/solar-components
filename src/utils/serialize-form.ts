import { assignByFormDataPath } from './lang/assign-by-form-data-path';

/**
 * The options that can be passed to the serializeForm function.
 */
export interface SerializeFormOptions {
  /**
   * The function will ignore fields that has the disabled property.
   */
  ignoreDisabled?: boolean;
}

/**
 * Serialize a Form element to JSON.
 * @param form The target form element.
 * @param options
 */
export function serializeForm(form: HTMLFormElement, options: SerializeFormOptions = {}) {
  const obj = {};

  Array.prototype.slice.call(form.querySelectorAll('[name]' + (options.ignoreDisabled ? ':not([disabled])' : '')))
    .forEach(function (field) {
      if (field.name && ['file', 'reset', 'button'].indexOf(field.type) === -1 && !field.hasAttribute('data-native')) {
        switch (field.type) {
          case 'select-multiple':
            const options = [];
            Array.prototype.slice.call(field.options).forEach(function (option) {
              if (option.selected) options.push(option.value);
            });
            assignByFormDataPath(obj, field.name, options);
            break;

          case 'checkbox':
          case 'radio':
            if (field.checked) assignByFormDataPath(obj, field.name, true);
            break;

          default:
            if (field.value) assignByFormDataPath(obj, field.name, field.value);
            break
        }
      }
    });

  return obj;
}

