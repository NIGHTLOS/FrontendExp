export const loadBaiduMap = (initCallback) => {
    if (typeof window.BMap !== "undefined") {
        initCallback();
        return;
    }
    const script = document.createElement("script");
    script.src =
        "https://api.map.baidu.com/getscript?v=3.0&ak=BJo5L2ted9g1VE7ydE8etCxaB1CxBgwH";
    script.onload = initCallback;
    script.onerror = () => console.error("Failed to load Baidu Map.");
    document.body.appendChild(script);
};
