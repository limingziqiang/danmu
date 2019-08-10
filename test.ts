import getManager, { DanmuManager } from "./lib/index";

const videoEl = document.querySelector("video");
let isPlayed = false;
videoEl.oncanplay = function() {
    if (!isPlayed) {
        isPlayed = true;
    }
};
const containerEl = document.getElementById("container");
var manager: DanmuManager | null = null;
manager = getManager(containerEl);
(window as any).manager = manager;
manager.init({
    duration: 8000,
    slideRatio: 3,
    useMeasure: true
});
manager.start();
let ticket = 0;
function startBatch() {
    manager.sendDanmu({
        content: "你们都是坏人"
    });
    manager.sendDanmu({
        content: "我是好人",
        style: "color:green; font-weight:700",
        trace: 5
    });
    ticket = setInterval(function() {
        manager.sendDanmu([
            { content: "随机的弹幕哦随机的弹幕哦" + Math.random(), style: "color:red" },
            "随机的弹幕哦随机的弹幕哦随机的" + Math.random(),
            // "哦" + Math.random(),
            "1111-666666" + Math.random(),
            "33333-7777777" + Math.random(),
            // "44444-8888888" + Math.random(),
            "55555-8888888" + Math.random(),
            "66666-8888888" + Math.random(),
            "77777-8888888" + Math.random(),
            // { content: "y真8Y美7", acceleration: 16000 }
        ]);
    }, 600);
}

let isBigTest = false;
const txtDanmuEl: HTMLInputElement = document.getElementById("txtDanmu") as HTMLInputElement;
document.getElementById("btnSend").addEventListener("click", (ev) => {
    manager.sendDanmu(txtDanmuEl.value);
    ev.stopPropagation();
}, false);

document.getElementById("btnPause").addEventListener("click", () => {
    if (isBigTest) {
        clearInterval(ticket);
    }
    manager.pause();
});

document.getElementById("btnContiue").addEventListener("click", () => {
    if (isBigTest) {
        startBatch();
    }
    manager.continue();
});

document.getElementById("btnStart").addEventListener("click", () => {
    manager.start();
});

document.getElementById("btnStop").addEventListener("click", () => {
    manager.stop();
    clearInterval(ticket);
    isBigTest = false;
});

document.getElementById("btnBigTest").addEventListener("click", () => {
    if (isBigTest) {
        return;
    }
    clearInterval(ticket);
    manager.start();
    startBatch();
    isBigTest = true;
});
(function() {
    var script = document.createElement("script");
    script.onload = function() {
        var stats = new window.Stats();
        document.body.appendChild(stats.dom);
        requestAnimationFrame(function loop() {
            stats.update();
            requestAnimationFrame(loop);
        });
    };
    script.src = "//mrdoob.github.io/stats.js/build/stats.min.js";
    document.head.appendChild(script);
})();

const lbTotal = document.getElementById("lbTotal");
const lbHide = document.getElementById("lbHide");
const lbInView = document.getElementById("lbInView");

const rect = containerEl.getBoundingClientRect();
const { left, width } = rect;
const right = left + width;
setInterval(function() {
    (window as any).requestIdleCallback(() => {
        const allItems = Array.from(document.querySelectorAll(".danmu-item"));
        const len = allItems.length;
        const inHideLen = allItems.filter(item => item.classList.contains("hide")).length;
        const inViewLen = allItems.filter(function(item) {
            const rect = item.getBoundingClientRect();
            const b = !item.classList.contains("hide") && rect.left + rect.width >= left;
            return b;
        }).length;

        lbTotal.innerText = len + "";
        lbHide.innerHTML = inHideLen + "";
        lbInView.innerHTML = inViewLen + "";
    });
}, 5000);

document.addEventListener("visibilitychange", function() {
    // 用户离开了当前页面
    if (document.visibilityState === "hidden") {
        manager.stop();
        console.log("stop....");
        // console.log(document.getElementById("frames_frame1").getBoundingClientRect())
    }

    // 用户打开或回到页面
    if (document.visibilityState === "visible") {
        manager.start();
        console.log("start....");
        // console.log(document.getElementById("frames_frame1").getBoundingClientRect())
    }
});

document.addEventListener("fullscreenchange", function() {
    console.log("fullscreenchange");
    if (!document.fullscreenElement) {
        quitFull();
    }
});

document.body.ondblclick = ev => {
    ev.stopPropagation();
    document.body.requestFullscreen().then(() => {
        setTimeout(() => {
            goFull();
        }, 0);
    });
};

function goFull() {
    containerEl.classList.add("fullScreen");
    videoEl.classList.add("fullScreen");
    videoEl.setAttribute("webkit-playsinline", "");
    videoEl.setAttribute("playsinline", "");

    manager.resize({
        duration: 10000
    });
}

function quitFull() {
    containerEl.style.width = "1349px";
    containerEl.style.height = "758px";
    containerEl.classList.remove("fullScreen");
    videoEl.classList.remove("fullScreen");
    manager.resize({
        duration: 8000
    });
}
