import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


const prompt = inquirer.createPromptModule();
prompt([
    {
        message: 'Type Your URL:',
        name: 'URL',
    },
])
    .then((answers) => {

        const url = answers.URL;

        const timeStamp = Date.now();
        const qrFileName = `qr_image_${timeStamp}.png`;


        var qr_png = qr.image(url); // for immage generation
        qr_png.pipe(fs.createWriteStream(qrFileName)); // probm 

        fs.appendFile('url.txt', `${url}\n`, (err) => { //NEW TEXT FIlE  WIll BE GENERATED FOR  EVERY  NEW  QR CODE
            if (err) {
                console.error("error writing to File:", err);

            }
            else {
                console.log(`url saved as : ${qrFileName}`);
                console.log(" url saved");
            }

        });


    });






