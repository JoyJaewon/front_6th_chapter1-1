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
`;async function c(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function l(){let e=await fetch(`/api/categories`);return await e.json()}const u=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-D8FlMt87.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));let d={products:[],categories:[],total:0,loading:!1,limit:20,sort:`price_asc`,page:1,hasMore:!0,search:``,category1:``,category2:``};function f(){let e=new URLSearchParams(window.location.search);return{search:e.get(`search`)||``,category1:decodeURIComponent(e.get(`category1`)||``),category2:decodeURIComponent(e.get(`category2`)||``),sort:e.get(`sort`)||`price_asc`,limit:parseInt(e.get(`limit`))||20}}function p(){let e=new URLSearchParams;d.search&&e.set(`search`,d.search),d.category1&&e.set(`category1`,d.category1),d.category2&&e.set(`category2`,d.category2),d.sort!==`price_asc`&&e.set(`sort`,d.sort),d.limit!==20&&e.set(`limit`,d.limit.toString());let t=`${window.location.pathname}${e.toString()?`?`+e.toString():``}`;window.history.replaceState({},``,t)}let m=!1;function h(){document.body.querySelector(`#root`).innerHTML=s(d)}async function g(){if(!(d.loading||!d.hasMore)){d.loading=!0,h();try{let e=await c({page:d.page+1,limit:d.limit,sort:d.sort,search:d.search,category1:d.category1,category2:d.category2});d.products=[...d.products,...e.products],d.page+=1,d.hasMore=e.products.length===d.limit,d.loading=!1,h()}catch(e){console.error(`추가 상품 로드 실패:`,e),d.loading=!1,h()}}}function _(){window.innerHeight+window.scrollY>=document.body.offsetHeight-100&&g()}function v(){m||(document.body.querySelector(`#root`).addEventListener(`keydown`,async e=>{if(e.target.id===`search-input`&&e.key===`Enter`){let t=e.target.value.trim();d.search=t,d.page=1,d.loading=!0,p(),h();let n=await c({search:t,page:1,limit:d.limit,sort:d.sort,category1:d.category1,category2:d.category2});d.products=n.products,d.total=n.pagination.total,d.hasMore=n.products.length===d.limit,d.loading=!1,h()}}),document.body.querySelector(`#root`).addEventListener(`click`,async e=>{if(e.target.dataset.category1){let t=e.target.dataset.category1;d.category1=t,d.category2=``,d.page=1,d.loading=!0,p(),h();let n=await c({category1:t,page:1,limit:d.limit,sort:d.sort,search:d.search});d.products=n.products,d.total=n.pagination.total,d.hasMore=n.products.length===d.limit,d.loading=!1,h()}if(e.target.dataset.category2){let t=e.target.dataset.category2;d.category2=t,d.page=1,d.loading=!0,p(),h();let n=await c({category1:d.category1,category2:t,page:1,limit:d.limit,sort:d.sort,search:d.search});d.products=n.products,d.total=n.pagination.total,d.hasMore=n.products.length===d.limit,d.loading=!1,h()}if(e.target.dataset.breadcrumb===`reset`){d.category1=``,d.category2=``,d.page=1,d.loading=!0,p(),h();let e=await c({page:1,limit:d.limit,sort:d.sort,search:d.search});d.products=e.products,d.total=e.pagination.total,d.hasMore=e.products.length===d.limit,d.loading=!1,h()}if(e.target.dataset.breadcrumb===`category1`){d.category2=``,d.page=1,d.loading=!0,p(),h();let e=await c({category1:d.category1,page:1,limit:d.limit,sort:d.sort,search:d.search});d.products=e.products,d.total=e.pagination.total,d.hasMore=e.products.length===d.limit,d.loading=!1,h()}}),document.body.querySelector(`#root`).addEventListener(`change`,async e=>{if(e.target.id===`limit-select`){let t=parseInt(e.target.value);d.limit=t,d.page=1,d.loading=!0,p(),h();let n=await c({limit:t,page:1,search:d.search,sort:d.sort,category1:d.category1,category2:d.category2});d.products=n.products,d.total=n.pagination.total,d.hasMore=n.products.length===t,d.loading=!1,h()}if(e.target.id===`sort-select`){let t=e.target.value;d.sort=t,d.page=1,d.loading=!0,p(),h();let n=await c({sort:t,page:1,search:d.search,limit:d.limit,category1:d.category1,category2:d.category2});d.products=n.products,d.total=n.pagination.total,d.hasMore=n.products.length===d.limit,d.loading=!1,h()}}),window.addEventListener(`scroll`,_),m=!0)}async function y(){let e=f();d={...d,...e},d.loading=!0,h();let t=await c({page:1,limit:d.limit,search:d.search,sort:d.sort,category1:d.category1,category2:d.category2});console.log(t);let n=await l();console.log(n),d.products=t.products,d.categories=n,d.total=t.pagination.total,d.page=1,d.hasMore=t.products.length===d.limit,d.loading=!1,h(),v()}u().then(y);