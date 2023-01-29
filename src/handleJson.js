const updateID = () => {
    return new Promise((resolve, reject) => {

        const fs = require('fs');

        fs.readFile('myTailwind.json', 'utf-8', (err, data) => {
            if (err) throw err;

            let jsonData = JSON.parse(data);

            jsonData.allStyles.forEach((style, index) => style.id = index + 1);

            let updatedData = JSON.stringify(jsonData, null, 2);

            fs.writeFile('myTailwind.json', updatedData, 'utf-8', (err) => {
                !err && resolve();
                err && reject(err);


            });
        });
    })
}
const addData = () => {
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Enter HTML element: ', htmlElement => {
            readline.question('Enter class value: ', classValue => {
                fs.readFile('myTailwind.json', 'utf-8', (err, data) => {
                    if (err) {
                        return reject(err);
                    }

                    let jsonData = JSON.parse(data);

                    jsonData.allStyles.push({
                        "id": jsonData.allStyles.length + 1,
                        "htmlElement": htmlElement,
                        "class": classValue
                    });

                    let updatedData = JSON.stringify(jsonData, null, 2);

                    fs.writeFile('myTailwind.json', updatedData, 'utf-8', (err) => {
                        !err && resolve();
                        err && reject(err);
                    });
                });
                readline.close();
            });
        });
    });
};
function showMenu(withMsg = "") {
    withMsg && console.log(`Message: ${withMsg}`);

    console.log("[=== Menu ====]");
    console.log("Select an option:");
    console.log("1. updateID");
    console.log("2. addData");

    process.stdin.once('data', function (data) {
        let choice = data.toString().trim();
        switch (choice) {
            case '1':
                updateID()
                    .then(() => console.log('file updated'))
                    .catch((err) => console.error('UpdateID() failed:', err))
                    .finally(showMenu);
                break;
            case '2':
                addData()
                    .then(() => console.log('file updated'))
                    .catch((err) => console.error('addData() failed:', err))
                    .finally(showMenu);
                break;
            default:
                console.log("Invalid option, try again");
                showMenu();
                break;
        }
    });
}

showMenu();