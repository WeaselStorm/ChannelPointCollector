function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function whatever() {
    while (true) {
        await sleep(2000)
        if (document.getElementsByClassName("tw-button tw-button--success").length > 0) {
            document.getElementsByClassName("tw-button tw-button--success")[0].click()
        }
    }
}

whatever();
