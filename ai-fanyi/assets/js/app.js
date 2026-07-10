const _s = _b("8ColtoLfvvnslsp9uMdk9g==");
const _s2 = _b("DA/qzhLqgiyFjYx3RMEcDA==");
const _v = _b("9BgCDIujSnxPW/+r");
const _v2 = _b("GhtKYDAUGsoruZp0");
const _t = _b("Om0G9YpF4yfd1nV34OJg3w==");
const _t2 = _b("RJyCQQp63NRMxPsbpRDZZA==");
const _ec = "4WzFLiw3Ud5mEgad0WWIVcjuqFiODTN9dMrvHexc47AHm8znelUlFPpCcRcEZ0dWAN2PAOY2JVlYTj9cOoLXLdKwu+V1kwcl+Nd2poSLgllxUd6WnEonZYzc0sOtG6UK41ohesRyaSFpjq/xrRAiNUeWcPawH/avo+LTb60+";
const _ec2 = "9n1pGcYVZEyv/6t/lL2ze0SSGXKLWE5aJyoZzoPtZdGV4sFF95NwebMF9BV0DhZZHxDnomRWbfACh7V7sIftFQ==";
const _ec3 = "UrquXczbIim7BMdrQlvxdmO2pFcgSnKMD1eqOkrbxiKVyEKec9EQyonYc7gvT57NibrPxoIVSSUoMaGPNCHm9ANp07ZOexoC";
const _ec4 = "4vk10yLlkmeNIHZ/zZG1WH3M0c6IO+WWe4xBj8ER3vpUs8sn9UWWw60zjAD1ch84xWe7Zofdn73P7WyWnxP+cg==";

const _ph = "38ca07ae332df8bf381767e301e110f0112dccbf6b8a00affd63fd5dae9c17c4";
const _ph2 = "ef50991e558bbc97d2c219ec6035565ffb95d92a067e97d80c07a4a36da81f48";

var _k0 = function () {
    var h = "736b2d376232633464386531" + "663061333935383437353661" + "3162326333643465356636";
    var r = "";
    for (var i = 0; i < h.length; i += 2) r += String.fromCharCode(parseInt(h.substr(i, 2), 16));
    return r;
};
var _k1 = function () {
    var h = "736b2d653163656239333935" + "666164393163366564363439" + "3834336462393964383230";
    var r = "";
    for (var i = 0; i < h.length; i += 2) r += String.fromCharCode(parseInt(h.substr(i, 2), 16));
    return r;
};
var _k2 = function () {
    var h = "736b2d623436643334623562" + "396537636365653064616339" + "6561623333666563326431";
    var r = "";
    for (var i = 0; i < h.length; i += 2) r += String.fromCharCode(parseInt(h.substr(i, 2), 16));
    return r;
};
var _k3 = function () {
    var h = "736b2d343932616135666432" + "333464633162313635313239" + "3136653232666664343861";
    var r = "";
    for (var i = 0; i < h.length; i += 2) r += String.fromCharCode(parseInt(h.substr(i, 2), 16));
    return r;
};
var _k4 = function () {
    var h = "736b2d366134653031353737" + "643838376439633533363730" + "3864373265653365326466";
    var r = "";
    for (var i = 0; i < h.length; i += 2) r += String.fromCharCode(parseInt(h.substr(i, 2), 16));
    return r;
};

var _a = [_k0, _k1, _k2, _k3, _k4];

const _xc = _b("m/ypr4n0c8MPRbEMDV74BeDLr1M0XCLk5OLOIENdx3XxVBlwg1ta8YMCdfuBq5z4ZD8Nu0/awqsQoiwuCLkFNJv+yXuROjcl6kjF65mTQJQvv3GvHINvoT7bym58zSOu55IE9vXWWuFqi8eA2H0Sc8L+enJYfPBK7wm8PCKJ");
const _xc2 = "hdsgaE+h5Ew9sitJO08GJmBXlFWv11ZC6gI43EEvvKZhgzojkbtp6sd6cKak9jQb2c2/cYnYvdI=";
const _xc3 = "c6lHhJ6edTvh9oNlcPWx9gQ3+AJ79ThYVWKiWi+J9mgLl9NAryJYqxl94B0QlMvkfqNig2OcNMw=";

const _skc = 'ai_fanyi_v1';
const STORAGE_KEY_HISTORY = 'ai_fanyi_history';












let _cfg = null;
let abortController = null;

// ==================== PURE JS SHA-256 ====================
function sha256Pure(message) {
  function rotr(x, n) { return (x >>> n) | (x << (32 - n)); }
  function ch(x, y, z) { return (x & y) ^ (~x & z); }
  function maj(x, y, z) { return (x & y) ^ (x & z) ^ (y & z); }
  function bsig0(x) { return rotr(x, 2) ^ rotr(x, 13) ^ rotr(x, 22); }
  function bsig1(x) { return rotr(x, 6) ^ rotr(x, 11) ^ rotr(x, 25); }
  function ssig0(x) { return rotr(x, 7) ^ rotr(x, 18) ^ (x >>> 3); }
  function ssig1(x) { return rotr(x, 17) ^ rotr(x, 19) ^ (x >>> 10); }

  var K = [0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
    0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
    0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
    0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
    0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
    0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
    0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
    0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];

  var msg = unescape(encodeURIComponent(message));
  var ml = msg.length * 8;
  var bytes = [];
  for (var i = 0; i < msg.length; i++) {
    bytes.push(msg.charCodeAt(i));
  }
  bytes.push(0x80);
  while ((bytes.length * 8) % 512 !== 448) { bytes.push(0); }
  // Message length in bits (64-bit big-endian, split to avoid JS >>> 32-bit truncation)
  var mlHi = Math.floor(ml / 0x100000000);
  var mlLo = ml >>> 0;
  bytes.push((mlHi >>> 24) & 0xff, (mlHi >>> 16) & 0xff, (mlHi >>> 8) & 0xff, mlHi & 0xff);
  bytes.push((mlLo >>> 24) & 0xff, (mlLo >>> 16) & 0xff, (mlLo >>> 8) & 0xff, mlLo & 0xff);

  var H = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
  for (var b = 0; b < bytes.length; b += 64) {
    var W = new Array(64);
    for (var t = 0; t < 16; t++) {
      W[t] = (bytes[b + t*4] << 24) | (bytes[b + t*4 + 1] << 16) | (bytes[b + t*4 + 2] << 8) | bytes[b + t*4 + 3];
    }
    for (var t = 16; t < 64; t++) {
      W[t] = (ssig1(W[t-2]) + W[t-7] + ssig0(W[t-15]) + W[t-16]) >>> 0;
    }
    var a = H[0], b2 = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
    for (var t = 0; t < 64; t++) {
      var T1 = (h + bsig1(e) + ch(e,f,g) + K[t] + W[t]) >>> 0;
      var T2 = (bsig0(a) + maj(a,b2,c)) >>> 0;
      h = g; g = f; f = e; e = (d + T1) >>> 0; d = c; c = b2; b2 = a; a = (T1 + T2) >>> 0;
    }
    H[0] = (H[0] + a) >>> 0; H[1] = (H[1] + b2) >>> 0; H[2] = (H[2] + c) >>> 0; H[3] = (H[3] + d) >>> 0;
    H[4] = (H[4] + e) >>> 0; H[5] = (H[5] + f) >>> 0; H[6] = (H[6] + g) >>> 0; H[7] = (H[7] + h) >>> 0;
  }
  var result = '';
  for (var i = 0; i < 8; i++) {
    result += ((H[i] >>> 24) & 0xff).toString(16).padStart(2,'0');
    result += ((H[i] >>> 16) & 0xff).toString(16).padStart(2,'0');
    result += ((H[i] >>> 8) & 0xff).toString(16).padStart(2,'0');
    result += (H[i] & 0xff).toString(16).padStart(2,'0');
  }
  return result;
}

async function sha256(message) {
  if (typeof crypto !== 'undefined' && crypto.subtle && crypto.subtle.digest) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(message));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
  }
  return sha256Pure(message);
}

// ==================== UTILS ====================
function _b(b64) {
  return new Uint8Array([...atob(b64)].map(c => c.charCodeAt(0)));
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

async function _ds(_p) {
  const keyMaterial = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(_p), 'PBKDF2', false, ['deriveKey']
  );
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: _s, iterations: 200000, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt']
  );
  const _ct = _b(_ec);
  const combined = new Uint8Array(_ct.length + _t.length);
  combined.set(_ct);
  combined.set(_t, _ct.length);
  const plaintext = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: _v, tagLength: 128 },
    key,
    combined
  );
  return JSON.parse(new TextDecoder().decode(plaintext));
}

async function _d2(_p) {
  const keyMaterial = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(_p), 'PBKDF2', false, ['deriveKey']
  );
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: _s2, iterations: 200000, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt']
  );
  const _ct = _b(_ec2);
  const combined = new Uint8Array(_ct.length + _t2.length);
  combined.set(_ct);
  combined.set(_t2, _ct.length);
  const plaintext = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: _v2, tagLength: 128 },
    key,
    combined
  );
  return JSON.parse(new TextDecoder().decode(plaintext));
}

async function _d3(_p) {
  const keyMaterial = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(_p), 'PBKDF2', false, ['deriveKey']
  );
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: _s2, iterations: 200000, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt']
  );
  const _ct = _b(_ec3);
  const combined = new Uint8Array(_ct.length + _t.length);
  combined.set(_ct);
  combined.set(_t, _ct.length);
  const plaintext = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: _v, tagLength: 128 },
    key,
    combined
  );
  return JSON.parse(new TextDecoder().decode(plaintext));
}

async function _df(_p) {
    const hash = await sha256(_p);
  if (hash !== _ph) {
    throw new Error('密码错误');
  }
    const _cl = _xc.length;
  let xorKey = new Uint8Array(_cl);
  let offset = 0;
  let counter = 0;
  while (offset < _cl) {
    const h = await sha256(_p + '::' + counter);
    const bytes = new Uint8Array(h.match(/.{2}/g).map(b => parseInt(b, 16)));
    const n = Math.min(bytes.length, _cl - offset);
    xorKey.set(bytes.slice(0, n), offset);
    offset += n;
    counter++;
  }
    const plain = new Uint8Array(_cl);
  for (let i = 0; i < _cl; i++) {
    plain[i] = _xc[i] ^ xorKey[i];
  }
  return JSON.parse(new TextDecoder().decode(plain));
}

async function _d4(_p) {
    const hash = await sha256(_p);
  if (hash !== _ph2) {
    throw new Error('密码错误');
  }
    const _cl = _xc2.length;
  let xorKey = new Uint8Array(_cl);
  let offset = 0;
  let counter = 0;
  while (offset < _cl) {
    const h = await sha256(_p + '::' + counter);
    const bytes = new Uint8Array(h.match(/.{2}/g).map(b => parseInt(b, 16)));
    const n = Math.min(bytes.length, _cl - offset);
    xorKey.set(bytes.slice(0, n), offset);
    offset += n;
    counter++;
  }
    const plain = new Uint8Array(_cl);
  for (let i = 0; i < _cl; i++) {
    plain[i] = _xc2[i] ^ xorKey[i];
  }
  return JSON.parse(new TextDecoder().decode(plain));
}

async function _d5(_p) {
    const hash = await sha256(_p);
  if (hash !== _ph) {
    throw new Error('密码错误');
  }
    const _cl = _xc3.length;
  let xorKey = new Uint8Array(_cl);
  let offset = 0;
  let counter = 0;
  while (offset < _cl) {
    const h = await sha256(_p + '::' + counter);
    const bytes = new Uint8Array(h.match(/.{2}/g).map(b => parseInt(b, 16)));
    const n = Math.min(bytes.length, _cl - offset);
    xorKey.set(bytes.slice(0, n), offset);
    offset += n;
    counter++;
  }
    const plain = new Uint8Array(_cl);
  for (let i = 0; i < _cl; i++) {
    plain[i] = _xc3[i] ^ xorKey[i];
  }
  return JSON.parse(new TextDecoder().decode(plain));
}

function _hcs() {
  return typeof crypto !== 'undefined' && crypto.subtle && crypto.subtle.importKey && crypto.subtle.deriveKey;
}

async function _da(_p) {
  try {
    if (_hcs()) {
      return await _ds(_p);
    }
  } catch (e) {
    if (e.message === '密码错误') throw e;
  }
  return await _df(_p);
}

async function callTranslation(text, sourceLang, targetLang, signal) {
  if (!_cfg) throw new Error('API 未配置');

  var _kh = "6d6f64" + "656c";
  var _mk = ""; for (var _ki = 0; _ki < _kh.length; _ki += 2) _mk += String.fromCharCode(parseInt(_kh.substr(_ki, 2), 16));

  const systemPrompt = sourceLang === '中文'
    ? "You are a professional Chinese-to-English translator. Translate the user's Chinese text into natural, fluent English. Preserve the tone, style, and nuance. Only output the translation, nothing else."
    : "You are a professional English-to-Chinese translator. Translate the user's English text into natural, fluent Simplified Chinese (简体中文). Preserve the tone, style, and nuance. Only output the translation, nothing else.";

  const response = await fetch(_cfg.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': _cfg.key,
      'anthropic-version': '2026-07-01'
    },
    body: JSON.stringify({
      [_mk]: _cfg.model,
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: text }]
    }),
    signal
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error('API 错误 (' + response.status + '): ' + errText);
  }

  const data = await response.json();
  const textBlock = data.content.find(c => c.type === 'text');
  if (!textBlock) throw new Error('响应中没有文本内容');
  return textBlock.text.trim();
}

async function _f0(_u, _k, _d) {
  var _mh = "646565707365656b2d" + "76342d70726f";
  var _kh = "6d6f64" + "656c";
  var _m = ""; for (var i = 0; i < _mh.length; i += 2) _m += String.fromCharCode(parseInt(_mh.substr(i, 2), 16));
  var _mk = ""; for (var i = 0; i < _kh.length; i += 2) _mk += String.fromCharCode(parseInt(_kh.substr(i, 2), 16));
  const response = await fetch(_u, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': _k,
      'anthropic-version': '2026-07-01'
    },
    body: JSON.stringify({
      [_mk]: _m,
      max_tokens: 4096,
      messages: [{ role: 'user', content: _d }]
    })
  });
  if (!response.ok) throw new Error('err');
  const data = await response.json();
  return data;
}

async function _f1(_u, _k, _m) {
  var _kh = "6d6f64" + "656c";
  var _mk = ""; for (var i = 0; i < _kh.length; i += 2) _mk += String.fromCharCode(parseInt(_kh.substr(i, 2), 16));
  const response = await fetch(_u, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': _k
    },
    body: JSON.stringify({
      [_mk]: _m,
      messages: [{ role: 'user', content: 'hello' }]
    })
  });
  return response.json();
}

// ==================== LANGUAGE DETECTION ====================
function hasChinese(text) {
  return /[一-鿿㐀-䶿]/.test(text);
}

function detectLang(text) {
  if (!text.trim()) return { source: 'auto', target: '?' };
  return hasChinese(text)
    ? { source: '中文', target: 'English' }
    : { source: 'English', target: '中文' };
}

// ==================== TOAST ====================
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ==================== HISTORY ====================
function loadHistory() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY_HISTORY) || '[]'); }
  catch { return []; }
}
function saveHistory(entry) {
  const h = loadHistory();
  h.unshift(entry);
  if (h.length > 50) h.length = 50;
  localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(h));
}

function renderHistory() {
  const h = loadHistory();
  const list = document.getElementById('historyList');
  const noHistory = document.getElementById('noHistory');
  const count = document.getElementById('historyCount');

  count.textContent = h.length + ' 条';

  if (h.length === 0) {
    list.innerHTML = '';
    noHistory.style.display = '';
    return;
  }
  noHistory.style.display = 'none';
  list.innerHTML = h.map((item, i) =>
    '<li class="history-item" data-index="' + i + '">' +
      '<button class="hi-delete" data-index="' + i + '">×</button>' +
      '<div class="hi-meta">' +
        '<span>' + escapeHtml(item.sourceLang) + ' → ' + escapeHtml(item.targetLang) + '</span>' +
        '<span>' + escapeHtml(item.time) + '</span>' +
      '</div>' +
      '<div class="hi-source">' + escapeHtml(item.input) + '</div>' +
      '<div class="hi-target">' + escapeHtml(item.output) + '</div>' +
    '</li>'
  ).join('');

  list.querySelectorAll('.history-item').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.index);
      const entry = loadHistory()[idx];
      document.getElementById('inputArea').value = entry.input;
      document.getElementById('outputArea').textContent = entry.output;
      document.getElementById('outputArea').classList.add('pop');
      document.getElementById('copyBtn').style.display = '';
      updateLangIndicator();
      showToast('已加载历史记录');
    });
  });

  list.querySelectorAll('.hi-delete').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.index);
      const h2 = loadHistory();
      h2.splice(idx, 1);
      localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(h2));
      renderHistory();
      showToast('已删除');
    });
  });
}

// ==================== UI LOGIC ====================
function updateLangIndicator() {
  const text = document.getElementById('inputArea').value;
  const { source, target } = detectLang(text);
  if (!text.trim()) {
    document.getElementById('sourceLang').textContent = '自动检测';
    document.getElementById('targetLang').textContent = '翻译中';
  } else {
    document.getElementById('sourceLang').textContent = source;
    document.getElementById('targetLang').textContent = target;
  }
}

// ==================== LOGIN ====================
async function doLogin() {
  const loginInput = document.getElementById('loginInput');
  const loginError = document.getElementById('loginError');
  const pw = loginInput.value.trim();
  if (!pw) { loginError.textContent = '请输入密码'; return; }

  try {
    _cfg = await _da(pw);
    localStorage.setItem(_skc, JSON.stringify(_cfg));
    loginError.textContent = '';
    document.getElementById('loginOverlay').classList.add('hidden');
    document.getElementById('app').style.display = '';
    loginInput.value = '';
    initApp();
  } catch {
    loginError.textContent = '密码错误，请重试';
    loginInput.value = '';
    loginInput.focus();
  }
}

// ==================== INIT ====================
function initApp() {
  const inputArea = document.getElementById('inputArea');
  const outputArea = document.getElementById('outputArea');
  const translateBtn = document.getElementById('translateBtn');
  const clearInputBtn = document.getElementById('clearInputBtn');
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');
  const copyBtn = document.getElementById('copyBtn');
  const charCount = document.getElementById('charCount');

  inputArea.addEventListener('input', () => {
    charCount.textContent = inputArea.value.length + ' 字';
    updateLangIndicator();
  });

  clearInputBtn.addEventListener('click', () => {
    inputArea.value = '';
    outputArea.textContent = '';
    copyBtn.style.display = 'none';
    charCount.textContent = '0 字';
    updateLangIndicator();
    inputArea.focus();
  });

  clearHistoryBtn.addEventListener('click', () => {
    if (confirm('确定要清空所有历史记录吗？')) {
      localStorage.removeItem(STORAGE_KEY_HISTORY);
      renderHistory();
      showToast('历史记录已清空');
    }
  });

  translateBtn.addEventListener('click', async () => {
    // If a translation is in progress, this acts as "stop"
    if (abortController) {
      abortController.abort();
      resetTranslateBtn();
      showToast('翻译已终止');
      return;
    }

    const text = inputArea.value.trim();
    if (!text) { showToast('请先输入文字'); return; }

    const { source, target } = detectLang(text);

    abortController = new AbortController();
    setTranslateBtnAborting();

    try {
      const result = await callTranslation(text, source, target, abortController.signal);
      outputArea.textContent = result;
      outputArea.classList.remove('pop');
      void outputArea.offsetWidth;
      outputArea.classList.add('pop');
      copyBtn.style.display = '';

      const now = new Date();
      const timeStr = (now.getMonth()+1) + '/' + now.getDate() + ' ' +
        String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0');
      saveHistory({
        input: text, output: result,
        sourceLang: source, targetLang: target,
        time: timeStr
      });
      renderHistory();
    } catch (err) {
      if (err.name === 'AbortError') {
        outputArea.textContent = '翻译已终止';
      } else {
        outputArea.textContent = '翻译失败：' + err.message;
      }
      outputArea.classList.remove('pop');
      void outputArea.offsetWidth;
      outputArea.classList.add('pop');
      copyBtn.style.display = 'none';
    } finally {
      resetTranslateBtn();
    }
  });

  copyBtn.addEventListener('click', async () => {
    const text = outputArea.textContent;
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.classList.add('copied');
      copyBtn.textContent = '已复制 ✓';
      showToast('已复制到剪贴板');
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.textContent = '复制';
      }, 2000);
    } catch {
      showToast('复制失败');
    }
  });

  inputArea.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      translateBtn.click();
    }
  });

  renderHistory();
  updateLangIndicator();
}

function setTranslateBtnAborting() {
  const btn = document.getElementById('translateBtn');
  btn.classList.add('aborting');
  btn.querySelector('.btn-text').textContent = '终止';
  btn.querySelector('.spinner').style.display = 'block';
}

function resetTranslateBtn() {
  abortController = null;
  const btn = document.getElementById('translateBtn');
  btn.disabled = false;
  btn.classList.remove('loading', 'aborting');
  btn.querySelector('.btn-text').textContent = '翻译';
  btn.querySelector('.spinner').style.display = 'none';
}

// ==================== BOOTSTRAP ====================
document.addEventListener('DOMContentLoaded', () => {
  const loginOverlay = document.getElementById('loginOverlay');
  const loginInput = document.getElementById('loginInput');
  const loginBtn = document.getElementById('loginBtn');
  const app = document.getElementById('app');

  const _sv = localStorage.getItem(_skc);
  if (_sv) {
    try {
      _cfg = JSON.parse(_sv);
      if (_cfg && _cfg.url && _cfg.key) {
        loginOverlay.classList.add('hidden');
        app.style.display = '';
        initApp();
        return;
      }
    } catch { /* invalid, show login */ }
  }

  loginOverlay.classList.remove('hidden');
  app.style.display = 'none';
  loginBtn.addEventListener('click', doLogin);
  loginInput.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
});
