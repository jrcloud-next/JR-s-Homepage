(() => {
    "use strict";

    const background = document.getElementById("background");
    const mainCard = document.getElementById("main-card");
    const yearElement = document.getElementById("current-year");
    const greetingElement = document.getElementById("greeting-text");
    const dateElement = document.getElementById("date-text");
    const clockElement = document.getElementById("clock-text");
    const quoteRefreshBtn = document.getElementById("quote-refresh");
    const wallpaperToggleBtn = document.getElementById("wallpaper-toggle");
    const wallpaperRestoreBtn = document.getElementById("wallpaper-restore");
    const socialLinks = document.querySelectorAll(".social-link");

    const mobileDevicePattern = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    const FALLBACK_LYRICS = [
        ["这一生志愿只要平凡快乐", "谁说这样不伟大呢"],
        ["我和我最后的倔强", "握紧双手绝对不放"],
        ["最美的不是下雨天", "是曾与你躲过雨的屋檐"],
        ["风筝有风海豚有海", "我存在在我的存在"],
        ["天青色等烟雨", "而我在等你"]
    ];
    let fallbackIndex = 0;
    let isFetchingLyrics = false;

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
        background.classList.add("is-loaded");
    }

    function setBackgroundImage() {
        if (!background) {
            return;
        }

        const wallpaperUrl = getBingWallpaperUrl();
        const preloadImage = new Image();

        preloadImage.onload = () => {
            background.style.backgroundImage = `url("${wallpaperUrl}")`;
            background.classList.add("is-loaded");
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

        if (dateElement) {
            dateElement.textContent = dateText;
            if (clockElement) {
                clockElement.textContent = timeText;
                clockElement.setAttribute("datetime", now.toISOString());
            }
        } else if (clockElement) {
            clockElement.textContent = `${dateText} ${timeText}`;
        }
    }

    async function fetchMaydayLyrics(isManualRefresh = false) {
        if (isFetchingLyrics) return;

        var quoteLine1 = document.getElementById("quote-line-1");
        var quoteLine2 = document.getElementById("quote-line-2");
        var quoteText = document.getElementById("quote-text");

        if (!quoteLine1 || !quoteLine2) return;

        isFetchingLyrics = true;
        var previousLine = quoteLine1.textContent.trim();

        if (isManualRefresh) {
            fallbackIndex = (fallbackIndex + 1) % FALLBACK_LYRICS.length;
            if (quoteRefreshBtn) quoteRefreshBtn.classList.add("is-spinning");
            if (quoteText) quoteText.classList.add("quote-loading");
            quoteLine1.textContent = "";
            quoteLine2.textContent = "";
        }

        var defaultPair = FALLBACK_LYRICS[fallbackIndex];

        function applyLyrics(line1, line2) {
            quoteLine1.textContent = line1;
            quoteLine2.textContent = line2;
            if (quoteText) quoteText.classList.remove("quote-loading");
            if (quoteRefreshBtn) quoteRefreshBtn.classList.remove("is-spinning");
            isFetchingLyrics = false;
        }

        // 3 秒倒计时：超时则中止请求并兜底
        var lyricsDone = false;
        var activeController = null;
        var fallbackTimer = setTimeout(function () {
            if (!lyricsDone) {
                lyricsDone = true;
                if (activeController) activeController.abort();
                applyLyrics(defaultPair[0], defaultPair[1]);
            }
        }, 3000);

        var _uh = "68747470733a2f2f6170692e64" + "6565707365656b2e636f6d2f76" + "312f636861742f636f6d706c6574696f6e73";
        var _mh = "646565707365656b2d" + "666c617368";
        var _kh = "6d6f64" + "656c";
        var _url = ""; for (var _ui = 0; _ui < _uh.length; _ui += 2) _url += String.fromCharCode(parseInt(_uh.substr(_ui, 2), 16));
        var _mdl = ""; for (var _mi = 0; _mi < _mh.length; _mi += 2) _mdl += String.fromCharCode(parseInt(_mh.substr(_mi, 2), 16));
        var _mk = ""; for (var _ki = 0; _ki < _kh.length; _ki += 2) _mk += String.fromCharCode(parseInt(_kh.substr(_ki, 2), 16));

        var userPrompt = isManualRefresh && previousLine
            ? "换一首，不要出现：" + previousLine
            : "1";

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
                        reasoning_effort: "none",
                        messages: [
                            { role: "system", content: "只输出五月天或周杰伦同首歌连续两句歌词正文，一句一行，不加标题、歌名、歌手信息或解释。" },
                            { role: "user", content: userPrompt }
                        ],
                        max_tokens: 500,
                        temperature: isManualRefresh ? 0.85 : 0.7
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
            } catch (e) {
                // 网络错误或中止时等待片刻再重试
            }

            if (!lyricsDone) {
                await new Promise(function (resolve) { setTimeout(resolve, 250); });
            }
        }

        if (!lyricsDone) {
            lyricsDone = true;
            applyLyrics(defaultPair[0], defaultPair[1]);
        }
    }

    function animateSocialLinks() {
        socialLinks.forEach((link, index) => {
            link.style.setProperty("--item-delay", `${120 + index * 75}ms`);
            link.addEventListener("animationend", () => {
                link.classList.add("is-entered");
            }, { once: true });
        });
    }

    function setupInteractiveSpotlight() {
        if (!mainCard || !window.matchMedia("(hover: hover)").matches) {
            return;
        }

        let rafId = 0;
        mainCard.addEventListener("pointermove", (event) => {
            if (rafId) return;
            const clientX = event.clientX;
            const clientY = event.clientY;
            rafId = requestAnimationFrame(() => {
                const rect = mainCard.getBoundingClientRect();
                mainCard.style.setProperty("--mx", `${(clientX - rect.left).toFixed(1)}px`);
                mainCard.style.setProperty("--my", `${(clientY - rect.top).toFixed(1)}px`);
                rafId = 0;
            });
        }, { passive: true });
    }

    function setWallpaperPeek(active) {
        document.body.classList.toggle("wallpaper-peek", active);
        if (wallpaperToggleBtn) {
            wallpaperToggleBtn.setAttribute("aria-pressed", String(active));
        }
    }

    function setupControls() {
        if (quoteRefreshBtn) {
            quoteRefreshBtn.addEventListener("click", () => {
                fetchMaydayLyrics(true);
            });
        }

        if (wallpaperToggleBtn) {
            wallpaperToggleBtn.addEventListener("click", () => {
                const next = !document.body.classList.contains("wallpaper-peek");
                setWallpaperPeek(next);
            });
        }

        if (wallpaperRestoreBtn) {
            wallpaperRestoreBtn.addEventListener("click", () => {
                setWallpaperPeek(false);
            });
        }

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && document.body.classList.contains("wallpaper-peek")) {
                setWallpaperPeek(false);
            }
        });
    }

    function init() {
        setBackgroundImage();
        updateYear();
        updateGreeting();
        updateClock();
        animateSocialLinks();
        setupInteractiveSpotlight();
        setupControls();
        fetchMaydayLyrics(false);

        window.setInterval(updateClock, 1000);
        window.setInterval(updateGreeting, 60000);

        requestAnimationFrame(() => {
            document.body.classList.add("is-ready");
        });
    }

    init();
})();
