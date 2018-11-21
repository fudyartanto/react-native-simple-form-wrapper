/**
 * @param {string} value
 * @return {*}
 */
export function required(value) {
  if (!value || value.trim() === '') {
    return {
      valid: false,
      message: 'This field is required',
    };
  }
  return { valid: true };
}

/**
 * @param {string} value
 * @return {*}
 */
export function email(value) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const valid = re.test(String(value).toLowerCase());
  if (valid) {
    return { valid: true };
  } else {
    return { valid: false, message: 'Invalid email' };
  }
}
