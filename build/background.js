!function(){"use strict";const e="0.0.3";let t;chrome.runtime.onInstalled.addListener((({reason:e})=>{if("install"===e)return alert("This is beta software, use at your own risk")})),chrome.storage.local.get("url",(e=>{n(e.url)}));const n=e=>{t=e,console.log({CUSTOM_URL:t})};chrome.storage.onChanged.addListener((function(e){e.url&&n(e.url.newValue)})),chrome.webRequest.onBeforeRequest.addListener((function({url:e,method:t}){if(e&&"GET"===t){const{hostname:t}=new URL(e);if(t.endsWith(".sol"))return{redirectUrl:`https://resolver.goo.tools/${t.replace(".sol","")}?redirect`}}}),{urls:["*://*.sol/*"],types:["main_frame"]},["blocking"]),chrome.webRequest.onBeforeRequest.addListener((function(e){if(e.url&&"POST"===e.method&&t)try{const n=decodeURIComponent(String.fromCharCode.apply(null,new Uint8Array(e.requestBody.raw[0].bytes))),r=JSON.parse(n);if(!e.url.includes(t)&&"2.0"===r.jsonrpc&&o.includes(r.method))return{redirectUrl:t}}catch(e){}}),{urls:["<all_urls>"],types:["xmlhttprequest"]},["blocking","requestBody"]);chrome.webRequest.onHeadersReceived.addListener((function(e){if(t&&["OPTIONS","POST"].includes(e.method)&&e.url.includes(t)){const t=(n=e.responseHeaders,(e,t)=>{const o=n.findIndex((({name:t})=>t.toLowerCase()===e));o>=0&&n.splice(o,1),n.push({name:e,value:t})});return t("Access-Control-Allow-Origin","*"),t("Access-Control-Allow-Headers","*"),t("Connection","close"),{responseHeaders:e.responseHeaders}}var n}),{urls:["<all_urls>"],types:["xmlhttprequest"]},["blocking","responseHeaders","extraHeaders"]),chrome.webRequest.onBeforeSendHeaders.addListener((function(n){if(t&&["OPTIONS","POST"].includes(n.method)&&n.url.includes(t))return{requestHeaders:[{name:"Content-Type",value:"application/json"},{name:"Connection",value:"close"},{name:"X-Browser-Extension-Version",value:e},{name:"User-Agent",value:(navigator?.userAgent??"").concat(" BrowserExtension/0.0.3")}]}}),{urls:["<all_urls>"],types:["xmlhttprequest"]},["blocking","requestHeaders","extraHeaders"]);const o=["getAccountInfo","getBalance","getBlock","getBlockCommitment","getBlockHeight","getBlockProduction","getBlocks","getBlocksWithLimit","getBlockTime","getClusterNodes","getEpochInfo","getEpochSchedule","getFeeCalculatorForBlockhash","getFeeRateGovernor","getFees","getFirstAvailableBlock","getGenesisHash","getHealth","getIdentity","getInflationGovernor","getInflationRate","getInflationReward","getLargestAccounts","getLeaderSchedule","getMaxRetransmitSlot","getMaxShredInsertSlot","getMinimumBalanceForRentExemption","getMultipleAccounts","getProgramAccounts","getRecentBlockhash","getRecentPerformanceSamples","getSignaturesForAddress","getSignatureStatuses","getSlot","getSlotLeader","getSlotLeaders","getSnapshotSlot","getStakeActivation","getSupply","getTokenAccountBalance","getTokenAccountsByDelegate","getTokenAccountsByOwner","getTokenLargestAccounts","getTokenSupply","getTransaction","getTransactionCount","getVersion","getVoteAccounts","minimumLedgerSlot","requestAirdrop","sendTransaction","simulateTransaction"]}();
