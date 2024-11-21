// Function to recursively extract headers from a nested object
export function extractHeaders(obj: any, parentKey: string = ""): string[] {
  let headers: string[] = []; // Initialize an empty array to store the headers
  
  // Iterate through each key in the object
  Object.keys(obj).forEach((key) => {
    // Combine the parent key and current key to create a dot-separated key path
    const fullKey = parentKey ? `${parentKey}.${key}` : key;

    // If the value is an object, recurse into it to extract nested headers
    if (typeof obj[key] === "object" && obj[key] !== null) {
      const nestedHeaders = extractHeaders(obj[key], fullKey); // Recursively extract nested headers
      headers = [...headers, ...nestedHeaders]; // Combine the current headers with the nested ones
    } else {
      // If the value is not an object, add the key to the headers list
      headers.push(fullKey);
    }
  });

  return headers;
}
  
// Function to retrieve a value from a nested object using a dot-separated key path
export function getNestedValue(obj: any, keyPath: string): any {
  // Split the dot-separated key path into an array of keys
  const keys = keyPath.split(".");

  // Use the reduce method to traverse the object and access the value based on the key path
  return keys.reduce((currentValue, key) => {
    // If the current value exists and has the key, continue; otherwise, return an empty value
    return currentValue && currentValue[key] !== undefined ? currentValue[key] : undefined;
  }, obj);
}