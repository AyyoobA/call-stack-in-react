// Recursive function to extract headers from nested objects
export function extractHeaders(obj: any, parentKey: string = ""): string[] {
    let headers: string[] = [];
  
    Object.keys(obj).forEach((key) => {
      const fullKey = parentKey ? `${parentKey}.${key}` : key; // Create dot-separated keys for nested fields
  
      if (typeof obj[key] === "object" && obj[key] !== null) {
        headers = headers.concat(extractHeaders(obj[key], fullKey)); // Recursively extract nested headers
      } else {
        headers.push(fullKey);
      }
    });
  
    return headers;
  }
  
  // Recursive function to get values based on dot-separated keys
 export function getNestedValue(obj: any, keyPath: string): any {
    return keyPath.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : ""), obj);
  }