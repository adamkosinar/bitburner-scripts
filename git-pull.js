/** @param {NS} ns **/
export async function main(ns) {

    const endpoint = "https://raw.githubusercontent.com/adamkosinar/bitburner-scripts/master/";

    const files = [
        "git-pull.js"
    ];


    for (let i = 0; i < files.length; i++) {

        let file = files[i];

        let success = await ns.wget(endpoint + file, file);

        if (success) {
            ns.tprint("INFO--- PULLING NEW FILE FROM GIT: " + file);
        } else {
            ns.tprint("ERROR--- FAILED TO FETCH FILE: " + file);
        }


    }

}
