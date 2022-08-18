const resultsFolder = 'reports/features/';
const fs = require('fs');
const clientNameIndexFrom = 17;

fs.readdir(resultsFolder, (err, files) => {
  for (const file of files || []) {
    const path = __dirname + '/' + resultsFolder + file;
    const fileContent = fs.readFileSync(path);
    const results = JSON.parse(fileContent);

    // If no data or less than 1 element - ignore, no changes needed
    if (!results || results.length <= 1) {
      continue;
    }

    /**
     * Retrieve all available clients in result file since we will have multiple clients in the same result file.
     * Also store how many times each client was retrieved since retries shouldn't increase if we get a different client.
     */
    const allClients = results.map((e) => e.elements[0].steps[0].embeddings[0].data.substring(clientNameIndexFrom));
    const storedData = {};

    for (const client of allClients) {
      storedData[client] = 0;
    }

    for (const result of results) {
      const clientName = result.elements[0].steps[0].embeddings[0].data.substring(clientNameIndexFrom);
      result.name += ` [${clientName}]`;

      if (storedData[clientName]) {
        result.name += ` (#${storedData[clientName]} retry)`;
      }

      storedData[clientName]++;
    }

    fs.writeFileSync(path, JSON.stringify(results));
  }
});
