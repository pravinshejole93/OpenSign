"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[8106],{56181:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>f,contentTitle:()=>j,default:()=>y,frontMatter:()=>u,metadata:()=>x,toc:()=>g});var t=a(85893),l=a(11151),i=a(58219),r=(a(62316),a(51039)),n=a.n(r),m=(a(82723),a(9487)),d=a(41429),p=a(5397),c=a(4667),o=a(9472),h=a(85162);const u={id:"get-template",title:"Get template by ID",description:"The Get Template API allows you to retrieve details about a specific template. Templates serve as blueprints for creating documents with predefined structures.",sidebar_label:"Get template by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVm1P40YQ/ivb+XRIJnGAo6o/FfUoRT0BOlJVKiC0scfxgr27tzsORJH/ezXrF3zJHdyH6qR+Sjw7z87bMzO7AZJLD8kNzLGypST0cBdBhj51ypIyGhKYFyjOkESvIk6uzoUsS/PkxdrUgoxwSE7hCkWGJFXphVyYmoQU3mKqcpUK6sCT4RovPLoVCunFoqzROqXJi9w4kTqUpPRSZCatK2Txk6JCWIcZ5kpjJjy5OqXaoZ9ABMaik+zteQYJLJF6GxCBlU5WSOg4zA1oWSEk0LtzrzKIQHGYVlIB27GffxAmH5wXVEgSGjHzHPUCRY6UFsh3OPxcK4cZJORqjMDTumRLXlW2ZEfw2ZYmQ0hyWXpWSAusJCQboLUNmuSUXkIEuXGVpFail9A0d3y9t0Z79Aw4iGP++dJVX6cpep/XpRjyARGkRhNqYn1pbanScDB98Aza7HphFg+YEifO8TWkWpOtmPP7ur+tBJ9liDqB59kfC135g6slNBHMFbF094oXgA9/hpQz6sLQG6ChQNq0kN9NmaF7HZQHHREYwRD1lmsFkfXJdNpbqz26SWoqRl8+6bfsDU4GfpsXy9dqqQM/B7R0Tq6ZmISVf7s4F4HUr9l+MAhNEwG1BXjhf2+bD4NfmJ3Q63cdxAeH+7N4P/55PjtOjn5J3h9P4jj+ByJ4rkrGdk2WdfXrjfbftc1+gJ1mW21Mqe08QNMw4Cg+2m2s+YhcIje1zn767/oKnTNv8OZr9se1VLpUGu/7CXF/FB/dHw8Bvd8N6FyvZKmyMMfn5hH1j41nbJ5a87vFUq1SOIcvgh3L2yArpMJ0kz9MfCoggaFNp5vRtG8ggrB3un1Qu3LU2Z7kUunlvrR2Yixqr5a6lAvPXT6VVk1XM+Bp7DGtnaL1NWelDfx5X1q13/o1amSr/kTu5C6ssVa3dwqUPKo4EKVzE8BdsJcWNTdoSNVqtrOd5oXyQvlw3O/KULawRrfQYiE9ZsJoQQWGQ5YfTmbDkg7QibjVt/raVChqj7xNSqUffXKr98XNZZ6rVMlS/I0Lrwjv3vWZe3p62snYXsCcKSrqhXBozYv6MghDWseo4WMPIiB0lb/Mr9GtVNrP32+YmgblacdjmQYeYyUVV7cT/boNYl6VKkXtccS8k7Orj+JwEkM0Isd3uDz9eP7b6cX1Kd/K9GpLNJvEk5hF1niqpB4Z4jfVsBMWa3H+YbvAm5eu/B+8wjrKEz7T1JZShb4NKdx0PXnzMm8jSMZvsLsICuOJVTYbJupfrmwaFn+u0a0hubmLYCWdkgvujJsNZMrz/2x4T30zc+8+dU+zPfH9z7mvBtM3teaOXsmy5i+I4BHXW2/K5q6J+s5mb1uNkzRFSyPszqTl4TKMs7PTOTTNvyFzACs=",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},j=void 0,x={id:"API-docs/get-template",title:"Get template by ID",description:"The Get Template API allows you to retrieve details about a specific template. Templates serve as blueprints for creating documents with predefined structures.",source:"@site/docs/API-docs/get-template.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/get-template",permalink:"/docs/API-docs/get-template",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-template",title:"Get template by ID",description:"The Get Template API allows you to retrieve details about a specific template. Templates serve as blueprints for creating documents with predefined structures.",sidebar_label:"Get template by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVm1P40YQ/ivb+XRIJnGAo6o/FfUoRT0BOlJVKiC0scfxgr27tzsORJH/ezXrF3zJHdyH6qR+Sjw7z87bMzO7AZJLD8kNzLGypST0cBdBhj51ypIyGhKYFyjOkESvIk6uzoUsS/PkxdrUgoxwSE7hCkWGJFXphVyYmoQU3mKqcpUK6sCT4RovPLoVCunFoqzROqXJi9w4kTqUpPRSZCatK2Txk6JCWIcZ5kpjJjy5OqXaoZ9ABMaik+zteQYJLJF6GxCBlU5WSOg4zA1oWSEk0LtzrzKIQHGYVlIB27GffxAmH5wXVEgSGjHzHPUCRY6UFsh3OPxcK4cZJORqjMDTumRLXlW2ZEfw2ZYmQ0hyWXpWSAusJCQboLUNmuSUXkIEuXGVpFail9A0d3y9t0Z79Aw4iGP++dJVX6cpep/XpRjyARGkRhNqYn1pbanScDB98Aza7HphFg+YEifO8TWkWpOtmPP7ur+tBJ9liDqB59kfC135g6slNBHMFbF094oXgA9/hpQz6sLQG6ChQNq0kN9NmaF7HZQHHREYwRD1lmsFkfXJdNpbqz26SWoqRl8+6bfsDU4GfpsXy9dqqQM/B7R0Tq6ZmISVf7s4F4HUr9l+MAhNEwG1BXjhf2+bD4NfmJ3Q63cdxAeH+7N4P/55PjtOjn5J3h9P4jj+ByJ4rkrGdk2WdfXrjfbftc1+gJ1mW21Mqe08QNMw4Cg+2m2s+YhcIje1zn767/oKnTNv8OZr9se1VLpUGu/7CXF/FB/dHw8Bvd8N6FyvZKmyMMfn5hH1j41nbJ5a87vFUq1SOIcvgh3L2yArpMJ0kz9MfCoggaFNp5vRtG8ggrB3un1Qu3LU2Z7kUunlvrR2Yixqr5a6lAvPXT6VVk1XM+Bp7DGtnaL1NWelDfx5X1q13/o1amSr/kTu5C6ssVa3dwqUPKo4EKVzE8BdsJcWNTdoSNVqtrOd5oXyQvlw3O/KULawRrfQYiE9ZsJoQQWGQ5YfTmbDkg7QibjVt/raVChqj7xNSqUffXKr98XNZZ6rVMlS/I0Lrwjv3vWZe3p62snYXsCcKSrqhXBozYv6MghDWseo4WMPIiB0lb/Mr9GtVNrP32+YmgblacdjmQYeYyUVV7cT/boNYl6VKkXtccS8k7Orj+JwEkM0Isd3uDz9eP7b6cX1Kd/K9GpLNJvEk5hF1niqpB4Z4jfVsBMWa3H+YbvAm5eu/B+8wjrKEz7T1JZShb4NKdx0PXnzMm8jSMZvsLsICuOJVTYbJupfrmwaFn+u0a0hubmLYCWdkgvujJsNZMrz/2x4T30zc+8+dU+zPfH9z7mvBtM3teaOXsmy5i+I4BHXW2/K5q6J+s5mb1uNkzRFSyPszqTl4TKMs7PTOTTNvyFzACs=",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Create template With binary",permalink:"/docs/API-docs/createtemplatewithbinary"},next:{title:"Update template by ID",permalink:"/docs/API-docs/update-template"}},f={},g=[{value:"Request",id:"request",level:2}];function b(e){const s={h2:"h2",p:"p",...(0,l.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(s.p,{children:"Get template by ID"})}),"\n",(0,t.jsx)(n(),{method:"get",path:"/template/{template_id}"}),"\n",(0,t.jsx)(s.p,{children:"The Get Template API allows you to retrieve details about a specific template. Templates serve as blueprints for creating documents with predefined structures."}),"\n",(0,t.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(s.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(d.Z,{className:"paramsItem",param:{name:"template_id",in:"path",description:"ID of template that needs to be fetched",required:!0,style:"simple",explode:!1,schema:{type:"string",format:"strng"}}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(h.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"successful operation"})}),(0,t.jsx)("div",{children:(0,t.jsx)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(o.default,{className:"openapi-tabs__schema",children:[(0,t.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(c.Z,{collapsible:!1,name:"objectId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"x1Hbnms2Pg"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"Title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"sample template"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"Note",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"template note"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"Folder",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"folder name"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"File",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"https://templateuser.com"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"Owner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"template creator name"}}),(0,t.jsx)(c.Z,{collapsible:!0,className:"schemaItem",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsxs)("span",{className:"openapi-schema__container",children:[(0,t.jsx)("strong",{className:"openapi-schema__property",children:(0,t.jsx)(s.p,{children:"Signers"})}),(0,t.jsx)("span",{className:"openapi-schema__name",children:(0,t.jsx)(s.p,{children:"object[]"})})]})}),(0,t.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,t.jsx)(s.p,{children:"Array ["})})}),(0,t.jsx)(c.Z,{collapsible:!1,name:"Name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"joe"}}),(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,t.jsx)(s.p,{children:"]"})})})]})]})}),(0,t.jsx)(c.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z",xml:{name:"date"},title:"date"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"updatedAt",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z",xml:{name:"date"},title:"date"}})]})]})}),(0,t.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(p.Z,{responseExample:'{\n  "objectId": "x1Hbnms2Pg",\n  "Title": "sample template",\n  "Note": "template note",\n  "Folder": "folder name",\n  "File": "https://templateuser.com",\n  "Owner": "template creator name",\n  "Signers": [\n    {\n      "Name": "joe"\n    }\n  ],\n  "createdAt": "2023-10-07T16:49:56.000Z",\n  "updatedAt": "2023-10-07T16:49:56.000Z"\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(h.default,{label:"404",value:"404",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Template not found!"})}),(0,t.jsx)("div",{children:(0,t.jsx)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(o.default,{className:"openapi-tabs__schema",children:[(0,t.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Template not found!"}})})]})}),(0,t.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(p.Z,{responseExample:'{\n  "error": "Template not found!"\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(h.default,{label:"405",value:"405",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Invalid API Token!"})}),(0,t.jsx)("div",{children:(0,t.jsx)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(o.default,{className:"openapi-tabs__schema",children:[(0,t.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Invalid API token!"}})})]})}),(0,t.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(p.Z,{responseExample:'{\n  "error": "Invalid API token!"\n}',language:"json"})})]})})})})]})]})})})]})}function y(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}}}]);