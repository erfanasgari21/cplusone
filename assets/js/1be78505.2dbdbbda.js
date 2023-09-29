"use strict";(self.webpackChunkcplusone_doc=self.webpackChunkcplusone_doc||[]).push([[514,457],{6260:(e,t,n)=>{n.r(t),n.d(t,{default:()=>J});var a=n(7294),o=n(3905),l=n(6291),c=n(736),i=n(6010),r=n(941),s=n(5492),d=n(5164),m=n(4400),u=n(7462);const p=e=>a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));var b=n(4973),h=n(6742),E=n(3919),f=n(6806);const g={menuLinkText:"menuLinkText_JWiP"},_=(e,t)=>"link"===e.type?(0,r.Mg)(e.href,t):"category"===e.type&&e.items.some((e=>_(e,t))),C=(0,a.memo)((function(e){let{items:t,...n}=e;return a.createElement(a.Fragment,null,t.map(((e,t)=>a.createElement(k,(0,u.Z)({key:t,item:e},n)))))}));function k(e){let{item:t,...n}=e;return"category"===t.type?0===t.items.length?null:a.createElement(v,(0,u.Z)({item:t},n)):a.createElement(N,(0,u.Z)({item:t},n))}function v(e){let{item:t,onItemClick:n,activePath:o,...l}=e;const{items:c,label:s,collapsible:d}=t,m=_(t,o),{collapsed:p,setCollapsed:b,toggleCollapsed:h}=(0,r.uR)({initialState:()=>!!d&&(!m&&t.collapsed)});return function(e){let{isActive:t,collapsed:n,setCollapsed:o}=e;const l=(0,r.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n])}({isActive:m,collapsed:p,setCollapsed:b}),a.createElement("li",{className:(0,i.Z)(r.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":p})},a.createElement("a",(0,u.Z)({className:(0,i.Z)("menu__link",{"menu__link--sublist":d,"menu__link--active":d&&m,[g.menuLinkText]:!d}),onClick:d?e=>{e.preventDefault(),h()}:void 0,href:d?"#":void 0},l),s),a.createElement(r.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:p},a.createElement(C,{items:c,tabIndex:p?-1:0,onItemClick:n,activePath:o})))}function N(e){let{item:t,onItemClick:n,activePath:o,...l}=e;const{href:c,label:s}=t,d=_(t,o);return a.createElement("li",{className:(0,i.Z)(r.kM.docs.docSidebarItemLink,"menu__list-item"),key:s},a.createElement(h.Z,(0,u.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":d}),"aria-current":d?"page":void 0,to:c},(0,E.Z)(c)&&{onClick:n},l),(0,E.Z)(c)?s:a.createElement("span",null,s,a.createElement(f.Z,null))))}const S={sidebar:"sidebar_bpFd",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_pXBk",sidebarHidden:"sidebarHidden_UBWE",sidebarLogo:"sidebarLogo_nb0l",menu:"menu_fJBT",menuWithAnnouncementBar:"menuWithAnnouncementBar_DPnY",collapseSidebarButton:"collapseSidebarButton_3RWL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_XAIi",sidebarMenuIcon:"sidebarMenuIcon_Nts0",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_nJGf"};function Z(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,b.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},a.createElement(p,{className:S.collapseSidebarButtonIcon}))}function I(e){let{path:t,sidebar:n,onCollapse:o,isHidden:l}=e;const c=function(){const{isClosed:e}=(0,r.nT)(),[t,n]=(0,a.useState)(!e);return(0,d.Z)((t=>{let{scrollY:a}=t;e||n(0===a)})),t}(),{navbar:{hideOnScroll:s},hideableSidebar:u}=(0,r.LU)(),{isClosed:p}=(0,r.nT)();return a.createElement("div",{className:(0,i.Z)(S.sidebar,{[S.sidebarWithHideableNavbar]:s,[S.sidebarHidden]:l})},s&&a.createElement(m.Z,{tabIndex:-1,className:S.sidebarLogo}),a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",S.menu,{[S.menuWithAnnouncementBar]:!p&&c})},a.createElement("ul",{className:(0,i.Z)(r.kM.docs.docSidebarMenu,"menu__list")},a.createElement(C,{items:n,activePath:t}))),u&&a.createElement(Z,{onClick:o}))}const T=e=>{let{toggleSidebar:t,sidebar:n,path:o}=e;return a.createElement("ul",{className:(0,i.Z)(r.kM.docs.docSidebarMenu,"menu__list")},a.createElement(C,{items:n,activePath:o,onItemClick:()=>t()}))};function M(e){return a.createElement(r.Cv,{component:T,props:e})}const B=a.memo(I),w=a.memo(M);function L(e){const t=(0,s.Z)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(B,e),o&&a.createElement(w,e))}var x=n(779),y=n(9457),A=n(6550);const H="backToTopButton_Cy7D",P="backToTopButtonShow_g5tY",W=!1;function F(){const e=(0,a.useRef)(null);return{smoothScrollTop:function(){e.current=W?(window.scrollTo({top:0,behavior:"smooth"}),()=>{}):function(){let e=null;return function t(){const n=document.documentElement.scrollTop;n>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*n)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>e.current?.()}}const D=function(){const e=(0,A.TH)(),{smoothScrollTop:t,cancelScrollToTop:n}=F(),[o,l]=(0,a.useState)(!1);return(0,d.Z)(((e,t)=>{let{scrollY:a}=e;if(!t)return;const o=a<t.scrollY;if(o||n(),a<300)l(!1);else if(o){const e=document.documentElement.scrollHeight;a+window.innerHeight<e&&l(!0)}else l(!1)}),[e]),a.createElement("button",{className:(0,i.Z)("clean-btn",H,{[P]:o}),type:"button",onClick:()=>t()},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},R={docPage:"docPage_ntW3",docMainContainer:"docMainContainer_QBea",docSidebarContainer:"docSidebarContainer_ZbqI",docMainContainerEnhanced:"docMainContainerEnhanced_uhvW",docSidebarContainerHidden:"docSidebarContainerHidden_EQJ+",collapsedDocSidebar:"collapsedDocSidebar_iMnt",expandSidebarButtonIcon:"expandSidebarButtonIcon_HArP",docItemWrapperEnhanced:"docItemWrapperEnhanced_z2TR"};var z=n(9105);function Y(e){let{currentDocRoute:t,versionMetadata:n,children:l}=e;const{pluginId:s,version:d}=n,m=t.sidebar,u=m?n.docsSidebars[m]:void 0,[h,E]=(0,a.useState)(!1),[f,g]=(0,a.useState)(!1),_=(0,a.useCallback)((()=>{f&&g(!1),E(!h)}),[f]);return a.createElement(c.Z,{wrapperClassName:r.kM.wrapper.docsPages,pageClassName:r.kM.page.docsDocPage,searchMetadatas:{version:d,tag:(0,r.os)(s,d)}},a.createElement("div",{className:R.docPage},a.createElement(D,null),u&&a.createElement("aside",{className:(0,i.Z)(R.docSidebarContainer,{[R.docSidebarContainerHidden]:h}),onTransitionEnd:e=>{e.currentTarget.classList.contains(R.docSidebarContainer)&&h&&g(!0)}},a.createElement(L,{key:m,sidebar:u,path:t.path,onCollapse:_,isHidden:f}),f&&a.createElement("div",{className:R.collapsedDocSidebar,title:(0,b.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},a.createElement(p,{className:R.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,i.Z)(R.docMainContainer,{[R.docMainContainerEnhanced]:h||!u})},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",R.docItemWrapper,{[R.docItemWrapperEnhanced]:h})},a.createElement(o.Zo,{components:x.Z},l)))))}const J=function(e){const{route:{routes:t},versionMetadata:n,location:o}=e,c=t.find((e=>(0,A.LX)(o.pathname,e)));return c?a.createElement(a.Fragment,null,a.createElement(z.Z,null,a.createElement("html",{className:n.className})),a.createElement(Y,{currentDocRoute:c,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n}))):a.createElement(y.default,e)}},9457:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(7294),o=n(736),l=n(4973);const c=function(){return a.createElement(o.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);