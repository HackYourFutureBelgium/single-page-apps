import Ajv from './ajv7.bundle.js';

export const validate = (schema, data, log = true) => {
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);
  const isValid = validate(data);

  if (log) {
    console.log('------- schema -------\n\n', schema, '\n\n');
    console.log('------- data -------\n\n', data, '\n\n');
  }

  if (isValid) {
    console.log('------- validation -------\n\n', 'all good!', '\n\n');
  } else {
    console.log('------- validation -------\n\n');
    validate.errors.forEach(error =>
      console.assert(false, error.message, error)
    );
  }
};
