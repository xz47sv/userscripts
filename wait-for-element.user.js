function waitForElement(selector) {
    return new Promise((resolve) => {
        let element = document.querySelector(selector);
        if (element) {
            return resolve(element);
        }

        const observer = new MutationObserver(() => {
            element = document.querySelector(selector);
            if (element) {
                observer.disconnect();
                resolve(element);
            }
        });

        observer.observe(document.body, {
            subtree: true,
            childList: true,
        });
    });
}
