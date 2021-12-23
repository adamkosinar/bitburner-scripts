/** @param {NS} ns **/
export async function main(ns) {

    ns.disableLog("ALL");

    const budget = ns.getServerMoneyAvailable("home") / 3;

    let servers = ns.getPurchasedServers();


    while (servers.length != 25) {

        let maxRam = getMaxRamAfford(budget);

        let hostName = maxRam + "GB-" + new Date().getTime();

        let result = ns.purchaseServer(hostName, maxRam);

        if (result) {
            ns.toast("PURCHASED SERVER: " + hostName);
        } else {
            ns.toast("FAILED TO BUY");
        }


        servers = ns.getPurchasedServers();

        await ns.sleep(30 * 1000);
    }


    function getMaxRamAfford(budget) {

        let pow = 0;
        let maxRam = 2;
        let canAfford = ns.getPurchasedServerCost(maxRam) < budget;

        while (canAfford) {

            canAfford = ns.getPurchasedServerCost(maxRam) < budget;

            maxRam = Math.pow(2, pow += 1);
        }

        return maxRam;

    }

}
