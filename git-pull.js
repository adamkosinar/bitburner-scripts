/** @param {NS} ns **/
export async function main(ns) {

    const endpoint = "https://raw.githubusercontent.com/adamkosinar/bitburner-scripts/master";

    const files = [
        "/git-pull.js"
    ];


    for (let i = 0; i < files.length; i++) {

        let file = files[i];

        await ns.wget(endpoint + file, file);

        ns.tprint("INFO--- PULLING NEW FILE FROM GIT: " + file);
    }

    ns.toast("INFO--- UPDATED GIT FILES");

}
