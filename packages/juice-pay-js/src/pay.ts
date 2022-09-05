// const SRC_URL = "../../../public/dist/pay.js";
const SRC_URL = "https://tools.juicebox.money/pay.js";

const scriptEl = document.querySelector(`script[src="${SRC_URL}"]`) as
  | HTMLScriptElement
  | undefined;
const options = Object.assign({}, scriptEl?.dataset);

const IFRAME_STYLE_ACTIVE =
  "z-index: 2147483647; background: rgba(0, 0, 0, 0.004); border: 0px none transparent; overflow: hidden auto; visibility: visible; margin: 0px; padding: 0px; -webkit-tap-highlight-color: transparent; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%;";
const IFRAME_STYLE_INACTIVE =
  "z-index: 2147483647; display: none; background: rgba(0, 0, 0, 0.004); border: 0px none transparent; overflow: hidden auto; visibility: visible; margin: 0px; padding: 0px; -webkit-tap-highlight-color: transparent; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%;";

function createIframe() {
  const iframeSrc = "https://juice-tools-embed-pay.netlify.app/";
  // const iframeSrc = "http://localhost:3000";

  const iframe = document.createElement("iframe");

  iframe.setAttribute("style", IFRAME_STYLE_INACTIVE);
  iframe.setAttribute("src", iframeSrc);
  iframe.setAttribute("frameBorder", "0");

  return iframe;
}

function createButton(iframe: HTMLIFrameElement) {
  const button = document.createElement("button");
  button.innerText = "Pay with Juicebox";

  button.addEventListener("click", function juiceboxButtonClick() {
    iframe.setAttribute("style", IFRAME_STYLE_ACTIVE);
    iframe.contentWindow?.postMessage({ method: "render", options }, "*");
  });

  return button;
}

function addFrameEventListeners(iframe: HTMLIFrameElement) {
  window.addEventListener("message", (e) => {
    console.log(e.data);
    if (e.data.method === "close") {
      iframe.setAttribute("style", IFRAME_STYLE_INACTIVE);
    }
  });
}

function mount() {
  const iframe = createIframe();
  const button = createButton(iframe);

  addFrameEventListeners(iframe);

  const mountEl = document.getElementById("juice-pay-button");
  mountEl?.replaceWith(iframe, button);
}

mount();
