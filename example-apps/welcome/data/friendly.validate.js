import { validate } from '../../../lib/validate.js';

import { friendly } from './friendly.js';
import { friendlySchema } from './friendly.schema.js';

validate(friendlySchema, friendly);
