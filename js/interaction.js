function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const CHANNEL_POINT_AREA_CLASS = "community-points-summary";

const CLAIM_CHAT_CONTAINER = 'div[data-test-selector="chat-private-callout-queue__callout-container"]';

const CHAT_TRAY_CLASSES = "chat-input-tray__open";

async function whatever() {
    while (true) {
        await sleep(2000);
        let channelPointArea = document.getElementsByClassName(CHANNEL_POINT_AREA_CLASS);
        if (channelPointArea[0].getElementsByTagName('button').length > 1) {
            try {
                channelPointArea[0].getElementsByTagName('button')[1].click();
            } catch (e) {
                console.log('Error in channelPoint collection: ' + e.message)
            }
        }
        
        let claimButtonContainers = document.querySelectorAll(CLAIM_CHAT_CONTAINER);
        if (claimButtonContainers.length) {
            try {
                claimButtonContainers[0].getElementsByTagName('button')[0].click();
                await sleep(1500);
                let chatTray = document.getElementsByClassName(CHAT_TRAY_CLASSES);
                chatTray[0].getElementsByTagName('button')[0].click();
            } catch (e) {
                console.log('Error in drop collection: ' + e.message)
            }
        }
    }
}

whatever();
