import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export class csvfilereader {

    async filereader(csv_file_name) {

        const records = parse(fs.readFileSync(path.join(__dirname, csv_file_name)), {
            columns: true,
            skip_empty_lines: true
        });
        //console.log(records);
        return records;
    }
}
