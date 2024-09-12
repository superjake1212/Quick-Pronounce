chrome.contextMenus.create({
  id: "pronounceWord",
  title: "Pronounce Word",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "pronounceWord" && info.selectionText) {
    let utterance = new SpeechSynthesisUtterance(info.selectionText);
    speechSynthesis.speak(utterance);
  }
});
