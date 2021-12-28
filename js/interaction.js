const CHAT_ROOM_QUERY = 'section.chat-room'

const CHANNEL_POINT_SUMMARY_QUERY = "div.community-points-summary";

const CHANNEL_POINT_ICON_QUERY = 'div.claimable-bonus__icon';

const BONUS_BUTTON_QUERY =' div.tw-transition button'

const CLAIM_CHAT_CONTAINER_QUERY = 'div[data-test-selector="chat-private-callout-queue__callout-container"]';

const CHAT_RULES_ACKNOWLEDGEMENT_QUERY = 'button[data-test-selector="chat-rules-ok-button"]';

const CHAT_TRAY_QUERY = 'div.chat-input-tray__open';

function claimRewards() {
    if (!!document.querySelector("video")) {
        const bonusButtonIcon = document.querySelector([CHAT_ROOM_QUERY, CHANNEL_POINT_SUMMARY_QUERY, CHANNEL_POINT_ICON_QUERY].join(' '));
        const bonusButton = document.querySelector([CHAT_ROOM_QUERY, CHANNEL_POINT_SUMMARY_QUERY, BONUS_BUTTON_QUERY].join(' '));
        if (bonusButtonIcon && bonusButton) {
            bonusButton.click();
        }
        const rewardClaimButton = document.querySelector([CLAIM_CHAT_CONTAINER_QUERY, 'button'].join(' '));
        if (rewardClaimButton) {
            rewardClaimButton.click();
        }
        const chatRulesButton = document.querySelector(CHAT_RULES_ACKNOWLEDGEMENT_QUERY);
        if (chatRulesButton) {
            chatRulesButton.click();
        }
        const chatTrayDismiss = document.querySelector([CHAT_TRAY_QUERY, 'button:not(tw-interactable)'].join(' '));
        const dropAccountLink = document.querySelector([CHAT_TRAY_QUERY, 'a.tw-link'].join(' '));
        if (dropAccountLink && chatTrayDismiss) {
            chatTrayDismiss.click();
        }
    }
}

new MutationObserver(claimRewards).observe(document, { attributes: true, childList: true, subtree: true })
