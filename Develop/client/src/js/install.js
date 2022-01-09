const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt', event);
    // Store the event so it can be used later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install anchor tag.
    installBtn.classList.toggle('hidden', false);
  });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('buttonInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
     return;
    }
    promptEvent.prompt();
    // Show the result
    const result = await promptEvent.userChoice;
    console.log('userChoice', result);
    // Reset the deferred prompt variable
    window.deferredPrompt = null;
    butinstall.classList.toggle('hidden', true);
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('appinstalled', event);
    window.deferredPrompt = null;
  });
  