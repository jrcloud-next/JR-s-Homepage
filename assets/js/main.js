(() => {
    "use strict";

    const background = document.getElementById("background");
    const yearElement = document.getElementById("current-year");
    const greetingElement = document.getElementById("greeting-text");
    const clockElement = document.getElementById("clock-text");
    const socialLinks = document.querySelectorAll(".social-link");

    const mobileDevicePattern = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    function getBingWallpaperUrl() {
        return mobileDevicePattern.test(navigator.userAgent)
            ? "https://bing.img.run/m.php"
            : "https://bing.img.run/1920x1080.php";
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

        window.setInterval(updateClock, 1000);

        requestAnimationFrame(() => {
            document.body.classList.add("is-ready");
        });
    }

    init();
})();
