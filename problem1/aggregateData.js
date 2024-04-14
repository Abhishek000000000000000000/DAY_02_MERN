// Problem 1 solution - aggregateData.js
const fs = require('fs');
const path = require('path');

const folderPath = './data'; // Assuming data files are in this folder

// Function to read a file asynchronously
const readFile = (filePath, callback) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, data);
    });
};

// Function to aggregate data from multiple files using callbacks
const aggregateDataCallback = (folderPath, callback) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            callback(err, null);
            return;
        }

        let aggregate = '';

        const readNextFile = (index) => {
            if (index === files.length) {
                callback(null, aggregate);
                return;
            }

            const filePath = path.join(folderPath, files[index]);
            readFile(filePath, (err, data) => {
                if (err) {
                    callback(err, null);
                    return;
                }
                aggregate += data;
                readNextFile(index + 1);
            });
        };

        readNextFile(0);
    });
};

// Usage
aggregateDataCallback(folderPath, (err, result) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Aggregated data:', result);
});
