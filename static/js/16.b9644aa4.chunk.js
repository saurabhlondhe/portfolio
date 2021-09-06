(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[16],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"readingTime",(function(){return r})),a.d(t,"default",(function(){return l})),a.d(t,"tableOfContents",(function(){return i})),a.d(t,"frontMatter",(function(){return c}));a(0);var n=a(77);const r={text:"2 min read",minutes:1.54,time:92400,words:308},o={};function l({components:e,...t}){return Object(n.b)("wrapper",Object.assign({},o,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Docker image for ManageIQ is available. It can be run in a Docker container. There are also other options like ",Object(n.b)("a",{parentName:"p",href:"http://manageiq.org/docs/get-started/cloud"},"Public cloud")," or ",Object(n.b)("a",{parentName:"p",href:"http://manageiq.org/docs/get-started/vagrant"},"Vagrant")," to get started with ManageIQ. It can run everywhere Docker is available."),Object(n.b)("p",null,"First thing, you have to install Docker on your system. Follow instructions in ",Object(n.b)("a",{parentName:"p",href:"https://store.docker.com/search?type=edition&offering=community"},"Docker docs")," to install Docker."),Object(n.b)("p",null,"Start Docker service using"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"sudo service docker start\n"}})),Object(n.b)("p",null,"or do"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"systemctl start docker\n"}})),Object(n.b)("h2",{id:"step-1-pull-docker-image-of-manageiq"},"Step 1: Pull Docker image of ManageIQ"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"sudo docker pull manageiq/manageiq\n"}})),Object(n.b)("p",null,"or"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"sudo docker pull manageiq/manageiq:gaprindashvili-4\n"}})),Object(n.b)("p",null,"It will download the ManageIQ image from the Docker registry. To see image list, run this"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"sudo docker images ls\n"}})),Object(n.b)("h2",{id:"stpe-2-run-docker-container"},"Stpe 2: Run Docker container"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"sudo docker run --privileged -d -p 8443:443 manageiq/manageiq\n"}})),Object(n.b)("p",null,"or"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"sudo docker run --privileged -d -p 8443:443 manageiq/manageiq:gaprindashvili-4\n"}})),Object(n.b)("p",null,"It will run the container in detached mode. ",Object(n.b)("inlineCode",{parentName:"p"},"-p 8443:443")," will forward your base machine\u2019s ",Object(n.b)("em",{parentName:"p"},"8443")," port requests to docker container\u2019s ",Object(n.b)("em",{parentName:"p"},"443")," port. To see a list of running containers, execute"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"sudo docker ps\n"}})),Object(n.b)("p",null,"Now ManageIQ container is up and running at IP address ",Object(n.b)("a",{parentName:"p",href:"https://127.0.0.1:8443"},"https://127.0.0.1:8443")),Object(n.b)("p",null,"It has a username as ",Object(n.b)("em",{parentName:"p"},"admin")," and the password is ",Object(n.b)("em",{parentName:"p"},"smartvm"),". Get the login and explore the world of ManageIQ."),Object(n.b)("h2",{id:"step-3-to-commit-the-changes-commit-the-container"},"Step 3: To commit the changes Commit the container"),Object(n.b)("p",null,"It can be useful to commit a container\u2019s file changes or settings into a new image. This allows you to debug a container by running an interactive shell or to export a working dataset to another server."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"docker commit &quot;container_id&quot; manageiq\n"}})),Object(n.b)("p",null,"this saves all changes and data, next time run the ",Object(n.b)("inlineCode",{parentName:"p"},"manageiq")," container."),Object(n.b)("p",null,"Reference: ",Object(n.b)("a",{parentName:"p",href:"http://manageiq.org/docs/get-started/docker"},"http://manageiq.org/docs/get-started/docker")))}l.isMDXComponent=!0;const i=(e={})=>[{id:"step-1-pull-docker-image-of-manageiq",level:2,title:"Step 1: Pull Docker image of ManageIQ",children:[]},{id:"stpe-2-run-docker-container",level:2,title:"Stpe 2: Run Docker container",children:[]},{id:"step-3-to-commit-the-changes-commit-the-container",level:2,title:"Step 3: To commit the changes Commit the container",children:[]}],c={title:"ManageIQ Installation in Docker",slug:"manage-iq-docker-installation",subtitle:"",author:"Saurabh Londhe",banner:"Using-Docker-Containersposting.png",bannerPlaceholder:"3-components-of-meaningful-motion-design-placeholder.jpg",date:"2018-08-31T00:00:00.000Z",categories:["Project","Linux","Docker","Cloud"],layout:"post"}}}]);
//# sourceMappingURL=16.b9644aa4.chunk.js.map