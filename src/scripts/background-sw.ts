chrome.action.onClicked.addListener(() => {
  void chrome.tabs.create({
    url: `chrome-extension://${chrome.runtime.id}/index.html`,
  });
});

export {};
