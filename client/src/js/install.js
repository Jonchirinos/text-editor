const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
    // stores the triggered events
    window.deferredPrompt = event;
    // Removes the hidden class from button
    butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
});

// shows the prompt
promptEvent.prompt();

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
    // Clear prompt
    window.deferredPrompt = null;
});
