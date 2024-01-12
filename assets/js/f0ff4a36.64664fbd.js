"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[1332],{94348:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>g,contentTitle:()=>x,default:()=>f,frontMatter:()=>u,metadata:()=>j,toc:()=>y});var i=a(85893),n=a(11151),t=a(58219),l=(a(62316),a(51039)),r=a.n(l),d=(a(82723),a(9487)),c=a(41429),o=a(5397),m=a(4667),p=a(9472),h=a(85162);const u={id:"getdocument",title:"Get document by ID",description:"Get a document",sidebar_label:"Get document by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJytVm1v2zYQ/ivsfWoAxS9ttg/CMCxogsxosQRLin1IjIKWzhIbiWTJk2ND0H8fjpJsOUqwouuXRCbv5eFzdw9ZA8nMQ3wPqUmqEjV5WEaQok+csqSMhhiukIQUvQFEYCw6yZuLFGLIkAZ7VjpZIqHjqDVoWSLEsD2VVp2SeUQNESiOmqNM0cHzZBCBw2+VcphCTK7CCDztCg7iVWkLhAhwawuTIsRrWXg2SHIsJcQ10M4GS3JKZ9A00R5BD/GLSnsEVlI+ym9WXzGhRSrMWiRGk0zoZ0KKYG1cKWm4glsZosRg/5yv8uRdblfQNEtO663RHj0Hejeb8b9juL5KEvR+XRViXxWIgJFzPeIapLWFSsLG9Ktnp3qMTjond8wLYRmSHQ583zIYgc0Nmc+uCB3S+bVs8abj9KRaqCodxFaaMAuV3h9dafr1bHjy+ayJukqNGTvwk5osUwhNBIkkzIzbDex/GpbvgnJhMs8NBtuyYMuuzfa4mghIUTD9MFg7kDgmv4v05KS1fas1g5o8B3OcuY8MDaNqx/pHU/wvKl+lb8wWyWxI1J1sjTxJql488nHzWyTR2gqlBeUoPBkXxlFXJbeu3EhVyFUYUYs6baN4U6SwHMOxSEM4N/yzCXSezc7Gs3fRSYrQhsTaVDp9A8H2l7HtQm9koVJxfrMQdyyDb9qTYlI5RbugldKqL4/I30se/hIpN53ABmGlHGKY9kI2rQeS1vCp0G162a1cwRJLZH08nUprJ8ai9irThVz5SWLKqbRqupkDZ+pR3LIstKXeYzm0kFUfkXvoPyWdD6b02gTnjstri/pWZToQsJmPSnmXKy+UD9v9uYJmibVx4pm3WEmPqTBtzXmT199P5sJbTNS6k7uJeNAP+taUKCqPLJGF0o8+ftCn4v56vVaJkoX4B1deES7f9mw9PT2N2DoJPleK8molHFpzMM/CYqB06LX/cQIRELrSX69v0W1Ugl1lXkk1DcbTTsT5+olrwFIqrmi39MdzJ+67QiWoPQ76+fzq5pN4P5lBNGiI74A8/bT4cPnX7SVH5ZZqSzSfzCazoGHGUyn1IBG/EPqqidVOLC6eF7g+XEnj90TXYYRbmtpCKs1ZAuK6a/vD+wQiiId3+TKC3Hhik7rmvvjsiqbh5W8VujBMEWykU0EFeDZS5fk73d/VrwJ9+3d3C56Il58FLwLv50XzsGxkUWH7rAnjdPQOaZZN1A/NDyN7DUab7nhK92j4YdQanCcJWhrsjd4LR1p0dXkHEciKizKUhscgDd0Hn+VFFo7RtAD4L8N50eE3HuyPuPt9b97uvOqwf1W21kzFsmmafwFJUbH5",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},x=void 0,j={id:"API-docs/getdocument",title:"Get document by ID",description:"Get a document",source:"@site/docs/API-docs/getdocument.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/getdocument",permalink:"/docs/API-docs/getdocument",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"getdocument",title:"Get document by ID",description:"Get a document",sidebar_label:"Get document by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJytVm1v2zYQ/ivsfWoAxS9ttg/CMCxogsxosQRLin1IjIKWzhIbiWTJk2ND0H8fjpJsOUqwouuXRCbv5eFzdw9ZA8nMQ3wPqUmqEjV5WEaQok+csqSMhhiukIQUvQFEYCw6yZuLFGLIkAZ7VjpZIqHjqDVoWSLEsD2VVp2SeUQNESiOmqNM0cHzZBCBw2+VcphCTK7CCDztCg7iVWkLhAhwawuTIsRrWXg2SHIsJcQ10M4GS3JKZ9A00R5BD/GLSnsEVlI+ym9WXzGhRSrMWiRGk0zoZ0KKYG1cKWm4glsZosRg/5yv8uRdblfQNEtO663RHj0Hejeb8b9juL5KEvR+XRViXxWIgJFzPeIapLWFSsLG9Ktnp3qMTjond8wLYRmSHQ583zIYgc0Nmc+uCB3S+bVs8abj9KRaqCodxFaaMAuV3h9dafr1bHjy+ayJukqNGTvwk5osUwhNBIkkzIzbDex/GpbvgnJhMs8NBtuyYMuuzfa4mghIUTD9MFg7kDgmv4v05KS1fas1g5o8B3OcuY8MDaNqx/pHU/wvKl+lb8wWyWxI1J1sjTxJql488nHzWyTR2gqlBeUoPBkXxlFXJbeu3EhVyFUYUYs6baN4U6SwHMOxSEM4N/yzCXSezc7Gs3fRSYrQhsTaVDp9A8H2l7HtQm9koVJxfrMQdyyDb9qTYlI5RbugldKqL4/I30se/hIpN53ABmGlHGKY9kI2rQeS1vCp0G162a1cwRJLZH08nUprJ8ai9irThVz5SWLKqbRqupkDZ+pR3LIstKXeYzm0kFUfkXvoPyWdD6b02gTnjstri/pWZToQsJmPSnmXKy+UD9v9uYJmibVx4pm3WEmPqTBtzXmT199P5sJbTNS6k7uJeNAP+taUKCqPLJGF0o8+ftCn4v56vVaJkoX4B1deES7f9mw9PT2N2DoJPleK8molHFpzMM/CYqB06LX/cQIRELrSX69v0W1Ugl1lXkk1DcbTTsT5+olrwFIqrmi39MdzJ+67QiWoPQ76+fzq5pN4P5lBNGiI74A8/bT4cPnX7SVH5ZZqSzSfzCazoGHGUyn1IBG/EPqqidVOLC6eF7g+XEnj90TXYYRbmtpCKs1ZAuK6a/vD+wQiiId3+TKC3Hhik7rmvvjsiqbh5W8VujBMEWykU0EFeDZS5fk73d/VrwJ9+3d3C56Il58FLwLv50XzsGxkUWH7rAnjdPQOaZZN1A/NDyN7DUab7nhK92j4YdQanCcJWhrsjd4LR1p0dXkHEciKizKUhscgDd0Hn+VFFo7RtAD4L8N50eE3HuyPuPt9b97uvOqwf1W21kzFsmmafwFJUbH5",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Create document",permalink:"/docs/API-docs/createdocument"},next:{title:"Get document list",permalink:"/docs/API-docs/getdocumentlist"}},g={},y=[{value:"Request",id:"request",level:2}];function b(e){const s={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Get document by ID"})}),"\n",(0,i.jsx)(r(),{method:"get",path:"/document/{document_id}"}),"\n",(0,i.jsx)(s.p,{children:"Get a document"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(c.Z,{className:"paramsItem",param:{name:"document_id",in:"path",description:"objectId of contact",required:!0,style:"simple",explode:!1,schema:{type:"string",format:"string",example:"pH1bhc2hpb"}}})})})]}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Header Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(c.Z,{className:"paramsItem",param:{name:"x-api-token",in:"header",description:"",required:!0,style:"simple",explode:!1,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(t.Z,{children:[(0,i.jsxs)(h.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"successful operation"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,i.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",example:10}}),(0,i.jsx)(m.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"doggie"}}),(0,i.jsx)(m.Z,{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"category"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"category"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",example:1}}),(0,i.jsx)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Dogs"}})]})]})}),(0,i.jsx)(m.Z,{collapsible:!1,name:"photoUrls",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",xml:{wrapped:!0},items:{type:"string",xml:{name:"photoUrl"}}}}),(0,i.jsx)(m.Z,{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"tags"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"tag[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(m.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(m.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`available`, `pending`, `sold`]",schema:{type:"string",description:"pet status in the store",enum:["available","pending","sold"]}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(o.Z,{responseExample:'[\n  {\n    "id": 10,\n    "name": "doggie",\n    "category": {\n      "id": 1,\n      "name": "Dogs"\n    },\n    "photoUrls": [\n      "string"\n    ],\n    "tags": [\n      {\n        "id": 0,\n        "name": "string"\n      }\n    ],\n    "status": "available"\n  }\n]',language:"json"})})]})})})})]}),(0,i.jsxs)(h.default,{label:"404",value:"404",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Document not found!"})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(h.default,{label:"405",value:"405",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Invalid API Token!"})}),(0,i.jsx)("div",{})]})]})})})]})}function f(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}}}]);