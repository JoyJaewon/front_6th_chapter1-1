(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i=()=>`
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
    <div class="aspect-square bg-gray-200"></div>
    <div class="p-3">
      <div class="h-4 bg-gray-200 rounded mb-2"></div>
      <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
      <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
      <div class="h-8 bg-gray-200 rounded"></div>
    </div>
  </div>
`,a=i().repeat(4),o=e=>`
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
       data-product-id="${e.productId}">
    <!-- 상품 이미지 -->
    <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
      <img src="${e.image}"
           alt="${e.title}"
           class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
           loading="lazy">
    </div>
    <!-- 상품 정보 -->
    <div class="p-3">
      <div class="cursor-pointer product-info mb-3">
        <h3 class="text-sm font-medium text-gray-900 mb-1">
          ${e.title}
        </h3>
        <p class="text-xs text-gray-500 mb-2">${e.brand||``}</p>
        <p class="text-lg font-bold text-gray-900">
          ${parseInt(e.lprice).toLocaleString()}원
        </p>
      </div>
      <!-- 장바구니 버튼 -->
      <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
             hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${e.productId}">
        장바구니 담기
      </button>
    </div>
  </div>
`,s=({products:e=[],categories:t={},total:n=0,loading:r=!1,limit:i=20,sort:s=`price_asc`,search:c=``,category1:l=``,category2:u=``})=>`
<div class="min-h-screen bg-gray-50">
  <header class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <h1 class="text-xl font-bold text-gray-900">
          <a href="/" data-link="">쇼핑몰</a>
        </h1>
        <div class="flex items-center space-x-2">
          <!-- 장바구니 아이콘 -->
          <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  <main class="max-w-md mx-auto px-4 py-4">
    <!-- 검색 및 필터 -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <!-- 검색창 -->
      <div class="mb-4">
        <div class="relative">
          <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="${c}" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>
      <!-- 필터 옵션 -->
      <div class="space-y-3">
        <!-- 카테고리 필터 -->
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">카테고리:</label>
            <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
            ${l?`<span class="text-xs text-gray-500">></span><button data-breadcrumb="category1" class="text-xs hover:text-blue-800 hover:underline">${l}</button>`:``}
            ${u?`<span class="text-xs text-gray-500">></span><span class="text-xs text-gray-700">${u}</span>`:``}
          </div>
          <!-- 1depth 카테고리 -->
          <div class="flex flex-wrap gap-2">
            ${Object.keys(t).length>0&&!r?Object.keys(t).map(e=>`
                <button data-category1="${e}" class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${l===e?`bg-blue-600 text-white border-blue-600`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  ${e}
                </button>
              `).join(``):`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`}
          </div>
          <!-- 2depth 카테고리 -->
          ${l&&t[l]&&Object.keys(t[l]).length>0?`
            <div class="flex flex-wrap gap-2">
              ${Object.keys(t[l]).map(e=>`
                <button data-category2="${e}" class="category2-filter-btn text-left px-2 py-1 text-xs rounded border transition-colors ${u===e?`bg-blue-500 text-white border-blue-500`:`bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100`}">
                  ${e}
                </button>
              `).join(``)}
            </div>
          `:``}
        </div>
        <!-- 기존 필터들 -->
        <div class="flex gap-2 items-center justify-between">
          <!-- 페이지당 상품 수 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">개수:</label>
            <select id="limit-select"
                    class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="10" ${i===10?`selected`:``}>
                10개
              </option>
              <option value="20" ${i===20?`selected`:``}>
                20개
              </option>
              <option value="50" ${i===50?`selected`:``}>
                50개
              </option>
              <option value="100" ${i===100?`selected`:``}>
                100개
              </option>
            </select>
          </div>
          <!-- 정렬 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">정렬:</label>
            <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                         focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="price_asc" ${s===`price_asc`?`selected`:``}>가격 낮은순</option>
              <option value="price_desc" ${s===`price_desc`?`selected`:``}>가격 높은순</option>
              <option value="name_asc" ${s===`name_asc`?`selected`:``}>이름순</option>
              <option value="name_desc" ${s===`name_desc`?`selected`:``}>이름 역순</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <!-- 상품 목록 -->
    <div class="mb-6">
    ${r?``:`
        <div class="mb-4 text-sm text-gray-600">
            총 <span class="font-medium text-gray-900">${n}개</span>의 상품
        </div>
        `}
      <div>
        <!-- 상품 그리드 -->
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
            ${r?a:e.map(e=>o(e)).join(``)}
        </div>
        ${r?`
          <div class="text-center py-4">
            <div class="inline-flex items-center">
              <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
            </div>
          </div>
        `:``}
      </div>
    </div>
  </main>
  <footer class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto py-8 text-center text-gray-500">
      <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
    </div>
  </footer>
</div>
`;async function c(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function l(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function u(){let e=await fetch(`/api/categories`);return await e.json()}var d=class{constructor(){this.storageKey=`shopping_cart`,this.cart=this.loadFromStorage(),this.isModalOpen=!1,this.toastTimeout=null}loadFromStorage(){try{let e=localStorage.getItem(this.storageKey);return e?JSON.parse(e):{}}catch(e){return console.error(`장바구니 데이터 로드 실패:`,e),{}}}saveToStorage(){try{localStorage.setItem(this.storageKey,JSON.stringify(this.cart))}catch(e){console.error(`장바구니 데이터 저장 실패:`,e)}}addItem(e,t=1){let n=e.id.toString();this.cart[n]?this.cart[n].quantity+=t:this.cart[n]={id:e.id,name:e.name,price:e.price,image:e.image,brand:e.brand||``,quantity:t},this.saveToStorage(),this.updateCartIcon(),this.showToast(`장바구니에 추가되었습니다`)}removeItem(e){delete this.cart[e.toString()],this.saveToStorage(),this.updateCartIcon()}updateQuantity(e,t){let n=e.toString();this.cart[n]&&t>0&&(this.cart[n].quantity=t,this.saveToStorage(),this.updateCartIcon())}clearCart(){this.cart={},this.saveToStorage(),this.updateCartIcon()}removeSelectedItems(e){e.forEach(e=>{delete this.cart[e.toString()]}),this.saveToStorage(),this.updateCartIcon(),this.showToast(`선택된 상품들이 삭제되었습니다`)}updateCartIcon(){let e=document.querySelector(`#cart-icon-btn`);if(!e)return;let t=this.getItemCount(),n=e.querySelector(`span`);t>0?(n||(n=document.createElement(`span`),n.className=`absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`,e.appendChild(n)),n.textContent=t):n&&n.remove()}getItemCount(){return Object.keys(this.cart).length}getTotalQuantity(){return Object.values(this.cart).reduce((e,t)=>e+t.quantity,0)}getTotalPrice(){return Object.values(this.cart).reduce((e,t)=>e+t.price*t.quantity,0)}getSelectedTotalPrice(e){return e.reduce((e,t)=>{let n=this.cart[t.toString()];return n?e+n.price*n.quantity:e},0)}showToast(e,t=`success`){this.hideToast();let n=document.createElement(`div`);n.className=`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm ${t===`success`?`bg-green-600 text-white`:t===`info`?`bg-blue-600 text-white`:`bg-red-600 text-white`}`,n.innerHTML=`
      <div class="flex-shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          ${t===`success`?`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>`:t===`info`?`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`:`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`}
        </svg>
      </div>
      <p class="text-sm font-medium">${e}</p>
      <button class="toast-close-btn flex-shrink-0 ml-2 hover:text-gray-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    `,document.body.appendChild(n),n.querySelector(`.toast-close-btn`).addEventListener(`click`,()=>{this.hideToast()}),this.toastTimeout=setTimeout(()=>{this.hideToast()},3e3)}hideToast(){this.toastTimeout&&(clearTimeout(this.toastTimeout),this.toastTimeout=null);let e=document.querySelector(`.fixed.top-4`);e&&e.remove()}openModal(){if(this.isModalOpen)return;this.isModalOpen=!0;let e=this.generateModalHtml(),t=document.createElement(`div`);t.className=`fixed inset-0 z-50 overflow-y-auto cart-modal`,t.innerHTML=`
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity cart-modal-overlay"></div>
      ${e}
    `,document.body.appendChild(t),this.setupModalEventListeners(),document.addEventListener(`keydown`,this.handleEscKey)}closeModal(){if(!this.isModalOpen)return;this.isModalOpen=!1;let e=document.querySelector(`.cart-modal`);e&&e.remove(),document.removeEventListener(`keydown`,this.handleEscKey)}handleEscKey=e=>{e.key===`Escape`&&this.closeModal()};generateModalHtml(){let e=Object.values(this.cart),t=this.getTotalPrice();if(e.length===0)return`
        <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
          <div class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
            <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h2 class="text-lg font-bold text-gray-900 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                </svg>
                장바구니
              </h2>
              <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div class="flex flex-col max-h-[calc(90vh-120px)]">
              <div class="flex-1 flex items-center justify-center p-8">
                <div class="text-center">
                  <div class="text-gray-400 mb-4">
                    <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                    </svg>
                  </div>
                  <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
                  <p class="text-gray-600">원하는 상품을 담아보세요!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;let n=e.map(e=>`
      <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${e.id}">
        <label class="flex items-center mr-3">
          <input type="checkbox" class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" data-product-id="${e.id}">
        </label>
        <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
          <img src="${e.image}" alt="${e.name}" class="w-full h-full object-cover cursor-pointer cart-item-image" data-product-id="${e.id}">
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title" data-product-id="${e.id}">
            ${e.name}
          </h4>
          <p class="text-sm text-gray-600 mt-1">${e.price.toLocaleString()}원</p>
          <div class="flex items-center mt-2">
            <button class="quantity-decrease-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.id}">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
              </svg>
            </button>
            <input type="number" value="${e.quantity}" min="1" class="quantity-input w-12 h-7 text-center text-sm border-t border-b border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" disabled data-product-id="${e.id}">
            <button class="quantity-increase-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.id}">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="text-right ml-3">
          <p class="text-sm font-medium text-gray-900">${(e.price*e.quantity).toLocaleString()}원</p>
          <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="${e.id}">삭제</button>
        </div>
      </div>
    `).join(``);return`
      <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
        <div class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
          <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 class="text-lg font-bold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
              </svg>
              장바구니
              <span class="text-sm font-normal text-gray-600 ml-1">(${e.length})</span>
            </h2>
            <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="flex flex-col max-h-[calc(90vh-120px)]">
            <div class="p-4 border-b border-gray-200 bg-gray-50">
              <label class="flex items-center text-sm text-gray-700">
                <input type="checkbox" id="cart-modal-select-all-checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2">
                전체선택 (${e.length}개)
              </label>
            </div>
            <div class="flex-1 overflow-y-auto">
              <div class="p-4 space-y-4">
                ${n}
              </div>
            </div>
          </div>
          <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
            <div id="selected-info" class="hidden flex justify-between items-center mb-3 text-sm">
              <span class="text-gray-600">선택한 상품 (<span id="selected-count">0</span>개)</span>
              <span class="font-medium"><span id="selected-price">0</span>원</span>
            </div>
            <div class="flex justify-between items-center mb-4">
              <span class="text-lg font-bold text-gray-900">총 금액</span>
              <span class="text-xl font-bold text-blue-600">${t.toLocaleString()}원</span>
            </div>
            <div class="space-y-2">
              <button id="cart-modal-remove-selected-btn" class="hidden w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors text-sm">
                선택한 상품 삭제 (<span id="selected-count-btn">0</span>개)
              </button>
              <div class="flex gap-2">
                <button id="cart-modal-clear-cart-btn" class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors text-sm">
                  전체 비우기
                </button>
                <button id="cart-modal-checkout-btn" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm">
                  구매하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}setupModalEventListeners(){let e=document.querySelector(`.cart-modal`);if(!e)return;e.querySelector(`#cart-modal-close-btn`)?.addEventListener(`click`,()=>{this.closeModal()}),e.querySelector(`.cart-modal-overlay`)?.addEventListener(`click`,()=>{this.closeModal()});let t=e.querySelector(`#cart-modal-select-all-checkbox`);t?.addEventListener(`change`,e=>{this.handleSelectAll(e.target.checked)}),e.querySelectorAll(`.cart-item-checkbox`).forEach(e=>{e.addEventListener(`change`,()=>{this.updateSelectedInfo()})}),e.querySelectorAll(`.quantity-decrease-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.target.closest(`button`).dataset.productId;this.decreaseQuantity(t)})}),e.querySelectorAll(`.quantity-increase-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.target.closest(`button`).dataset.productId;this.increaseQuantity(t)})}),e.querySelectorAll(`.cart-item-remove-btn`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.target.dataset.productId;this.removeItem(t),this.refreshModal()})}),e.querySelector(`#cart-modal-remove-selected-btn`)?.addEventListener(`click`,()=>{this.removeSelectedItems(this.getSelectedProductIds()),this.refreshModal()}),e.querySelector(`#cart-modal-clear-cart-btn`)?.addEventListener(`click`,()=>{this.clearCart(),this.refreshModal()}),e.querySelector(`#cart-modal-checkout-btn`)?.addEventListener(`click`,()=>{alert(`구매 기능은 아직 구현되지 않았습니다.`)})}handleSelectAll(e){let t=document.querySelector(`.cart-modal`);t&&(t.querySelectorAll(`.cart-item-checkbox`).forEach(t=>{t.checked=e}),this.updateSelectedInfo())}updateSelectedInfo(){let e=this.getSelectedProductIds(),t=e.length,n=this.getSelectedTotalPrice(e),r=document.querySelector(`#selected-info`),i=document.querySelector(`#cart-modal-remove-selected-btn`),a=document.querySelector(`#cart-modal-select-all-checkbox`);t>0?(r?.classList.remove(`hidden`),i?.classList.remove(`hidden`),document.querySelector(`#selected-count`).textContent=t,document.querySelector(`#selected-price`).textContent=n.toLocaleString(),document.querySelector(`#selected-count-btn`).textContent=t):(r?.classList.add(`hidden`),i?.classList.add(`hidden`));let o=Object.keys(this.cart).length;a&&(a.checked=t===o&&o>0,a.indeterminate=t>0&&t<o)}getSelectedProductIds(){let e=document.querySelector(`.cart-modal`);if(!e)return[];let t=e.querySelectorAll(`.cart-item-checkbox:checked`);return Array.from(t).map(e=>e.dataset.productId)}increaseQuantity(e){let t=this.cart[e.toString()];t&&(this.updateQuantity(e,t.quantity+1),this.refreshModal())}decreaseQuantity(e){let t=this.cart[e.toString()];t&&t.quantity>1&&(this.updateQuantity(e,t.quantity-1),this.refreshModal())}refreshModal(){if(!this.isModalOpen)return;let e=document.querySelector(`.cart-modal`);e&&e.remove(),this.isModalOpen=!1,this.openModal()}init(){this.updateCartIcon()}};const f=new d;var p=class{constructor(e){this.productId=e,this.product=null,this.relatedProducts=[],this.loading=!0,this.quantity=1}async loadProduct(){try{this.loading=!0,this.product=await l(this.productId);let e=await c({category1:this.product.category1,limit:20,page:1});this.relatedProducts=e.products.filter(e=>e.productId.toString()!==this.productId.toString()),this.loading=!1}catch(e){console.error(`상품 정보 로드 실패:`,e),this.loading=!1}}generateHtml(){if(this.loading)return`
        <div class="min-h-screen bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 py-8">
            <div class="flex items-center justify-center h-64">
              <div class="text-center">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p class="text-gray-600">상품 정보를 불러오는 중...</p>
              </div>
            </div>
          </div>
        </div>
      `;if(!this.product)return`
        <div class="min-h-screen bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 py-8">
            <div class="text-center">
              <h1 class="text-2xl font-bold text-gray-900 mb-4">상품을 찾을 수 없습니다</h1>
              <button onclick="history.back()" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                뒤로가기
              </button>
            </div>
          </div>
        </div>
      `;let e=this.relatedProducts.map(e=>`
      <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
        <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
          <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy">
        </div>
        <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
        <p class="text-sm font-bold text-blue-600">${parseInt(e.lprice).toLocaleString()}원</p>
      </div>
    `).join(``);return`
      <div class="min-h-screen bg-gray-50">
        <header class="bg-white shadow-sm sticky top-0 z-40">
          <div class="max-w-md mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
              </div>
              <div class="flex items-center space-x-2">
                <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        <main class="max-w-md mx-auto px-4 py-4">
          <!-- 브레드크럼 -->
          <nav class="mb-4">
            <div class="flex items-center space-x-2 text-sm text-gray-600">
              <button id="breadcrumb-home" class="hover:text-blue-600 transition-colors">홈</button>
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span class="text-gray-900">${this.product.category1}</span>
            </div>
          </nav>
          <!-- 상품 상세 정보 -->
          <div class="bg-white rounded-lg shadow-sm mb-6">
            <!-- 상품 이미지 -->
            <div class="p-4">
              <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img src="${this.product.image}" alt="${this.product.title}" class="w-full h-full object-cover product-detail-image">
              </div>
              <!-- 상품 정보 -->
              <div>
                <p class="text-sm text-gray-600 mb-1">${this.product.brand||``}</p>
                <h1 class="text-xl font-bold text-gray-900 mb-3">${this.product.title}</h1>
                <!-- 가격 -->
                <div class="mb-4">
                  <span class="text-2xl font-bold text-blue-600">${parseInt(this.product.lprice).toLocaleString()}원</span>
                </div>
                <!-- 설명 -->
                <div class="text-sm text-gray-700 leading-relaxed mb-6">
                  ${this.product.title}에 대한 상세 설명입니다. 브랜드의 우수한 품질을 자랑하는 상품으로, 고객 만족도가 높은 제품입니다.
                </div>
              </div>
            </div>
            <!-- 수량 선택 및 액션 -->
            <div class="border-t border-gray-200 p-4">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-medium text-gray-900">수량</span>
                <div class="flex items-center">
                  <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                     rounded-l-md bg-gray-50 hover:bg-gray-100">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                    </svg>
                  </button>
                  <input type="number" id="quantity-input" value="${this.quantity}" min="1" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
                    focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                     rounded-r-md bg-gray-50 hover:bg-gray-100">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <!-- 액션 버튼 -->
              <button id="add-to-cart-btn" data-product-id="${this.product.productId}" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
                   hover:bg-blue-700 transition-colors font-medium">
                장바구니 담기
              </button>
            </div>
          </div>
          <!-- 관련 상품 -->
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-4 border-b border-gray-200">
              <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
              <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-2 gap-3 responsive-grid">
                ${e}
              </div>
            </div>
          </div>
        </main>
        <footer class="bg-white shadow-sm mt-8">
          <div class="max-w-md mx-auto py-8 text-center text-gray-500">
            <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
          </div>
        </footer>
      </div>
    `}setupEventListeners(){let e=document.querySelector(`#quantity-increase`);e&&e.addEventListener(`click`,()=>{this.quantity++,this.updateQuantityDisplay()});let t=document.querySelector(`#quantity-decrease`);t&&t.addEventListener(`click`,()=>{this.quantity>1&&(this.quantity--,this.updateQuantityDisplay())});let n=document.querySelector(`#quantity-input`);n&&n.addEventListener(`change`,e=>{let t=parseInt(e.target.value);t>=1&&(this.quantity=t),this.updateQuantityDisplay()});let r=document.querySelector(`#add-to-cart-btn`);r&&r.addEventListener(`click`,()=>{let e={id:this.product.productId,name:this.product.title,price:parseInt(this.product.lprice),image:this.product.image,brand:this.product.brand||``};f.addItem(e,this.quantity)});let i=document.querySelectorAll(`.related-product-card`);i.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.productId;t&&(window.history.pushState({},``,`/product/${t}`),window.dispatchEvent(new Event(`popstate`)))})});let a=document.querySelector(`#breadcrumb-home`);a&&a.addEventListener(`click`,()=>{window.history.pushState({},``,`/`),window.dispatchEvent(new Event(`popstate`))});let o=document.querySelector(`#cart-icon-btn`);o&&o.addEventListener(`click`,()=>{f.openModal()})}updateQuantityDisplay(){let e=document.querySelector(`#quantity-input`);e&&(e.value=this.quantity)}async render(){await this.loadProduct();let e=this.generateHtml();document.querySelector(`#root`).innerHTML=e,!this.loading&&this.product&&(this.setupEventListeners(),f.updateCartIcon())}};const m=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-D8FlMt87.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));let h={products:[],categories:[],total:0,loading:!1,limit:20,sort:`price_asc`,page:1,hasMore:!0,search:``,category1:``,category2:``};function g(){let e=new URLSearchParams(window.location.search);return{search:e.get(`search`)||``,category1:decodeURIComponent(e.get(`category1`)||``),category2:decodeURIComponent(e.get(`category2`)||``),sort:e.get(`sort`)||`price_asc`,limit:parseInt(e.get(`limit`))||20}}function _(){let e=new URLSearchParams;h.search&&e.set(`search`,h.search),h.category1&&e.set(`category1`,h.category1),h.category2&&e.set(`category2`,h.category2),h.sort!==`price_asc`&&e.set(`sort`,h.sort),e.set(`limit`,h.limit.toString());let t=`${window.location.pathname}${e.toString()?`?`+e.toString():``}`;window.history.replaceState({},``,t)}let v=!1,y=null;function b(){let e=window.location.pathname,t=e.match(/^\/product\/(\d+)$/);return t?{type:`product`,productId:t[1]}:e===`/`||e===``?{type:`home`}:{type:`404`}}async function x(){let e=b();e.type===`product`?(y=new p(e.productId),await y.render()):e.type===`home`?(y=null,await S()):document.querySelector(`#root`).innerHTML=`
      <main class="max-w-md mx-auto px-4 py-4">
        <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
          <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-4">
            <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="#4285f4" text-anchor="middle">404</text>
            <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
          </svg>
          <a href="/" class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
        </div>
      </main>
    `}async function S(){let e=g();h={...h,...e},h.loading=!0,C();let t=await c({page:1,limit:h.limit,search:h.search,sort:h.sort,category1:h.category1,category2:h.category2}),n=await u();h.products=t.products,h.categories=n,h.total=t.pagination.total,h.page=1,h.hasMore=t.products.length===h.limit,h.loading=!1,C(),E(),f.init()}function C(){document.body.querySelector(`#root`).innerHTML=s(h)}async function w(){if(!(h.loading||!h.hasMore)){h.loading=!0,C();try{let e=await c({page:h.page+1,limit:h.limit,sort:h.sort,search:h.search,category1:h.category1,category2:h.category2});h.products=[...h.products,...e.products],h.page+=1,h.hasMore=e.products.length===h.limit,h.loading=!1,C()}catch(e){console.error(`추가 상품 로드 실패:`,e),h.loading=!1,C()}}}function T(){window.innerHeight+window.scrollY>=document.body.offsetHeight-100&&w()}function E(){v||(document.body.querySelector(`#root`).addEventListener(`keydown`,async e=>{if(e.target.id===`search-input`&&e.key===`Enter`){let t=e.target.value.trim();h.search=t,h.page=1,h.loading=!0,_(),C();let n=await c({search:t,page:1,limit:h.limit,sort:h.sort,category1:h.category1,category2:h.category2});h.products=n.products,h.total=n.pagination.total,h.hasMore=n.products.length===h.limit,h.loading=!1,C()}}),document.body.querySelector(`#root`).addEventListener(`click`,async e=>{if(e.target.matches(`.product-image img`)||e.target.closest(`.product-image`)){let t=e.target.closest(`.product-card`);if(t){let e=t.dataset.productId;if(e){window.history.pushState({},``,`/product/${e}`),await x();return}}}if(e.target.closest(`#cart-icon-btn`)){f.openModal();return}if(e.target.classList.contains(`add-to-cart-btn`)){let t=e.target.dataset.productId,n=h.products.find(e=>e.productId.toString()===t);if(n){let e={id:n.productId,name:n.title,price:parseInt(n.lprice),image:n.image,brand:n.brand||``};f.addItem(e)}return}if(e.target.dataset.category1){let t=e.target.dataset.category1;h.category1=t,h.category2=``,h.page=1,h.loading=!0,_(),C();let n=await c({category1:t,page:1,limit:h.limit,sort:h.sort,search:h.search});h.products=n.products,h.total=n.pagination.total,h.hasMore=n.products.length===h.limit,h.loading=!1,C()}if(e.target.dataset.category2){let t=e.target.dataset.category2;h.category2=t,h.page=1,h.loading=!0,_(),C();let n=await c({category1:h.category1,category2:t,page:1,limit:h.limit,sort:h.sort,search:h.search});h.products=n.products,h.total=n.pagination.total,h.hasMore=n.products.length===h.limit,h.loading=!1,C()}if(e.target.dataset.breadcrumb===`reset`){h.category1=``,h.category2=``,h.page=1,h.loading=!0,_(),C();let e=await c({page:1,limit:h.limit,sort:h.sort,search:h.search});h.products=e.products,h.total=e.pagination.total,h.hasMore=e.products.length===h.limit,h.loading=!1,C()}if(e.target.dataset.breadcrumb===`category1`){h.category2=``,h.page=1,h.loading=!0,_(),C();let e=await c({category1:h.category1,page:1,limit:h.limit,sort:h.sort,search:h.search});h.products=e.products,h.total=e.pagination.total,h.hasMore=e.products.length===h.limit,h.loading=!1,C()}}),document.body.querySelector(`#root`).addEventListener(`change`,async e=>{if(e.target.id===`limit-select`){let t=parseInt(e.target.value);h.limit=t,h.page=1,h.loading=!0,_(),C();let n=await c({limit:t,page:1,search:h.search,sort:h.sort,category1:h.category1,category2:h.category2});h.products=n.products,h.total=n.pagination.total,h.hasMore=n.products.length===t,h.loading=!1,C()}if(e.target.id===`sort-select`){let t=e.target.value;h.sort=t,h.page=1,h.loading=!0,_(),C();let n=await c({sort:t,page:1,search:h.search,limit:h.limit,category1:h.category1,category2:h.category2});h.products=n.products,h.total=n.pagination.total,h.hasMore=n.products.length===h.limit,h.loading=!1,C()}}),window.addEventListener(`scroll`,T),v=!0)}async function D(){window.addEventListener(`popstate`,x),await x()}m().then(D);