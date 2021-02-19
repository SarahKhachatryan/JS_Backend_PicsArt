const fs = require('fs');

function config() {

    const data = fs.readFileSync('C:\\Users\\PC\\WebstormProjects\\untitled1\\.env', 'utf8');

    const dataArr = data.split("\n");

    for (let key of dataArr) {

        if (!key.match(/^[a-zA-Z_$0-9][=].+/)) {

            let env = key.split(/=(.+)/);//spliting by first =

            if (env[0] && env[1] && env[0].charAt(0) !== '#') {

                env[1] = env[1].replace(/["']/g, "");
                process.env[env[0]] = env[1];

            }
        }

    }

}

// config();
// console.log(process.env);
module.exports = {config: config};
