(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{100:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useAlternatePageUtils=void 0;var o=r(n(15)),a=n(22);t.useAlternatePageUtils=function(){var e=o.default(),t=e.siteConfig,n=t.baseUrl,r=t.url,u=e.i18n,i=u.defaultLocale,s=u.currentLocale,c=a.useLocation().pathname,l=s===i?n:n.replace("/"+s+"/","/"),f=c.replace(n,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?r:"")+function(e){return e===i?""+l:""+l+e+"/"}(t)+f}}}},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},102:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return a})),n.d(t,"usePluginData",(function(){return u}));var r=n(15);function o(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function u(e,t){void 0===t&&(t="default");var n=a(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(22);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return a},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var o,a,u=t.getActiveVersion(e,n),i=null==u?void 0:u.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:u,activeDoc:i,alternateDocVersions:i?(o=i.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(a[e.name]=t)}))})),a):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),a=o.activeVersion!==r;return{latestDocSuggestion:a?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:a?r:void 0}}},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=function(e,t){var n=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return n(e)===n(t)}},105:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;var o=r(n(15));t.useTitleFormatter=function(e){var t=o.default().siteConfig,n=void 0===t?{}:t,r=n.title,a=n.titleDelimiter,u=void 0===a?"|":a;return e&&e.trim().length?e.trim()+" "+u+" "+r:r}},106:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.usePluralForm=void 0;var o=n(0),a=r(n(15)),u=["zero","one","two","few","many","other"];function i(e){return u.filter((function(t){return e.includes(t)}))}var s={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=a.default().i18n.currentLocale;return o.useMemo((function(){if(!Intl||!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),s;try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:i(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error("Failed to use Intl.PluralRules for locale="+e+".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n"),s}var t,n}),[e])}t.usePluralForm=function(){var e=c();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms+"), but the message contains "+r.length+" plural forms: "+e+" ");var o=n.select(t),a=n.pluralForms.indexOf(o);return r[Math.min(a,r.length-1)]}(n,t,e)}}}},107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var r=n(0),o=n(90),a=n(80),u=n(109);t.useDocsPreferredVersion=function(e){void 0===e&&(e=u.DEFAULT_PLUGIN_ID);var t=a.useDocsData(e),n=o.useDocsPreferredVersionContext(),i=n[0],s=n[1],c=i[e].preferredVersionName;return{preferredVersion:c?t.versions.find((function(e){return e.name===c})):null,savePreferredVersionName:r.useCallback((function(t){s.savePreferredVersion(e,t)}),[s])}},t.useDocsPreferredVersionByPluginId=function(){var e=a.useAllDocsData(),t=o.useDocsPreferredVersionContext()[0],n=Object.keys(e),r={};return n.forEach((function(n){r[n]=function(n){var r=e[n],o=t[n].preferredVersionName;return o?r.versions.find((function(e){return e.name===o})):null}(n)})),r}},108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return"docs-preferred-version-"+e},o={save:function(e,t,n){"none"===t||window.localStorage.setItem(r(e),n)},read:function(e,t){return"none"===t?null:window.localStorage.getItem(r(e))},clear:function(e,t){"none"===t||window.localStorage.removeItem(r(e))}};t.default=o},109:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));var r="default"},68:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(77),u=n(24),i=n(72);var s=function(e){var t=e.metadata,n=t.previous,r=t.next;return o.a.createElement("nav",{"aria-label":"Doc list page navigation",className:"my-5 p-0"},o.a.createElement("ul",{className:"pagination justify-content-between"},o.a.createElement("li",{className:"page-item mr-2"},n&&o.a.createElement(i.a,{className:"page-link",to:n.permalink},"\xab ",n.title)),o.a.createElement("li",{className:"page-item ml-2"},r&&o.a.createElement(i.a,{className:"page-link",to:r.permalink},r.title," \xbb"))))},c=n(99),l=n(15),f=n(75);t.default=function(e){var t=Object(l.default)().siteConfig,n=(void 0===t?{}:t).url,r=e.content,i=r.metadata,d=i.description,v=i.title,m=i.permalink,g=r.frontMatter,p=g.image,P=g.keywords,D=Object(c.useTitleFormatter)(v),h=n+Object(f.a)(p);return Object(a.a)(p)||(h=p),o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement("title",null,D),o.a.createElement("meta",{property:"og:title",content:D}),d&&o.a.createElement("meta",{name:"description",content:d}),d&&o.a.createElement("meta",{property:"og:description",content:d}),P&&P.length&&o.a.createElement("meta",{name:"keywords",content:P.join(",")}),p&&o.a.createElement("meta",{property:"og:image",content:h}),p&&o.a.createElement("meta",{name:"twitter:image",content:h}),p&&o.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+v}),m&&o.a.createElement("meta",{property:"og:url",content:n+m})),o.a.createElement("main",{className:"col col-md-8 p-0"},o.a.createElement(r,null),o.a.createElement(s,{metadata:i})))}},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(22),o=n(102),a=n(103);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),o=r.useLocation().pathname;return a.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),o=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:a.getActiveVersion(n.pluginData,o)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return a.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return a.getActiveVersion(n,o)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return a.getActiveDocContext(n,o)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return a.getDocVersionSuggestions(n,o)}},88:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var o=r(n(15));t.useThemeConfig=function(){return o.default().siteConfig.themeConfig}},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var r=n(80);t.isDocsPluginEnabled=!!r.useAllDocsData},90:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var i=a(n(0)),s=n(88),c=n(89),l=n(80),f=u(n(108));function d(e){var t=e.pluginIds,n=e.versionPersistence,r=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=f.default.read(e,n);return r[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(f.default.clear(e,n),{preferredVersionName:null})}(e)})),o}function v(){var e=l.useAllDocsData(),t=s.useThemeConfig().docs.versionPersistence,n=i.useMemo((function(){return Object.keys(e)}),[e]),r=i.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(n)})),o=r[0],a=r[1];return i.useEffect((function(){a(d({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]),[o,i.useMemo((function(){return{savePreferredVersion:function(e,n){f.default.save(e,t,n),a((function(t){var r;return Object.assign(Object.assign({},t),((r={})[e]={preferredVersionName:n},r))}))}}}),[a])]}var m=i.createContext(null);function g(e){var t=e.children,n=v();return i.default.createElement(m.Provider,{value:n},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return c.isDocsPluginEnabled?i.default.createElement(g,null,t):i.default.createElement(i.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=i.useContext(m);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(88);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var o=n(100);Object.defineProperty(t,"useAlternatePageUtils",{enumerable:!0,get:function(){return o.useAlternatePageUtils}});var a=n(101);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return a.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return a.DEFAULT_SEARCH_TAG}});var u=n(89);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return u.isDocsPluginEnabled}});var i=n(104);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return i.isSamePath}});var s=n(105);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return s.useTitleFormatter}});var c=n(106);Object.defineProperty(t,"usePluralForm",{enumerable:!0,get:function(){return c.usePluralForm}});var l=n(107);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return l.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return l.useDocsPreferredVersionByPluginId}});var f=n(90);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return f.DocsPreferredVersionContextProvider}})}}]);