(this.webpackJsonpcourier12=this.webpackJsonpcourier12||[]).push([[0],{37:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(31),s=n.n(c),r=(n(37),n(8)),o=n(11),l=n(9),h=n(10),j=(n(38),n(20)),u=n(1),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).changeContestantName=function(t){e.setState({contestant_name:t.target.value})},e.changeContestantEmail=function(t){e.setState({contestant_email:t.target.value})},e.changeLogLine=function(t){e.setState({log_line:t.target.value})},e.changeGenre=function(t){e.setState({genre:t.target.value})},e.changePageLength=function(t){e.setState({page_length:t.target.value})},e.handleSubmit=function(t){e.sendFeedback("template_r8im1mh",{log_line:e.state.log_line,from_name:e.state.contestant_name,reply_to:e.state.contestant_email,genre:e.state.genre,page_length:e.state.page_length}),e.setState({contestant_name:"",contestant_email:"",log_line:"",genre:"",page_length:"",thank_you:!0})},e.state={contestant_name:"",contestant_email:"",genre:"",log_line:"",page_length:"",thank_you:!1},e}return Object(o.a)(n,[{key:"sendFeedback",value:function(e,t){window.emailjs.send("service_ejcupbt",e,t).then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))}},{key:"render",value:function(){return Object(u.jsx)("div",{id:"Book",children:Object(u.jsxs)("div",{className:"payment",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("form",{id:"round2form",onSubmit:this.addCustomer,children:[Object(u.jsx)("input",{type:"text",placeholder:"Name",value:this.state.contestant_name,onChange:this.changeContestantName,className:"purchaseBox"}),Object(u.jsx)("input",{type:"text",placeholder:"Email",value:this.state.contestant_email,onChange:this.changeContestantEmail,className:"purchaseBox"}),Object(u.jsx)("input",{type:"text",placeholder:"Log Line",value:this.state.log_line,onChange:this.changeLogLine,className:"purchaseBox"}),Object(u.jsx)("input",{type:"text",placeholder:"Genre",value:this.state.genre,onChange:this.changeGenre,className:"purchaseBox"}),Object(u.jsx)("input",{type:"text",placeholder:"Page Length",value:this.state.page_length,onChange:this.changePageLength,className:"purchaseBox"}),Object(u.jsx)("input",{type:"file",className:"purchaseBox",id:"myFile",name:"filename",accept:".pdf"})]})}),Object(u.jsx)("br",{}),Object(u.jsx)(j.b,{options:{"client-id":"test"},id:"paypal",children:Object(u.jsx)(j.a,{style:{layout:"vertical"}})})]})})}}]),n}(i.a.Component),d=n(13),p=n.p+"static/media/Courier12.46459b0a.png",m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"navBar",children:[Object(u.jsx)("img",{id:"C12Logo",src:p}),Object(u.jsxs)("div",{id:"NavBar-page",children:[Object(u.jsx)(d.b,{to:"/submit",className:"navBarLinks",children:"Submit"}),Object(u.jsx)(d.b,{to:"/",className:"navBarLinks",children:"About The Contest"}),Object(u.jsx)(d.b,{to:"/contact",className:"navBarLinks",children:"Contact Us"})]})]})}}]),n}(i.a.Component),g=m,x=n.p+"static/media/creative-roles-feature.cc72a033.jpg",O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"contestAbout",children:Object(u.jsxs)("div",{id:"abuotContestTeam",children:[Object(u.jsx)("img",{src:x,id:"teamPic"}),Object(u.jsx)("h2",{children:"The Inspiration"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"aboutText",children:"The Courier Twelve Screenwriting Contest is a one of a kind opportunity. Unlike any other screenwriting contest, Courier Twelve is partnering with (TALENT NAME HERE) to find the next great small budget, feature screenplay to PRODUCE."}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{className:"aboutText",children:"After years of submitting to contests themselves, the Courier Twelve team realized that screenwriting contests were missing a great opportunity. Finding the next great writer and script isn\u2019t enough, we should be finding the next indie script to go into production with."}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{className:"aboutText",children:"Open to all writers with a small budget screenplay, the Courier Twelve Screenwriting Contest is your opportunity to not only have your script be found, but your opportunity to have your script be made into a movie!"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]}),Object(u.jsx)("h2",{children:"Rules"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:"rules",children:"All writers must be at least 18 years old."}),Object(u.jsx)("li",{children:"All writers are eligible, including professional writers."}),Object(u.jsx)("li",{children:"Anyone can submit, however the script must be in English. (Occasional dialogue in other languages is acceptable.)"}),Object(u.jsx)("li",{children:"Scripts based on material not owned by the writers are not acceptable. However, scripts based on entities in public domain are acceptable."}),Object(u.jsx)("li",{children:"Electronic, PDF submissions only."}),Object(u.jsx)("li",{children:"Cover letters will not be read."}),Object(u.jsx)("li",{children:"By entering the competition, the writer(s) acknowledge their eligibility for the competition."}),Object(u.jsx)("li",{children:"Courier Twelve receives the right amend these rules at any time."}),Object(u.jsx)("li",{children:"A writer or a writing team can submit multiple scripts to Courier Twelve. Meaning, you can not submit multiple versions of a script but you can submit multiple ideas to the contest."}),Object(u.jsx)("li",{children:"All entry fees are non-refundable."}),Object(u.jsx)("li",{children:"The decision of the judges and (TALENT HERE) will be final and cannot be contested. However, if the winning writer(s) decline to go into production, Courier Twelve team and (talent here) will move on to the second place winning script."})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("h2",{children:"Guidelines"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"In partnership with (TALENT HERE) Courier Twelve has obtained an investment of $2,000,000 to cover the production costs of your script!!"}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"Because of our low budget, we cannot choose a big budget screenplay. We will gladly read your buddy-cop action adventure set in space with big explosions and spaceship chases but it will not be able to win."}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]}),Object(u.jsx)("h2",{children:"Examples of movies we are looking for"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Emily the Criminal (2022)"}),Object(u.jsx)("li",{children:"Red Rocket (2021)"}),Object(u.jsx)("li",{children:"Palm Springs (2022)"}),Object(u.jsx)("li",{children:"Malcolm and Marie (2021)"}),Object(u.jsx)("li",{children:"Minari (2020)"}),Object(u.jsx)("li",{children:"Buried (2010)"}),Object(u.jsx)("li",{children:"Napoleon Dynamite (2004)"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("h2",{children:"Prize"}),Object(u.jsx)("p",{children:"The Courier Twelve Screenwriting Contest is a truly one of a kind event."}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"The winner will have the chance to partner with Courier Twelve and TALENT HERE and see their feature script become a movie!!"}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"It is important to note that the winner will receive an offer to purchase their script. Following negotiations, the writer(s) will have the option to become apart of the producing team as we move into production."}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})})}}]),n}(i.a.Component),v=O,f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({feedback:t.target.value})},e.handleSubmit=function(t){e.sendFeedback("template_tt9f297",{message:e.state.feedback,from_name:e.state.name,reply_to:e.state.email})},e.handleNameChange=function(t){e.setState({name:t.target.value})},e.handleEmailChange=function(t){e.setState({email:t.target.value})},e.state={feedback:"",name:"",email:""},e}return Object(o.a)(n,[{key:"sendFeedback",value:function(e,t){window.emailjs.send("service_ejcupbt",e,t).then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))}},{key:"render",value:function(){return Object(u.jsx)("div",{id:"contact",children:Object(u.jsxs)("form",{className:"test-mailing",children:[Object(u.jsx)("h5",{children:"If you have any further questions please contact the Courier Twelve team with the below form."}),Object(u.jsx)("div",{children:Object(u.jsx)("textarea",{id:"test-mailing",name:"test-mailing",onChange:this.handleChange,placeholder:"Message...",required:!0,value:this.state.feedback,style:{width:"80%",height:"150px"}})}),Object(u.jsx)("input",{className:"contact",type:"text",placeholder:"Your Name...",onChange:this.handleNameChange}),Object(u.jsx)("input",{className:"contact",type:"text",placeholder:"Your Email...",onChange:this.handleEmailChange}),Object(u.jsx)("input",{id:"contactButton",type:"button",value:"Submit",className:"btn btn--submit",onClick:this.handleSubmit})]})})}}]),n}(i.a.Component),w=n(2);var y=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("header",{className:"App-header",children:Object(u.jsxs)("div",{id:"flexDiv",children:[Object(u.jsx)(g,{}),Object(u.jsxs)(w.c,{children:[Object(u.jsx)(w.a,{exact:!0,path:"/",component:v}),Object(u.jsx)(w.a,{exact:!0,path:"/submit",component:b}),Object(u.jsx)(w.a,{exact:!0,path:"/contact",component:f})]})]})})})};s.a.render(Object(u.jsx)(d.a,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.e1f0cb51.chunk.js.map