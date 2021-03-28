function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const CHANNEL_POINT_SUMMARY_CLASS = "community-points-summary";

const CHANNEL_POINT_ICON_QUERY = 'div.claimable-bonus__icon';

const CLAIM_CHAT_CONTAINER_QUERY = 'div[data-test-selector="chat-private-callout-queue__callout-container"]';

const CLAIM_BUTTON_TEXT = "Claim";

const CHAT_TRAY_CLASSES = "div.chat-input-tray__open";

const CLOSE_BUTTON_QUERY = 'button[aria-label="Close"]'

async function whatever() {
    while (true) {
        await sleep(2000);
        try {
            let channelPointArea = document.getElementsByClassName(CHANNEL_POINT_SUMMARY_CLASS);
            if (channelPointArea.length && channelPointArea[0].querySelectorAll(CHANNEL_POINT_ICON_QUERY)) {
                channelPointArea[0].querySelector(CHANNEL_POINT_ICON_QUERY).click();
            }
        } catch (e) { }

        try {
            let claimButtonContainers = document.querySelectorAll(CLAIM_CHAT_CONTAINER_QUERY);
            if (claimButtonContainers.length && claimButtonContainers[0].getElementsByTagName('button').length) {
                let claimButtons = claimButtonContainers[0].getElementsByTagName('button')
                for (let claimButton of claimButtons) {
                    if (claimButton.innerText.trim() === CLAIM_BUTTON_TEXT) {
                        claimButton.click()
                    }
                }
            }
        } catch (e) { }

        try {
            let chatTray = document.getElementsByClassName(CHAT_TRAY_CLASSES);
            if (chatTray.length && chatTray[0].innerText.includes('Claimed!') && chatTray[0].querySelectorAll(CLOSE_BUTTON_QUERY).length) {
                chatTray[0].querySelector(CLOSE_BUTTON_QUERY).click();
            }
        } catch (e) { }
    }
}

whatever();
