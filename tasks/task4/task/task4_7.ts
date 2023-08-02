/**
 * Task 7: Object Property Validation


Implement a function called validateObject that takes an object and a validation schema as arguments. The schema should define the required properties, their types, and any additional validation rules. The function should return true if the object matches the schema, and false otherwise. You can choose any schema you want
 */

/**
 * 
 */
export interface Schema {
    [key: string]: {
        type: string,
        required?: boolean,
        validate?: (value: any) => boolean,
    };
}
  
/**
 * 
 * @param obj 
 * @param schema 
 * @returns 
 */
export function validateObject(obj: Record<string, any>, schema: Schema): boolean 
{
    let hasMismatch = false;

    for (let key in schema) 
    {
        // check if property is required and exists

        if (schema[key].required && !obj.hasOwnProperty(key)) 
        {
            hasMismatch = true;
            break;
        }

        if (obj.hasOwnProperty(key)) 
        {
            // check type
            
            let objType = typeof obj[key];
            let schemaType = schema[key].type;
            if (objType !== schemaType) 
            {
                hasMismatch = true;
                break;
            }

        
            if (schema[key]?.validate?.(obj[key]) === false) 
            {
                hasMismatch = true;
                break;
            }
        }
    }
  
    return !hasMismatch;
}