export const required = value => value ? undefined : 'Required';
export const nonEmpty = value => value.trim() !== ''? undefined : 'Cannot be empty';
export const passwordLength = value => value.length > 8 ? undefined : 'Password must be greater than 8 characters';
export const usernameLength = value => value.length > 1 ? undefined : 'Username must be greater than 1 character';
