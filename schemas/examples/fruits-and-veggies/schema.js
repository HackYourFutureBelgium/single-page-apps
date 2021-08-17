// https://json-schema.org/learn/miscellaneous-examples.html

export const schema = {
  title: 'fruits & veggies',
  description: 'all the fruits and veggies in my kitchen',
  type: 'object',
  properties: {
    fruits: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    vegetables: {
      type: 'array',
      items: {
        type: 'object',
        required: ['veggieName', 'veggieLike'],
        properties: {
          veggieName: {
            type: 'string',
            description: 'The name of the vegetable.',
          },
          veggieLike: {
            type: 'boolean',
            description: 'Do I like this vegetable?',
          },
        },
      },
    },
  },
};
