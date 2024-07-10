(self.webpackChunkmedusa_starter_default=self.webpackChunkmedusa_starter_default||[]).push([[10],{86834:(t,r,e)=>{"use strict";e.r(r),e.d(r,{tsubMiddleware:()=>s});var n=e(89968),s=function(t){return function(r){var e=r.payload,s=r.integration,o=r.next;new n.Store(t).getRulesByDestinationName(s).forEach(function(t){for(var r=t.matchers,s=t.transformers,i=0;i<r.length;i++)if(n.matches(e.obj,r[i])&&(e.obj=n.transform(e.obj,s[i]),null===e.obj))return o(null)}),o(e)}}},89968:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0}),r.Store=r.matches=r.transform=void 0;var s=e(55578);Object.defineProperty(r,"transform",{enumerable:!0,get:function(){return n(s).default}});var o=e(64633);Object.defineProperty(r,"matches",{enumerable:!0,get:function(){return n(o).default}});var i=e(33433);Object.defineProperty(r,"Store",{enumerable:!0,get:function(){return n(i).default}})},64633:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0});var s=n(e(32144));function o(t,r){return Array.isArray(t)?t:"object"==typeof t?t.value:(0,s.default)(r,t)}function i(t){return!!Array.isArray(t)&&(("lowercase"===t[0]||"length"===t[0]||"typeof"===t[0])&&2===t.length||("contains"===t[0]||"match"===t[0])&&3===t.length)}function u(t,r){for(var e,n,s={t:"",ok:!1,err:!1};t.length>0;){if(0===r.length)return s;switch(t[0]){case"[":var o=r[0];r=r.slice(1);var i=!0;(t=t.slice(1)).length>0&&"^"===t[0]&&(i=!1,t=t.slice(1));for(var u=!1,c=0;;){if(t.length>0&&"]"===t[0]&&c>0){t=t.slice(1);break}var f="",p="";if(f=(e=a(t)).char,t=e.newChunk,e.err||(p=f,"-"===t[0]&&(p=(n=a(t.slice(1))).char,t=n.newChunk,n.err)))return s;f<=o&&o<=p&&(u=!0),c++}if(u!==i)return s;break;case"?":r=r.slice(1),t=t.slice(1);break;case"\\":if(0===(t=t.slice(1)).length)return s.err=!0,s;default:if(t[0]!==r[0])return s;r=r.slice(1),t=t.slice(1)}}return s.t=r,s.ok=!0,s.err=!1,s}function a(t){var r={char:"",newChunk:"",err:!1};return 0===t.length||"-"===t[0]||"]"===t[0]||"\\"===t[0]&&0===(t=t.slice(1)).length?r.err=!0:(r.char=t[0],r.newChunk=t.slice(1),0===r.newChunk.length&&(r.err=!0)),r}r.default=function(t,r){if(!r)throw Error("No matcher supplied!");switch(r.type){case"all":return!0;case"fql":return function(t,r){if(!t)return!1;try{t=JSON.parse(t)}catch(r){throw Error('Failed to JSON.parse FQL intermediate representation "'.concat(t,'": ').concat(r))}var e=function t(r,e){if(!Array.isArray(r))return!0===o(r,e);var n,s,a,c,f,p,l=r[0];switch(l){case"!":return!t(r[1],e);case"or":for(var v=1;v<r.length;v++)if(t(r[v],e))return!0;return!1;case"and":for(var v=1;v<r.length;v++)if(!t(r[v],e))return!1;return!0;case"=":case"!=":return function(r,e,n,s){switch(i(r)&&(r=t(r,s)),i(e)&&(e=t(e,s)),"object"==typeof r&&"object"==typeof e&&(r=JSON.stringify(r),e=JSON.stringify(e)),n){case"=":return r===e;case"!=":return r!==e;default:throw Error("Invalid operator in compareItems: ".concat(n))}}(o(r[1],e),o(r[2],e),l,e);case"<=":case"<":case">":case">=":return function(r,e,n,s){if(i(r)&&(r=t(r,s)),i(e)&&(e=t(e,s)),"number"!=typeof r||"number"!=typeof e)return!1;switch(n){case"<=":return r<=e;case">=":return r>=e;case"<":return r<e;case">":return r>e;default:throw Error("Invalid operator in compareNumbers: ".concat(n))}}(o(r[1],e),o(r[2],e),l,e);case"in":return n=o(r[1],e),void 0!==o(r[2],e).find(function(t){return o(t,e)===n});case"contains":return s=o(r[1],e),a=o(r[2],e),"string"==typeof s&&"string"==typeof a&&-1!==s.indexOf(a);case"match":return c=o(r[1],e),f=o(r[2],e),"string"==typeof c&&"string"==typeof f&&function(t,r){var e,n;t:for(;t.length>0;){var s=void 0,o=void 0;if(s=(e=function(t){for(var r,e={star:!1,chunk:"",pattern:""};t.length>0&&"*"===t[0];)t=t.slice(1),e.star=!0;var n=!1;r:for(r=0;r<t.length;r++)switch(t[r]){case"\\":r+1<t.length&&r++;break;case"[":n=!0;break;case"]":n=!1;break;case"*":if(!n)break r}return e.chunk=t.slice(0,r),e.pattern=t.slice(r),e}(t)).star,o=e.chunk,t=e.pattern,s&&""===o)return!0;var i=u(o,r),a=i.t,c=i.ok,f=i.err;if(f)return!1;if(c&&(0===a.length||t.length>0)){r=a;continue}if(s)for(var p=0;p<r.length;p++){if(a=(n=u(o,r.slice(p+1))).t,c=n.ok,f=n.err,c){if(0===t.length&&a.length>0)continue;r=a;continue t}if(f)break}return!1}return 0===r.length}(f,c);case"lowercase":var y=o(r[1],e);if("string"!=typeof y)return null;return y.toLowerCase();case"typeof":return typeof o(r[1],e);case"length":return null===(p=o(r[1],e))?0:Array.isArray(p)||"string"==typeof p?p.length:NaN;default:throw Error("FQL IR could not evaluate for token: ".concat(l))}}(t,r);return"boolean"==typeof e&&e}(r.ir,t);default:throw Error("Matcher of type ".concat(r.type," unsupported."))}}},33433:(t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=function(){function t(t){this.rules=[],this.rules=t||[]}return t.prototype.getRulesByDestinationName=function(t){for(var r=[],e=0,n=this.rules;e<n.length;e++){var s=n[e];(s.destinationName===t||void 0===s.destinationName)&&r.push(s)}return r},t}();r.default=e},55578:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0});var s=n(e(94293)),o=n(e(32144)),i=n(e(24904)),u=e(56930),a=e(13557);function c(t,r,e){Object.entries(r).forEach(function(r){var n=r[0],s=r[1],i=function(t){"object"==typeof t&&null!==t&&e(t,s)},u=""===n?t:(0,o.default)(t,n);Array.isArray(u)?u.forEach(i):i(u)})}function f(t,r){for(var e=0;e<8;e++)for(var n=t[e],s=128;s>=1;s/=2)n-s>=0?(n-=s,r.push(1)):r.push(0)}r.default=function(t,r){for(var e=0;e<r.length;e++){var n,p,l=r[e];switch(l.type){case"drop":return null;case"drop_properties":c(t,l.config.drop,function(t,r){r.forEach(function(r){return delete t[r]})});break;case"allow_properties":c(t,l.config.allow,function(t,r){Object.keys(t).forEach(function(e){r.includes(e)||delete t[e]})});break;case"sample_event":if(n=t,!((p=l.config).sample.percent<=0)&&(p.sample.percent>=1||(p.sample.path?function(t,r){var e=(0,o.default)(t,r.sample.path),n=(0,s.default)(JSON.stringify(e)),u=-64,a=[];f(n.slice(0,8),a);for(var c=0,p=0;p<64&&1!==a[p];p++)c++;if(0!==c){var l=[];f(n.slice(9,16),l),u-=c,a.splice(0,c),l.splice(64-c),a=a.concat(l)}return a[63]=0===a[63]?1:0,(0,i.default)(parseInt(a.join(""),2),u)<r.sample.percent}(n,p):Math.random()<=p.sample.percent)))break;return null;case"map_properties":!function(t,r){var e=JSON.parse(JSON.stringify(t));for(var n in r.map)if(r.map.hasOwnProperty(n)){var s=r.map[n],i=n.split("."),c=void 0;if(i.length>1?(i.pop(),c=(0,o.default)(e,i.join("."))):c=t,"object"==typeof c){if(s.copy){var f=(0,o.default)(e,s.copy);void 0!==f&&(0,u.dset)(t,n,f)}else if(s.move){var p=(0,o.default)(e,s.move);void 0!==p&&(0,u.dset)(t,n,p),(0,a.unset)(t,s.move)}else s.hasOwnProperty("set")&&(0,u.dset)(t,n,s.set);if(s.to_string){var l=(0,o.default)(t,n);if("string"==typeof l||"object"==typeof l&&null!==l)continue;void 0!==l?(0,u.dset)(t,n,JSON.stringify(l)):(0,u.dset)(t,n,"undefined")}}}}(t,l.config);break;case"hash_properties":break;default:throw Error('Transformer of type "'.concat(l.type,'" is unsupported.'))}}return t}},13557:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0}),r.unset=void 0;var s=n(e(32144));r.unset=function(t,r){if((0,s.default)(t,r)){for(var e=r.split("."),n=e.pop();e.length&&"\\"===e[e.length-1].slice(-1);)n=e.pop().slice(0,-1)+"."+n;for(;e.length;)t=t[r=e.shift()];return delete t[n]}return!0}},75691:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Float64Array?Float64Array:void 0;t.exports=r},37456:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s=e(25941),o=e(75691),i=e(22529);n=s()?o:i,t.exports=n},22529:t=>{"use strict";t.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function(){throw Error("not implemented")}},27055:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s=e(62824),o=e(73759),i=e(55764);n=s()?o:i,t.exports=n},55764:t=>{"use strict";t.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function(){throw Error("not implemented")}},73759:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint16Array?Uint16Array:void 0;t.exports=r},82413:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s=e(53842),o=e(93087),i=e(4042);n=s()?o:i,t.exports=n},4042:t=>{"use strict";t.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function(){throw Error("not implemented")}},93087:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint32Array?Uint32Array:void 0;t.exports=r},7768:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s=e(82101),o=e(91503),i=e(22313);n=s()?o:i,t.exports=n},22313:t=>{"use strict";t.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function(){throw Error("not implemented")}},91503:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint8Array?Uint8Array:void 0;t.exports=r},73820:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Float64Array?Float64Array:null;t.exports=r},25941:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(63940);t.exports=n},63940:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(3233),s=e(73820);t.exports=function(){var t,r;if("function"!=typeof s)return!1;try{r=new s([1,3.14,-3.14,NaN]),t=n(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}},21320:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(98319);t.exports=n},98319:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Object.prototype.hasOwnProperty;t.exports=function(t,e){return null!=t&&r.call(t,e)}},30464:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(60695);t.exports=n},60695:t=>{"use strict";t.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}},65912:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(5983);t.exports=n},5983:(t,r,e)=>{"use strict";var n=e(30464)();t.exports=function(){return n&&"symbol"==typeof Symbol.toStringTag}},62824:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(87183);t.exports=n},87183:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(46260),s=e(90256),o=e(80856);t.exports=function(){var t,r;if("function"!=typeof o)return!1;try{r=[1,3.14,-3.14,s+1,s+2],r=new o(r),t=n(r)&&1===r[0]&&3===r[1]&&r[2]===s-2&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}},80856:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint16Array?Uint16Array:null;t.exports=r},53842:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(8485);t.exports=n},8485:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(59846),s=e(90470),o=e(35156);t.exports=function(){var t,r;if("function"!=typeof o)return!1;try{r=[1,3.14,-3.14,s+1,s+2],r=new o(r),t=n(r)&&1===r[0]&&3===r[1]&&r[2]===s-2&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}},35156:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint32Array?Uint32Array:null;t.exports=r},82101:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(62500);t.exports=n},62500:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(76233),s=e(50991),o=e(15820);t.exports=function(){var t,r;if("function"!=typeof o)return!1;try{r=[1,3.14,-3.14,s+1,s+2],r=new o(r),t=n(r)&&1===r[0]&&3===r[1]&&r[2]===s-2&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}},15820:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint8Array?Uint8Array:null;t.exports=r},3233:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(3792);t.exports=n},3792:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(25054),s="function"==typeof Float64Array;t.exports=function(t){return s&&t instanceof Float64Array||"[object Float64Array]"===n(t)}},26323:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(7768),s=e(27055);t.exports={uint16:s,uint8:n}},34160:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(935);t.exports=n},935:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s=e(26323);n=function(){var t;return(t=new s.uint16(1))[0]=4660,52===new s.uint8(t.buffer)[0]}(),t.exports=n},46260:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(96283);t.exports=n},96283:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(25054),s="function"==typeof Uint16Array;t.exports=function(t){return s&&t instanceof Uint16Array||"[object Uint16Array]"===n(t)}},59846:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(1113);t.exports=n},1113:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(25054),s="function"==typeof Uint32Array;t.exports=function(t){return s&&t instanceof Uint32Array||"[object Uint32Array]"===n(t)}},76233:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(17448);t.exports=n},17448:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(25054),s="function"==typeof Uint8Array;t.exports=function(t){return s&&t instanceof Uint8Array||"[object Uint8Array]"===n(t)}},84278:t=>{"use strict";t.exports=1023},15058:t=>{"use strict";t.exports=2147483647},10546:t=>{"use strict";t.exports=2146435072},96387:t=>{"use strict";t.exports=2147483648},3101:t=>{"use strict";t.exports=-1023},92321:t=>{"use strict";t.exports=1023},94571:t=>{"use strict";t.exports=-1074},68974:(t,r,e)=>{"use strict";var n=e(39182).NEGATIVE_INFINITY;t.exports=n},45168:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Number.POSITIVE_INFINITY;t.exports=r},24754:t=>{"use strict";t.exports=22250738585072014e-324},90256:t=>{"use strict";t.exports=65535},90470:t=>{"use strict";t.exports=4294967295},50991:t=>{"use strict";t.exports=255},20707:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(86366);t.exports=n},86366:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(45168),s=e(68974);t.exports=function(t){return t===n||t===s}},30200:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(49484);t.exports=n},49484:t=>{"use strict";t.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function(t){return t!=t}},77979:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(17222);t.exports=n},17222:t=>{"use strict";t.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function(t){return Math.abs(t)}},69249:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(63408);t.exports=n},63408:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(96387),s=e(15058),o=e(67840),i=e(95169),u=e(33425),a=[0,0];t.exports=function(t,r){var e;return o.assign(t,a,1,0),u(a[0]&s|i(r)&n,a[1])}},24904:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(24823);t.exports=n},24823:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(45168),s=e(68974),o=e(84278),i=e(92321),u=e(3101),a=e(94571),c=e(30200),f=e(20707),p=e(69249),l=e(49632),v=e(96502),y=e(67840),h=e(33425),d=[0,0],x=[0,0];t.exports=function(t,r){var e;return 0===t||c(t)||f(t)?t:(l(d,t),t=d[0],(r+=d[1]+v(t))<a)?p(0,t):r>i?t<0?s:n:(r<=u?(r+=52,e=2220446049250313e-31):e=1,y(x,t),e*h(2148532223&x[0]|r+o<<20,x[1]))}},39182:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(69185);t.exports=n},69185:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=Number},96502:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(19689);t.exports=n},19689:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(95169),s=e(10546),o=e(84278);t.exports=function(t){var r=n(t);return(r=(r&s)>>>20)-o|0}},33425:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(43168);t.exports=n},58692:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s,o;!0===e(34160)?(s=1,o=0):(s=0,o=1),n={HIGH:s,LOW:o},t.exports=n},43168:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(82413),s=e(37456),o=e(58692),i=new s(1),u=new n(i.buffer),a=o.HIGH,c=o.LOW;t.exports=function(t,r){return u[a]=t,u[c]=r,i[0]}},1093:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n;n=!0===e(34160)?1:0,t.exports=n},95169:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(18768);t.exports=n},18768:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(82413),s=e(37456),o=e(1093),i=new s(1),u=new n(i.buffer);t.exports=function(t){return i[0]=t,u[o]}},99251:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(24754),s=e(20707),o=e(30200),i=e(77979);t.exports=function(t,r,e,u){return o(t)||s(t)?(r[u]=t,r[u+e]=0):0!==t&&i(t)<n?(r[u]=4503599627370496*t,r[u+e]=-52):(r[u]=t,r[u+e]=0),r}},49632:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(93283),s=e(81111);n(s,"assign",e(99251)),t.exports=s},81111:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(99251);t.exports=function(t){return n(t,[0,0],1,0)}},45843:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(82413),s=e(37456),o=e(32789),i=new s(1),u=new n(i.buffer),a=o.HIGH,c=o.LOW;t.exports=function(t,r,e,n){return i[0]=t,r[n]=u[a],r[n+e]=u[c],r}},67840:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(93283),s=e(16311);n(s,"assign",e(45843)),t.exports=s},32789:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s,o;!0===e(34160)?(s=1,o=0):(s=0,o=1),n={HIGH:s,LOW:o},t.exports=n},16311:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(45843);t.exports=function(t){return n(t,[0,0],1,0)}},93283:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(61534);t.exports=n},61534:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(69255);t.exports=function(t,r,e){n(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}},97056:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Object.defineProperty;t.exports=r},70274:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Object.defineProperty?Object.defineProperty:null;t.exports=r},32213:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(70274);t.exports=function(){try{return n({},"x",{}),!0}catch(t){return!1}}},69255:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s=e(32213),o=e(97056),i=e(23084);n=s()?o:i,t.exports=n},23084:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Object.prototype,e=r.toString,n=r.__defineGetter__,s=r.__defineSetter__,o=r.__lookupGetter__,i=r.__lookupSetter__;t.exports=function(t,u,a){var c,f,p,l;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(o.call(t,u)||i.call(t,u)?(c=t.__proto__,t.__proto__=r,delete t[u],t[u]=a.value,t.__proto__=c):t[u]=a.value),p="get"in a,l="set"in a,f&&(p||l))throw Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(t,u,a.get),l&&s&&s.call(t,u,a.set),t}},25054:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s=e(65912),o=e(44848),i=e(35639);n=s()?i:o,t.exports=n},44848:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(57928);t.exports=function(t){return n.call(t)}},35639:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(21320),s=e(27138),o=e(57928);t.exports=function(t){var r,e,i;if(null==t)return o.call(t);e=t[s],r=n(t,s);try{t[s]=void 0}catch(r){return o.call(t)}return i=o.call(t),r?t[s]=e:delete t[s],i}},57928:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Object.prototype.toString;t.exports=r},27138:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Symbol?Symbol.toStringTag:"";t.exports=r},32144:function(t){t.exports=function(t,r,e,n,s){for(r=r.split?r.split("."):r,n=0;n<r.length;n++)t=t?t[r[n]]:s;return t===s?e:t}},56930:(t,r)=>{r.dset=function(t,r,e){r.split&&(r=r.split("."));for(var n,s,o=0,i=r.length,u=t;o<i&&"__proto__"!==(s=r[o++])&&"constructor"!==s&&"prototype"!==s;)u=u[s]=o===i?e:typeof(n=u[s])==typeof r?n:0*r[o]!=0||~(""+r[o]).indexOf(".")?{}:[]}},94293:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>o});for(var n=[],s=0;s<64;)n[s]=0|4294967296*Math.sin(++s%Math.PI);function o(t){var r,e,o,i=[r=1732584193,e=4023233417,~r,~e],u=[],a=unescape(encodeURI(t))+"\x80",c=a.length;for(t=--c/4+2|15,u[--t]=8*c;~c;)u[c>>2]|=a.charCodeAt(c)<<8*c--;for(s=a=0;s<t;s+=16){for(c=i;a<64;c=[o=c[3],r+((o=c[0]+[r&e|~r&o,o&r|~o&e,r^e^o,e^(r|~o)][c=a>>4]+n[a]+~~u[s|15&[a,5*a+1,3*a+5,7*a][c]])<<(c=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*c+a++%4])|o>>>-c),r,e])r=0|c[1],e=c[2];for(a=4;a;)i[--a]+=c[a]}for(t="";a<32;)t+=(i[a>>3]>>4*(1^a++)&15).toString(16);return t}}}]);