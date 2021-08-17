export const friendlySchema = {
  title: 'friendly',
  description: 'some friendly data',
  type: 'object',
  required: ['greeting'],

  properties: {
    greeting: {
      type: 'string',
      description: 'a friendly greeting for the user',
    },
    message: {
      type: 'string',
      description: 'a friendly message for after the greeting',
    },
  },
};
