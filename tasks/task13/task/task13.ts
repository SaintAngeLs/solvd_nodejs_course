import { CustomJSON } from './CusomJSON';

// Destructure the parse separete plyfill method from the CustomJson object.
const { parse } = CustomJSON;

// Export the destructured method with a new name.
export { parse as myJSONParse };
