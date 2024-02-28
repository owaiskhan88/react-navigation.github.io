"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[71370],{67832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=t(85893),a=t(11151),r=t(74866),s=t(85162);const o={id:"shared-element-transitions",title:"Animating elements between screens",sidebar_label:"Animating elements between screens"},l=void 0,c={id:"shared-element-transitions",title:"Animating elements between screens",description:"This guide covers how to animate elements between screens. This feature is known as a Shared Element Transition and it's implemented in the @react-navigation/native-stack with React Native Reanimated.",source:"@site/versioned_docs/version-7.x/shared-element-transitions.md",sourceDirName:".",slug:"/shared-element-transitions",permalink:"/docs/7.x/shared-element-transitions",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/shared-element-transitions.md",tags:[],version:"7.x",frontMatter:{id:"shared-element-transitions",title:"Animating elements between screens",sidebar_label:"Animating elements between screens"},sidebar:"docs",previous:{title:"Custom Android back button behavior",permalink:"/docs/7.x/custom-android-back-button-handling"},next:{title:"Preventing going back",permalink:"/docs/7.x/preventing-going-back"}},d={},u=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Minimal example",id:"minimal-example",level:2},{value:"Customizing the transition",id:"customizing-the-transition",level:2},{value:"Reference",id:"reference",level:2},{value:"Alternatives",id:"alternatives",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This guide covers how to animate elements between screens. This feature is known as a ",(0,i.jsx)(n.a,{href:"https://docs.swmansion.com/react-native-reanimated/docs/api/sharedElementTransitions",children:"Shared Element Transition"})," and it's implemented in the ",(0,i.jsx)(n.a,{href:"/docs/7.x/native-stack-navigator",children:(0,i.jsx)(n.code,{children:"@react-navigation/native-stack"})})," with ",(0,i.jsx)(n.a,{href:"https://docs.swmansion.com/react-native-reanimated/",children:"React Native Reanimated"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"As of writing this guide, Shared Element Transitions are considered an experimental feature not recommended for production use."})}),"\n",(0,i.jsx)("div",{style:{display:"flex",margin:"16px 0"},children:(0,i.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,i.jsx)("source",{src:"/assets/shared-element-transitions/shared-element-transitions.mp4"})})}),"\n",(0,i.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,i.jsx)(n.p,{children:"Before continuing this guide make sure your app meets these criteria:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You are using ",(0,i.jsx)(n.a,{href:"/docs/7.x/native-stack-navigator",children:(0,i.jsx)(n.code,{children:"@react-navigation/native-stack"})}),". The Shared Element Transitions feature isn't supported in JS-based ",(0,i.jsx)(n.a,{href:"/docs/7.x/stack-navigator",children:(0,i.jsx)(n.code,{children:"@react-navigation/stack"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["You have ",(0,i.jsx)(n.a,{href:"https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started",children:(0,i.jsx)(n.code,{children:"react-native-reanimated"})})," ",(0,i.jsx)(n.strong,{children:"v3.0.0 or higher"})," installed and configured."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"minimal-example",children:"Minimal example"}),"\n",(0,i.jsx)(n.p,{children:"To create a shared transition:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"Animated"})," components imported from ",(0,i.jsx)(n.code,{children:"react-native-reanimated"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Assign the same ",(0,i.jsx)(n.code,{children:"sharedTransitionTag"})," to elements on different screens."]}),"\n",(0,i.jsx)(n.li,{children:"Navigate between screens. The transition will start automatically."}),"\n"]}),"\n",(0,i.jsxs)(r.Z,{groupId:"config",queryString:"config",children:[(0,i.jsx)(s.Z,{value:"static",label:"Static",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'name="Shared transition"',children:"import * as React from 'react';\nimport { View, Button, StyleSheet } from 'react-native';\nimport {\n  useNavigation,\n  createStaticNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nimport Animated from 'react-native-reanimated';\n\nfunction HomeScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={styles.container}>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => navigation.navigate('Details')}\n      />\n      <Animated.Image\n        source={{ uri: 'https://picsum.photos/id/39/200' }}\n        style={{ width: 300, height: 300 }}\n        // highlight-next-line\n        sharedTransitionTag=\"tag\"\n      />\n    </View>\n  );\n}\n\nfunction DetailsScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={styles.container}>\n      <Button title=\"Go back\" onPress={() => navigation.goBack()} />\n      <Animated.Image\n        source={{ uri: 'https://picsum.photos/id/39/200' }}\n        style={{ width: 100, height: 100 }}\n        // highlight-next-line\n        sharedTransitionTag=\"tag\"\n      />\n    </View>\n  );\n}\n\n// highlight-start\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeScreen,\n    Details: DetailsScreen,\n  },\n});\n// highlight-end\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n});\n"})})}),(0,i.jsx)(s.Z,{value:"dynamic",label:"Dynamic",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'name="Shared transition"',children:"import * as React from 'react';\nimport { View, Button, StyleSheet } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nimport Animated from 'react-native-reanimated';\n\n// highlight-next-line\nconst Stack = createNativeStackNavigator();\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={styles.container}>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => navigation.navigate('Details')}\n      />\n      <Animated.Image\n        source={{ uri: 'https://picsum.photos/id/39/200' }}\n        style={{ width: 300, height: 300 }}\n        // highlight-next-line\n        sharedTransitionTag=\"tag\"\n      />\n    </View>\n  );\n}\n\nfunction DetailsScreen({ navigation }) {\n  return (\n    <View style={styles.container}>\n      <Button title=\"Go back\" onPress={() => navigation.goBack()} />\n      <Animated.Image\n        source={{ uri: 'https://picsum.photos/id/39/200' }}\n        style={{ width: 100, height: 100 }}\n        // highlight-next-line\n        sharedTransitionTag=\"tag\"\n      />\n    </View>\n  );\n}\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={HomeScreen} />\n        <Stack.Screen name=\"Details\" component={DetailsScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n});\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"sharedTransitionTag"})," is a string that has to be unique in the context of a single screen, but has to match elements between screens. This prop allows Reanimated to identify and animate the elements, similarly to the ",(0,i.jsx)(n.a,{href:"https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key",children:(0,i.jsx)(n.code,{children:"key"})})," property, which tells React which element in the list is which."]}),"\n",(0,i.jsx)(n.h2,{id:"customizing-the-transition",children:"Customizing the transition"}),"\n",(0,i.jsxs)(n.p,{children:["By default, the transition animates the ",(0,i.jsx)(n.code,{children:"width"}),", ",(0,i.jsx)(n.code,{children:"height"}),", ",(0,i.jsx)(n.code,{children:"originX"}),", ",(0,i.jsx)(n.code,{children:"originY"})," and ",(0,i.jsx)(n.code,{children:"transform"})," properties using ",(0,i.jsx)(n.code,{children:"withTiming"})," with a 500 ms duration. You can easily customize ",(0,i.jsx)(n.code,{children:"width"}),", ",(0,i.jsx)(n.code,{children:"height"}),", ",(0,i.jsx)(n.code,{children:"originX"}),", and ",(0,i.jsx)(n.code,{children:"originY"})," props. Customizing ",(0,i.jsx)(n.code,{children:"transform"})," is also possible but it's far beyond the scope of this guide."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Custom SharedTransition API is not finalized and might change in a future release."})}),"\n",(0,i.jsxs)(n.p,{children:["To customize the transition you need to pass all the properties besides ",(0,i.jsx)(n.code,{children:"transform"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import { SharedTransition } from 'react-native-reanimated';\n\nconst customTransition = SharedTransition.custom((values) => {\n  'worklet';\n  return {\n    height: withSpring(values.targetHeight),\n    width: withSpring(values.targetWidth),\n    originX: withSpring(values.targetOriginX),\n    originY: withSpring(values.targetOriginY),\n  };\n});\n\nfunction HomeScreen() {\n  return (\n    <Animated.Image\n      style={{ width: 300, height: 300 }}\n      sharedTransitionTag=\"tag\"\n      // highlight-next-line\n      sharedTransitionStyle={customTransition} // add this to both elements on both screens\n    />\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.p,{children:["You can find a full Shared Element Transitions reference in the ",(0,i.jsx)(n.a,{href:"https://docs.swmansion.com/react-native-reanimated/docs/shared-element-transitions/overview/",children:"React Native Reanimated documentation"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"alternatives",children:"Alternatives"}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, you can use ",(0,i.jsx)(n.a,{href:"https://github.com/IjzerenHein/react-native-shared-element",children:(0,i.jsx)(n.code,{children:"react-native-shared-element"})})," library with a ",(0,i.jsx)(n.a,{href:"https://github.com/IjzerenHein/react-navigation-shared-element",children:"React Navigation binding"})," which implements Shared Element Transitions in a JS-based ",(0,i.jsx)(n.code,{children:"@react-navigation/stack"})," navigator. This solution, however, isn't actively maintained."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/wix/react-native-navigation",children:(0,i.jsx)(n.code,{children:"react-native-navigation"})})," also comes with support for Shared Element Transitions. You can read more about it ",(0,i.jsx)(n.a,{href:"https://wix.github.io/react-native-navigation/docs/style-animations#shared-element-transitions",children:"here"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var i=t(86010);const a={tabItem:"tabItem_Ymn6"};var r=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var i=t(67294),a=t(86010),r=t(12466),s=t(16550),o=t(20469),l=t(91980),c=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=h(e),[s,l]=(0,i.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+i.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(n=i.find((e=>e.default)))?n:i[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,u]=g({queryString:t,groupId:a}),[v,p]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[a,r]=(0,d.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),f=(()=>{const e=null!=c?c:v;return m({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);l(e),u(e),p(e)}),[u,p,r]),tabValues:r}}var p=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function b(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==i&&(c(n),s(a))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var i;const n=l.indexOf(e.currentTarget)+1;t=null!=(i=l[n])?i:l[0];break}case"ArrowLeft":{var a;const n=l.indexOf(e.currentTarget)-1;t=null!=(a=l[n])?a:l[l.length-1];break}}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,a.Z)("tabs__item",f.tabItem,null==r?void 0:r.className,{"tabs__item--active":i===n}),children:null!=t?t:n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=v(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(b,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function y(e){const n=(0,p.Z)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(67294);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);