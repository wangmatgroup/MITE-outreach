!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a0c9d168-af4b-4328-8e69-4cd0fb7b4ce4",e._sentryDebugIdIdentifier="sentry-dbid-a0c9d168-af4b-4328-8e69-4cd0fb7b4ce4")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5bb9d9aec4dec0b303c6e4ba36f2975e699df57b"},function(){"use strict";function e(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function t(t,...o){const l=document.createElement("template"),s=Math.random().toString(36).slice(2),i=`slot-${s}`,a=`data-event-${s}`;let r=[],c=[],d=[];const u=(t,o)=>{r.push(t),o instanceof Node||o instanceof DocumentFragment||o instanceof HTMLTemplateElement?(r.push(`<${i}></${i}>`),c.push(o)):o instanceof n?r.push(String(o)):Array.isArray(o)?o.forEach((e=>u("",e))):"object"==typeof o&&null!==o&&"type"in o&&"event"===o.type?(r.push(` ${a}`),d.push(o)):null!=o&&r.push(e(String(o)))};return t.forEach(((e,t)=>u(e,o[t]))),l.innerHTML=r.join("").trim(),l.content.querySelectorAll(i).forEach((e=>{const t=c.shift();e.parentNode.replaceChild(t,e)})),l.content.querySelectorAll(`[${a}]`).forEach((e=>{const t=d.shift();e.removeAttribute(a),e.addEventListener(t.name,t.handler)})),1===l.content.childNodes.length?l.content.firstChild:l.content}class n{constructor(e){this.value=e}toString(){return this.value}}function o(e){return new n(e)}function l(e,n={}){const l=JSON.parse(document.getElementById("icons-data").textContent).iconsUrl,s=e.split("/").join("--"),i=n.scale;let a="";if(i){if(!["2x","3x","4x","5x"].includes(i))throw new Error(`Invalid icon scale factor: ${i}`);a=`scale${i}`}const r=["icon",void 0===n.baseline||n.baseline?"baseline":"",a,n.class||""].filter(Boolean).join(" "),c=n.title||"";return t`<span class="${r}" ${c?"":o(' aria-hidden="true"')}>
    <svg ${o(c?'role="img"':'aria-hidden="true"')}>
      <use href="${l}#${s}" />
    </svg>
    ${c?t`<span class="sr-only">${c}</span>`:""}
  </span>`}class s extends HTMLElement{connectedCallback(){this.constructor.name,this.querySelector("button").addEventListener("click",this.#e)}disconnectedCallback(){this.constructor.name,this.querySelector("button").removeEventListener("click",this.#e)}#t(){const e=(e,n,o,s)=>t`
        <a href="${s}" class="btn share-${o}" target="_blank" rel="nofollow" aria-label="Share on ${e}">
          ${l(n,{class:"text-light mr-1"})}${e}
        </a>
      `,n=this.getAttribute("url"),o=decodeURIComponent(this.getAttribute("twitter-text")||""),s=decodeURIComponent(this.getAttribute("bluesky-text")||""),i=decodeURIComponent(this.getAttribute("email-subject")||""),a=decodeURIComponent(this.getAttribute("email-body")||"");return t`
      <div class="d-flex flex-wrap justify-content-center flex-column flex-md-row gap-1">
        ${e("LinkedIn","brands/linkedin","linkedin",`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(n)}`)}
        ${e("Twitter","brands/x-twitter","x-twitter",`https://twitter.com/intent/tweet/?${o?`text=${encodeURIComponent(o)}&`:""}url=${encodeURIComponent(n)}`)}
        ${e("Bluesky","brands/bluesky","bluesky",`https://bsky.app/intent/compose?text=${s?`${encodeURIComponent(s)}%20`:""}${encodeURIComponent(n)}`)}
        ${e("Facebook","brands/facebook","facebook",`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(n)}`)}
        ${e("Email","solid/envelope","email",`mailto:?${i?`subject=${encodeURIComponent(i)}&`:""}body=${a?encodeURIComponent(a):""}%0A%0A${encodeURIComponent(n)}%0A`)}
      </div>
      <div class="mt-4">${((e,n,o)=>{let s=!1;const i=t`
        <div>
          ${n?t`<label for="copyable-text-${"share"}">${n}</label>`:""}
          <div class="input-group">
            <input
              ${n?'id="copyable-text-${id}"':""}
              type="text"
              class="form-control text-truncate"
              value="${o}"
            />
            <div class="input-group-append d-print-none">
              <button
                type="button"
                class="btn btn-secondary btn-input-addon"
                title="Copy to Clipboard"
                ${"click",a=e=>{e.preventDefault();const n=i.querySelector("button");if(n.blur(),s)return;s=!0;const o=i.querySelector("input").value;navigator.clipboard&&navigator.clipboard.writeText(o),n.replaceChildren(t`${l("v4/check",{class:"mr-1 text-success"})}Copied!`),setTimeout((()=>{n.replaceChildren(t`${l("@copy",{class:"mr-1"})}Copy`),s=!1}),2e3)},{type:"event",name:"click",handler:a}}
              >
                ${l("@copy",{class:"mr-1"})}Copy
              </button>
            </div>
          </div>
        </div>
      `;var a;return i})(0,"Or copy the link:",n)}</div>
      <div class="text-center mt-4 user-select-none">
        <small> ${l("solid/heart",{class:"text-color-red"})} Happy Pythoning! </small>
      </div>
    `}#e=n=>{this.constructor.name,n.preventDefault(),function(n){const l=n.confirmButtonTitle||"Confirm",s=n.dismissButtonTitle||"Cancel",i=n.dangerous?"btn-danger":"btn-dark",a=n.confirmButtonTitle||n.dismissButtonTitle,r=a?t`<button class="col col-md-auto btn btn-secondary px-4 m-0 mb-2" data-dismiss="modal">
        ${s}
      </button>`:"",c=a?t`<button class="col col-md-auto px-4 m-0 ml-md-2 mb-2 btn ${i}">
        ${n.icon?function(t,n={}){const l=JSON.parse(document.getElementById("icons-data").textContent).iconsUrl,s=t.split("/").join("--"),i=n.scale;let a="";if(i){if(!["2x","3x","4x","5x"].includes(i))throw new Error(`Invalid icon scale factor: ${i}`);a=`scale${i}`}const r=["icon",void 0===n.baseline||n.baseline?"baseline":"",a,n.class||""].filter(Boolean).join(" "),c=n.title||"";return o(`<span class="${r}"${c?"":' aria-hidden="true"'}><svg ${c?'role="img"':'aria-hidden="true"'}><use href="${l}#${s}" /></svg>${c?`<span class="sr-only">${e(c)}</span>`:""}</span>`)}(n.icon,{class:"mr-1"}):""}${l}
      </button>`:"",d=t`
    <div class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog ${n.large?"modal-lg":"modal-md"} modal-dialog-centered" role="document">
        <div class="modal-content p-2">
          ${n.headline?t`<div class="modal-header border-0 p-3">
                <h5 class="modal-title text-wrap-pretty user-select-none">${n.headline}</h5>
                ${n.required?"":t`<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>`}
              </div>`:t`<div class="pt-3"></div>`}

          <div class="modal-body text-wrap-pretty p-3">${n.contents}</div>

          ${n.confirmButtonTitle||n.dismissButtonTitle?t`<div class="modal-footer border-0 p-3 mb-n2 flex-column flex-md-row justify-content-md-end">
                ${r} ${c}
              </div>`:""}
        </div>
      </div>
    </div>
  `;document.body.appendChild(d);const u=n.required?{backdrop:"static",keyboard:!1}:{backdrop:!0,keyboard:!0};$(d).modal(u),new Promise((e=>{$(d).on("hidden.bs.modal",(function(){$(this).remove(),e({isConfirmed:!1})})),c&&c.addEventListener("click",(()=>{$(d).modal("hide"),e({isConfirmed:!0})}))}))}({headline:"Share with …",contents:this.#t(),icon:"@share",required:!1})}}customElements.define("share-button",s)}();

