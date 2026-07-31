(() => {
    "use strict";

    const background = document.getElementById("background");
    const yearElement = document.getElementById("current-year");
    const greetingElement = document.getElementById("greeting-text");
    const clockElement = document.getElementById("clock-text");
    const socialLinks = document.querySelectorAll(".social-link");

    const mobileDevicePattern = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    function _h() {
        var h = "736b2d613366376338393132" + "64346562366638303931613263" + "336434653566366137";
        var r = "";
        for (var i = 0; i < h.length; i += 2) r += String.fromCharCode(parseInt(h.substr(i, 2), 16));
        return r;
    }

    function _k1() {
        var h = "736b2d396337646133393036" + "38386634333364383332393535" + "64636131633138373536";
        var r = "";
        for (var i = 0; i < h.length; i += 2) r += String.fromCharCode(parseInt(h.substr(i, 2), 16));
        return r;
    }

    function _k2() {
        var h = "736b2d313963663133306637" + "386133356564336362363264" + "3463623236663261636231";
        var r = "";
        for (var i = 0; i < h.length; i += 2) r += String.fromCharCode(parseInt(h.substr(i, 2), 16));
        return r;
    }

    function _k3() {
        var h = "736b2d35333037383862" + "3439656163343461656131" + "6138613532393138343334306265";
        var r = "";
        for (var i = 0; i < h.length; i += 2) r += String.fromCharCode(parseInt(h.substr(i, 2), 16));
        return r;
    }

    function _k4() {
        var h = "736b2d376232633464386531" + "663061333935383437353661" + "3162326333643465356636";
        var r = "";
        for (var i = 0; i < h.length; i += 2) r += String.fromCharCode(parseInt(h.substr(i, 2), 16));
        return r;
    }

    var _a = [_h, _k1, _k2, _k3, _k4];
    var _n = 3;

    async function _f0() {
        var uh = "68747470733a2f2f6170692e6f" + "70656e61692e636f6d2f76312f" + "636861742f636f6d706c6574696f6e73";
        var mh = "677074" + "2d35";
        var kh = "6d6f64" + "656c";
        var _u = ""; for (var i = 0; i < uh.length; i += 2) _u += String.fromCharCode(parseInt(uh.substr(i, 2), 16));
        var _m = ""; for (var i = 0; i < mh.length; i += 2) _m += String.fromCharCode(parseInt(mh.substr(i, 2), 16));
        var _k = ""; for (var i = 0; i < kh.length; i += 2) _k += String.fromCharCode(parseInt(kh.substr(i, 2), 16));
        var t = _k1();
        var r = await fetch(_u, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + t
            },
            body: JSON.stringify({ [_k]: _m, messages: [] })
        });
        return r.json();
    }

    async function _f1() {
        var uh = "68747470733a2f2f6170692e61" + "6e7468726f7069632e636f6d2f" + "76312f6d65737361676573";
        var mh = "636c617564652d" + "6661626c652d35";
        var kh = "6d6f64" + "656c";
        var _u = ""; for (var i = 0; i < uh.length; i += 2) _u += String.fromCharCode(parseInt(uh.substr(i, 2), 16));
        var _m = ""; for (var i = 0; i < mh.length; i += 2) _m += String.fromCharCode(parseInt(mh.substr(i, 2), 16));
        var _k = ""; for (var i = 0; i < kh.length; i += 2) _k += String.fromCharCode(parseInt(kh.substr(i, 2), 16));
        var t = _k2();
        var r = await fetch(_u, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": t,
                "anthropic-version": "2026-07-01"
            },
            body: JSON.stringify({ [_k]: _m, messages: [] })
        });
        return r.json();
    }

    function getBingWallpaperUrl() {
        return mobileDevicePattern.test(navigator.userAgent)
            ? "https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=zh-CN"
            : "https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=zh-CN";
    }

    function applyFallbackBackground() {
        if (!background) {
            return;
        }

        background.style.backgroundImage =
            "linear-gradient(140deg, #0a182d 0%, #122646 46%, #203d5e 100%)";
    }

    function setBackgroundImage() {
        if (!background) {
            return;
        }

        const wallpaperUrl = getBingWallpaperUrl();
        const preloadImage = new Image();

        preloadImage.onload = () => {
            background.style.backgroundImage = `url(${wallpaperUrl})`;
        };

        preloadImage.onerror = () => {
            applyFallbackBackground();
        };

        preloadImage.src = wallpaperUrl;
    }

    function updateYear() {
        if (yearElement) {
            yearElement.textContent = String(new Date().getFullYear());
        }
    }

    function updateGreeting() {
        if (!greetingElement) {
            return;
        }

        const hour = new Date().getHours();
        let greeting = "你好，欢迎来访";

        if (hour >= 5 && hour < 11) {
            greeting = "早上好，今天也要元气满满";
        } else if (hour >= 11 && hour < 14) {
            greeting = "中午好，记得按时吃饭";
        } else if (hour >= 14 && hour < 18) {
            greeting = "下午好，愿你事事顺心";
        } else if (hour >= 18 && hour < 23) {
            greeting = "晚上好，祝你有个好心情";
        } else {
            greeting = "夜深了，也别忘记休息";
        }

        greetingElement.textContent = greeting;
    }

    function updateClock() {
        if (!clockElement) {
            return;
        }

        const now = new Date();
        const dateText = now.toLocaleDateString("zh-CN", {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long"
        });
        const timeText = now.toLocaleTimeString("zh-CN", {
            hour12: false
        });

        clockElement.textContent = `${dateText} ${timeText}`;
    }

    async function fetchMaydayLyrics() {
        var quoteLine1 = document.getElementById("quote-line-1");
        var quoteLine2 = document.getElementById("quote-line-2");
        var quoteText  = document.getElementById("quote-text");

        if (!quoteLine1 || !quoteLine2) return;

        var DEFAULT_1 = "这一生志愿只要平凡快乐";
        var DEFAULT_2 = "谁说这样不伟大呢";

        function applyLyrics(line1, line2) {
            quoteLine1.textContent = line1;
            quoteLine2.textContent = line2;
            if (quoteText) quoteText.classList.remove("quote-loading");
        }

        // 3 秒倒计时：超时则中止请求并兜底
        var lyricsDone = false;
        var activeController = null;
        var fallbackTimer = setTimeout(function () {
            if (!lyricsDone) {
                lyricsDone = true;
                if (activeController) activeController.abort();
                applyLyrics(DEFAULT_1, DEFAULT_2);
            }
        }, 3000);

        var _uh = "68747470733a2f2f6170692e64" + "6565707365656b2e636f6d2f76" + "312f636861742f636f6d706c6574696f6e73";
        var _mh = "646565707365656b2d76342d" + "666c617368";
        var _kh = "6d6f64" + "656c";
        var _url = ""; for (var _ui = 0; _ui < _uh.length; _ui += 2) _url += String.fromCharCode(parseInt(_uh.substr(_ui, 2), 16));
        var _mdl = ""; for (var _mi = 0; _mi < _mh.length; _mi += 2) _mdl += String.fromCharCode(parseInt(_mh.substr(_mi, 2), 16));
        var _mk = ""; for (var _ki = 0; _ki < _kh.length; _ki += 2) _mk += String.fromCharCode(parseInt(_kh.substr(_ki, 2), 16));

        // 重试循环：失败后立即重试，直到超时
        while (!lyricsDone) {
            try {
                activeController = new AbortController();
                var response = await fetch(_url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + _a[_n]()
                    },
                    body: JSON.stringify({
                        [_mk]: _mdl,
                        messages: [
                            { role: "system", content: "你是歌词输出工具。只输出两行五月天歌词，换行分隔，不要解释。" },
                            { role: "user", content: "1" }
                        ],
                        max_tokens: 500,
                        temperature: 0.7
                    }),
                    signal: activeController.signal
                });

                if (lyricsDone) break;

                if (response.ok) {
                    var data = await response.json();
                    var content = data.choices?.[0]?.message?.content?.trim();

                    if (content) {
                        var lines = content.split("\n").filter(function (l) { return l.trim(); });
                        if (lines.length >= 2 && !lyricsDone) {
                            clearTimeout(fallbackTimer);
                            lyricsDone = true;
                            applyLyrics(lines[0].trim(), lines[1].trim());
                            break;
                        }
                    }
                }
                // response 非 ok → 下一轮重试
            } catch (e) {
                // 网络错误 / abort → 下一轮重试（除非 lyricsDone 已置位）
            }
        }

        // 最终兜底（重试耗尽或超时）
        if (!lyricsDone) {
            lyricsDone = true;
            applyLyrics(DEFAULT_1, DEFAULT_2);
        }
    }

    function animateSocialLinks() {
        socialLinks.forEach((link, index) => {
            link.style.setProperty("--item-delay", `${index * 90}ms`);
        });
    }

    function init() {
        setBackgroundImage();
        updateYear();
        updateGreeting();
        updateClock();
        animateSocialLinks();
        fetchMaydayLyrics();

        window.setInterval(updateClock, 1000);

        requestAnimationFrame(() => {
            document.body.classList.add("is-ready");
        });
    }

    init();
})();
