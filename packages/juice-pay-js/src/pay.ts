const SCRIPT_SRC_URL = "https://tools.juicebox.money/pay.js";
const MODAL_SRC_URL = "https://juice-tools-embed-pay.netlify.app/";
const IFRAME_STYLE_ACTIVE =
  "z-index: 2147483647; background: rgba(0, 0, 0, 0.004); border: 0px none transparent; overflow: hidden auto; visibility: visible; margin: 0px; padding: 0px; -webkit-tap-highlight-color: transparent; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%;";
const IFRAME_STYLE_INACTIVE =
  "z-index: 2147483647; display: none; background: rgba(0, 0, 0, 0.004); border: 0px none transparent; overflow: hidden auto; visibility: visible; margin: 0px; padding: 0px; -webkit-tap-highlight-color: transparent; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%;";
const DEFAULT_OPTIONS = {
  triggerButtonText: "Pay with Juicebox",
  triggerButtonClass: "",
  triggerButtonStyle: "",
  triggerButtonSelector: "#juice-pay-button",
};

const scriptEl = document.querySelector(`script[src="${SCRIPT_SRC_URL}"]`) as
  | HTMLScriptElement
  | undefined;
const appOptions = Object.assign(DEFAULT_OPTIONS, scriptEl?.dataset);

function createIframe() {
  const iframeSrc = MODAL_SRC_URL;

  const iframe = document.createElement("iframe");

  iframe.setAttribute("style", IFRAME_STYLE_INACTIVE);
  iframe.setAttribute("src", iframeSrc);
  iframe.setAttribute("frameBorder", "0");

  return iframe;
}

function createButton(iframe: HTMLIFrameElement) {
  const button = document.createElement("button");

  button.innerText = appOptions.triggerButtonText;
  button.setAttribute("style", appOptions.triggerButtonStyle);
  button.setAttribute("class", appOptions.triggerButtonClass);

  button.addEventListener("click", function juiceboxButtonClick() {
    iframe.setAttribute("style", IFRAME_STYLE_ACTIVE);
    iframe.contentWindow?.postMessage(
      { method: "render", options: appOptions },
      "*"
    );
  });

  return button;
}

function addFrameEventListeners(iframe: HTMLIFrameElement) {
  window.addEventListener("message", (e) => {
    if (e.data.method === "close") {
      iframe.setAttribute("style", IFRAME_STYLE_INACTIVE);
    }
  });
}

function mount() {
  const iframe = createIframe();
  const button = createButton(iframe);

  addFrameEventListeners(iframe);

  const mountEl = document.querySelector(appOptions.triggerButtonSelector);
  mountEl?.replaceWith(iframe, button);
}

mount();
