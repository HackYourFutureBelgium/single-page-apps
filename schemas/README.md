# Schemas

It's like documentation for your data.

## Limited Types

It's important to make a very clear difference between the data in your application and the code in your application. To help you make this difference you will limit the data in your application to these types:

- objects
- arrays
- numbers
- strings
- boolean
- null

Notice functions aren't in this list! You data should not _do_ anything. It should just be some stored information. Your application does things _to_ the data.

For now your data will be written as JavaScript, but following these type limitations will prepare you to work with JSON later on.

> Curious to know more? check out [what is JSON?](https://www.youtube.com/watch?v=iiADhChRriM), [What is JSON Schema?](https://www.youtube.com/watch?v=tp4IzG6oDA0), [json-schema.org](https://json-schema.org/learn/getting-started-step-by-step.html) and this [JSON schema sandbox](https://jsonschemalint.com/#!/version/draft-07/markup/json)

---

## Schemas by Example

### `title`, `description`, `type`

The basis of your schemas will be a title, description and type. The type for all of your projects will be `"object"`:

<details>
<summary>expand/collapse</summary>

```js
const schema = {
  title: 'best friend',
  description: 'my best friend when I was little',
  type: 'object',
};

const data = {};
```

</details>

</details>

---

### `properties`

You can define which properties will be in your object. Properties should have a type, and can also have a description.

<details>
<summary>expand/collapse</summary>

```js
const schema = {
  title: 'best friend',
  description: 'my best friend when I was little',
  type: 'object',
  properties: {
    age: {
      type: 'number',
      description: 'how old my friend was when we met',
    },
    name: {
      type: 'string',
      description: "my friend's first name",
    },
  },
};

const data = {
  age: 12,
  name: 'Emily',
};
```

</details>

</details>

---

### `required`

You can decide which properties are required in your data. If a required property is missing your data will fail it's validation.

<details>
<summary>expand/collapse</summary>

```js
const schema = {
  title: 'best friend',
  description: 'my best friend when I was little',
  type: 'object',
  properties: {
    age: {
      type: 'number',
      description: 'how old my friend was when we met',
    },
    name: {
      type: 'string',
      description: "my friend's first name",
    },
    favoriteColor: {
      type: 'string',
      description: "my friend's favorite color when we met",
    },
  },
  required: ['age', 'name'],
};

const data = {
  age: 12, // required
  name: 'Emily', // required
  favoriteColor: 'blue', // not required
};
```

</details>

---

### Objects in your data

You can describe objects _inside_ your object the same way.

<details>
<summary>expand/collapse</summary>

```js
const schema = {
  title: 'best friend',
  description: 'my best friend when I was little',
  type: 'object',
  properties: {
    age: {
      type: 'number',
      description: 'how old my friend was when we met',
    },
    name: {
      type: 'string',
      description: "my friend's first name",
    },
    pet: {
      // an object inside your object
      type: 'object',
      description: "my best friend's pet when we met",
      properties: {
        species: {
          type: 'string',
          description: "the species of my best friend's pet",
        },
        name: {
          type: 'string',
          description: "my best friend's pet's name",
        },
        age: {
          type: 'number',
          description: "my best friend's pet's age when we met",
        },
      },
      required: ['species', 'name'],
    },
  },
  required: ['age', 'name', 'pet'],
};

const data = {
  age: 12,
  name: 'Emily',
  pet: {
    species: 'dog',
    name: 'Clifford',
  },
};
```

</details>

---

### Arrays in your data

You can also document arrays in your data using a schema. To document an array you will need to say what it will contain using the `"items":` field.

<details>
<summary>expand/collapse</summary>

```js
const schema = {
  title: 'best friend',
  description: 'my best friend when I was little',
  type: 'object',
  properties: {
    age: {
      type: 'number',
      description: 'how old my friend was when we met',
    },
    name: {
      type: 'string',
      description: "my friend's first name",
    },
    favoriteColors: {
      type: 'array',
      description: "all of my friend's favorite colors",
      items: {
        type: 'string',
      },
    },
  },
  required: ['age', 'name'],
};

const data = {
  age: 12,
  name: 'Emily',
  favoriteColors: ['orange', 'purple', 'yellow'],
};
```

</details>

---

### Objects in arrays

A very common structure in application data is an array of objects. Here's how you would document this using a schema:

<details>
<summary>expand/collapse</summary>

```js
const schema = {
  title: 'all of my friends',
  description: 'my best friend when I was little',
  type: 'array',
  items: {
    title: 'a friend',
    description: 'one of my friends when I was little',
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: "my friend's first name",
      },
      age: {
        type: 'number',
        description: 'how old my friend was when we met',
      },
    },
  },
};

const data = [
  {
    age: 12,
    name: 'Emily',
  },
  {
    age: 9,
    name: 'Kate',
  },
  {
    age: 14,
    name: 'Martha',
  },
];
```

</details>

---

## All together

The schemas you write for your projects will look something like this:

<details>
<summary>expand/collapse</summary>

```js
const schema = {
  title: 'my childhood',
  description: 'the important details from when I was a kid',
  type: 'object',
  properties: {
    pet: {
      type: 'object',
      description: 'my pet when I was a kid',
      properties: {
        species: {
          type: 'string',
          description: 'the species of my pet',
        },
        name: {
          type: 'string',
          description: "my pet's name",
        },
        alive: {
          type: 'boolean',
          description: 'is this pet still alive?',
        },
      },
      required: ['species', 'name'],
    },
    friends: {
      type: 'array',
      items: {
        title: 'a friend',
        description: 'one of my friends when I was little',
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: "my friend's first name",
          },
          age: {
            type: 'number',
            description: 'how old my friend was when we met',
          },
        },
        required: ['name'],
      },
    },
  },
};

const data = {
  pet: {
    species: 'lizard',
    name: 'Scaly',
    alive: false,
  },
  friends: [
    {
      age: 12,
      name: 'Emily',
    },
    {
      name: 'Kate',
    },
    {
      age: 14,
      name: 'Martha',
    },
  ],
};
```

</details>

---

### placing constraints

you can also place constraints on your data, but that's more of a 🐥 thing. here's some examples (taken from [here](https://json-schema.org/learn/getting-started-step-by-step.html)):

<details>
<summary>expand/collapse</summary>

- constraining numbers:

  ```json
  "latitude": {
      "type": "number",
      "minimum": -90,
      "maximum": 90
    },
  ```

- constraining arrays:

  ```json
    "tags": {
      "description": "Tags for the product",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "uniqueItems": true
    }
  ```

</details>
