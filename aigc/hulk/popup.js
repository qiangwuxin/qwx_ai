let originalColor = null;

document.addEventListener('DOMContentLoaded', function() {
    const changeColorButton = document.getElementById('changeColorButton');
    changeColorButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                func: function() {
                    if (!window.originalColor) {
                        window.originalColor = document.body.style.backgroundColor || 'white';
                        document.body.style.backgroundColor = 'green';
                    } else {
                        document.body.style.backgroundColor = window.originalColor;
                        window.originalColor = null;
                    }
                }
            });
        });
    });
});