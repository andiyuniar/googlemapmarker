import Papa from 'papaparse';

export const useCsv = () => {

    let parsedCsv;

    const csvTOJson = (csv) => {
        const lines = csv.split("\n");
        var result = [];

        for (let i = 0; i < lines.length; i++) {
            let obj = {};
            const currentLine = lines[i].split(",");
            obj.location = currentLine[0];
            obj.lat = currentLine[1];
            obj.lng = currentLine[2];
            result.push(obj);
        }

        return result;

        //return JSON.stringify(result);
    }

    const parsingCsv = (csv, callback) => {
        Papa.parse(csv, {
            header: false,
            dynamicTyping: true,
            complete: callback
        })
    }


    const streamParsing = (url, stepCallback, completeCallback) => {
        Papa.parse(url, {
            // download: true,
            step: stepCallback,
            complete: completeCallback
        });
    }

    return {
        csvTOJson,
        parsingCsv, 
        parsedCsv,
        streamParsing
    }
}
