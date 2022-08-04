
console.log('这是 background page.')

// 安装完成事件
chrome.runtime.onInstalled.addListener(async () => {
    let url = chrome.runtime.getURL("options.html")
    let tab = await chrome.tabs.create({url})
    console.log(`Created tab ${tab.id}`)
})


// 动态注入 function BEGIN
// 需要先清空 manifest.json - 'action'
// function injectedFunction() {
//     console.log('injectedFunction')
//     document.body.style.backgroundColor = 'orange'
// }
//
// chrome.action.onClicked.addListener((tab) => {
//     console.log('tab: ', tab)
//     chrome.scripting.executeScript({
//         target: {tabId: tab.id},
//         function: injectedFunction,
//     })
// })
// 动态注入 function END


// 动态注入 js 文件 BEGIN
// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         files: ['injectedJs.bundle.js']
//     });
// });
// 动态注入 function END

