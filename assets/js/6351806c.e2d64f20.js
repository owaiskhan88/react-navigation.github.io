"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[46524],{4689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var a=n(85893),r=n(11151),o=n(74866),i=n(85162);const c={id:"route-object",title:"Route object reference",sidebar_label:"Route object"},s=void 0,l={id:"route-object",title:"Route object reference",description:"Each screen component in your app is provided with the route object as a prop automatically. The prop contains various information regarding current route (place in navigation hierarchy component lives).",source:"@site/versioned_docs/version-7.x/route-object.md",sourceDirName:".",slug:"/route-object",permalink:"/docs/7.x/route-object",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/route-object.md",tags:[],version:"7.x",frontMatter:{id:"route-object",title:"Route object reference",sidebar_label:"Route object"},sidebar:"docs",previous:{title:"Options for screens",permalink:"/docs/7.x/screen-options"},next:{title:"Navigation object",permalink:"/docs/7.x/navigation-object"}},u={},d=[];function p(e){const t={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Each ",(0,a.jsx)(t.code,{children:"screen"})," component in your app is provided with the ",(0,a.jsx)(t.code,{children:"route"})," object as a prop automatically. The prop contains various information regarding current route (place in navigation hierarchy component lives)."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"route"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"key"})," - Unique key of the screen. Created automatically or added while navigating to this screen."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"name"})," - Name of the screen. Defined in navigator component hierarchy."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"path"})," - An optional string containing the path that opened the screen, exists when the screen was opened via a deep link."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"params"})," - An optional object containing params which is defined while navigating e.g. ",(0,a.jsx)(t.code,{children:"navigate('Twitter', { user: 'Dan Abramov' })"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(i.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(t.pre,{"data-name":"Route prop","data-snack":"true","data-version":"7",children:(0,a.jsx)(t.code,{className:"language-js",metastring:'name="Route prop" snack version=7',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nconst Stack = createNativeStackNavigator({\n  screens: {\n    Profile: ProfileScreen,\n  },\n});\n\n// codeblock-focus-start\nfunction ProfileScreen({ route }) {\n  return (\n    <View>\n      <Text>This is the profile screen of the app</Text>\n      <Text>{route.name}</Text>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(Stack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(i.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(t.pre,{"data-name":"Route prop","data-snack":"true","data-version":"7",children:(0,a.jsx)(t.code,{className:"language-js",metastring:'name="Route prop" snack version=7',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nconst Stack = createNativeStackNavigator();\n\n// codeblock-focus-start\nfunction ProfileScreen({ route }) {\n  return (\n    <View>\n      <Text>This is the profile screen of the app</Text>\n      <Text>{route.name}</Text>\n    </View>\n  );\n}\n// codeblock-focus-end\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var a=n(86010);const r={tabItem:"tabItem_Ymn6"};var o=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(86010),o=n(12466),i=n(16550),c=n(20469),s=n(91980),l=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,s]=(0,a.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,d]=f({queryString:n,groupId:r}),[v,m]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=null!=l?l:v;return h({value:e,tabValues:o})?e:null})();(0,c.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);s(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function x(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==a&&(l(t),i(r))},d=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const t=s.indexOf(e.currentTarget)+1;n=null!=(a=s[t])?a:s[0];break}case"ArrowLeft":{var r;const t=s.indexOf(e.currentTarget)-1;n=null!=(r=s[t])?r:s[s.length-1];break}}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>s.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===t}),children:null!=n?n:t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=v(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function w(e){const t=(0,m.Z)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var a=n(67294);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);