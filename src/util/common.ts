function getHeaders (currentLines: any[]){
    let headers: string[] = [];
    if (currentLines) {
      currentLines.forEach((value: string) => {
        Object.keys(value).forEach((key) => {
          if (!headers.find((header) => header == key)) {
            headers.push(key);
          }
        });
      });
    }
    return headers;
}

