(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[15],{154:function(e,a,t){"use strict";t.r(a),t.d(a,"readingTime",(function(){return l})),t.d(a,"default",(function(){return r})),t.d(a,"tableOfContents",(function(){return o})),t.d(a,"frontMatter",(function(){return b}));t(0);var n=t(114);const l={text:"4 min read",minutes:3.285,time:197100,words:657},i={};function r({components:e,...a}){return Object(n.b)("wrapper",Object.assign({},i,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"hybrid-cloud-automation-using-ansible-manageiq"},"Hybrid-Cloud-Automation-Using-Ansible-ManageIQ"),Object(n.b)("p",null,"Nowadays, Automation is the mother of all the inventions, that give rise to all the new technologies. Most of the latest technologies are the reason for automation. This project is one of our tries to automate hybrid cloud using ManageIQ and Ansible."),Object(n.b)("p",null,"A hybrid cloud is the one with the combination of both i.e. private as\nwell as public cloud with the specified specifications."),Object(n.b)("p",null,"ManageIQ is an open-source cloud management platform by Red Hat. It is written in Ruby with RoR (Ruby on Rails) as the platform."),Object(n.b)("p",null,"Ansible is software that automates software provisioning, configuration\nmanagement, and application deployment. Playbooks are Ansible\u2019s\nconfiguration, deployment, and orchestration language."),Object(n.b)("h2",{id:"introduction-to-manageiq"},"Introduction to ManageIQ"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ManageIQ is an Open Source Cloud management platform. The ManageIQ project founded by Red Hat In 2014 as a community project. It is written in Ruby with RoR (Ruby on Rails) as the platform."),Object(n.b)("li",{parentName:"ul"},"For getting started get a ManageIQ instances from ",Object(n.b)("a",{parentName:"li",href:"http://manageiq.org/download/"},"here"))),Object(n.b)("h2",{id:"installation"},"Installation"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Using KVM/Qemu image"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Download ManageIQ Image from ",Object(n.b)("a",{parentName:"p",href:"http://manageiq.org/download/"},"manageiq/downloads")," choose QEmu/KVM")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Install KVM and necessary packages"))))),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"yum install qemu-kvm libvirt libvirt-python virt-install\n"}})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create ManageIQ VM using an existing image"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Create VM using ",Object(n.b)("inlineCode",{parentName:"li"},"virt-install")," command")))),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"sudo virt-install --virt-type kvm  --import --name ManageIQ  --memory 12288 --vcpus 4 --cpu host  --disk manageiq-openstack-gaprindashvili-5.qc2,format=qcow2,bus=virtio  --network default,model=virtio   --os-type=linux --os-variant=centos7.0   --graphics spice\n"}})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Launch VM using ",Object(n.b)("inlineCode",{parentName:"li"},"virsh")),Object(n.b)("li",{parentName:"ul"},"Login using ssh")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"ssh root@&lt;ip_of_server&gt;\n"}})),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"    - user: _root_\n    - password: _smartvm_\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://saurabhlondhe.github.io/project/open_source/linux/2018/08/31/Install-manageiq-in-docker.html"},"Using docker image"))),Object(n.b)("h2",{id:"appliance-console-and-basic-configuration"},"Appliance console and basic configuration"),Object(n.b)("p",null,"Running a command ",Object(n.b)("em",{parentName:"p"},"appliance_console")," ot ",Object(n.b)("em",{parentName:"p"},"ap")," to get into ManageIQ Virtual Appliance. It gives datails regarding ManageIQ Machine such as,"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"hostname"),Object(n.b)("li",{parentName:"ul"},"IPv4 Address"),Object(n.b)("li",{parentName:"ul"},"IPv4 Gateway"),Object(n.b)("li",{parentName:"ul"},"IPv6 Address"),Object(n.b)("li",{parentName:"ul"},"IPv6 Gateway"),Object(n.b)("li",{parentName:"ul"},"Primary DNS"),Object(n.b)("li",{parentName:"ul"},"Secondary DNS"),Object(n.b)("li",{parentName:"ul"},"Search Order"),Object(n.b)("li",{parentName:"ul"},"Mac Address"),Object(n.b)("li",{parentName:"ul"},"TimeZone"),Object(n.b)("li",{parentName:"ul"},"Local Database Server"),Object(n.b)("li",{parentName:"ul"},"ManageIQ Server"),Object(n.b)("li",{parentName:"ul"},"ManageIQ Database"),Object(n.b)("li",{parentName:"ul"},"Database/Region"),Object(n.b)("li",{parentName:"ul"},"External Auth"),Object(n.b)("li",{parentName:"ul"},"ManageIQ Version")),Object(n.b)("p",null,"Pressing Enter will lead to the Advanced Settings"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Configure Network"),Object(n.b)("li",{parentName:"ul"},"Set Timezone"),Object(n.b)("li",{parentName:"ul"},"Set Date and Time"),Object(n.b)("li",{parentName:"ul"},"Restore Database From Backup"),Object(n.b)("li",{parentName:"ul"},"Configure Database"),Object(n.b)("li",{parentName:"ul"},"Configure Database Replication"),Object(n.b)("li",{parentName:"ul"},"Logfile Configuration"),Object(n.b)("li",{parentName:"ul"},"Configure Application Database Failover Minitor"),Object(n.b)("li",{parentName:"ul"},"Configure External Authentication (httpd)"),Object(n.b)("li",{parentName:"ul"},"Update External Authentication Options"),Object(n.b)("li",{parentName:"ul"},"Generate Custom Encryption Key"),Object(n.b)("li",{parentName:"ul"},"Stop EVM server Processes"),Object(n.b)("li",{parentName:"ul"},"Start EVM server Processes"),Object(n.b)("li",{parentName:"ul"},"Restart Appliance"),Object(n.b)("li",{parentName:"ul"},"Shut Down Appliance"),Object(n.b)("li",{parentName:"ul"},"Summary Information"),Object(n.b)("li",{parentName:"ul"},"Quit")),Object(n.b)("h2",{id:"manageiq-database-configuration"},"ManageIQ database configuration"),Object(n.b)("p",null,"ManageIQ uses PostgreSQL Database. So while dealing with ManageIQ database we\u2019ll need to follow PostgreSQL commands and procedure to take a database dump as a backup and to restore it in another instance."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},'Note: ManageIQ uses "vmdb_production" database')),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"This is list of steps followed to obtain a dump from a db then retsore it")),Object(n.b)("h2",{id:"dump-the-postgres-db"},"Dump the Postgres DB:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"stop the appliance(s):")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"systemctl stop evmserverd\n"}})),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"This will stop the evmserverd.service from using database in background but no need to stop them, for creating backup the doesn\u2019t affects anywhere.")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"dump the database into file:")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"pg_dump -Fc vmdb_production &gt; production.dump\n"}})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Copy the dump file to the other ManageIQ instance where the database have to restore."),Object(n.b)("p",{parentName:"li"},"We can use ",Object(n.b)("inlineCode",{parentName:"p"},"scp")," for that as follows:"))),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"scp production.dump root@ip_of_other_instance:/root/\n"}})),Object(n.b)("h2",{id:"import-the-postgres-dump"},"Import the Postgres dump"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Take ",Object(n.b)("inlineCode",{parentName:"p"},"production.dump")," to the local machine.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Stop the backend processes"))),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"systemctl stop evmserverd\n"}})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Drop existing database ",Object(n.b)("inlineCode",{parentName:"li"},"vmdb_production"))),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"dropdb vmdb_production\n"}})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"create new database named ",Object(n.b)("inlineCode",{parentName:"li"},"vmdb_production"))),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"createdb vmdb_production\n"}})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"restore the database from dump file")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"pg_restore -d vmdb_production &quot;/path/to/production.dump\n"}})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"change directory to ",Object(n.b)("inlineCode",{parentName:"li"},"/var/www/miq/vmdb/tools"))),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"vmdb  #executing &quot;vmdb&quot; will take you to &quot;/var/www/miq/vmdb/&quot;\n\ncd tools\n\nbundle exec fix_auth.rb --v2 --invalid bogus\n"}})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Start evm service")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh","data-language":"sh","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:"systemctl start evmserverd\n"}})),Object(n.b)("p",null,"This will do the task of restoring database manually."))}r.isMDXComponent=!0;const o=(e={})=>[{id:"hybrid-cloud-automation-using-ansible-manageiq",level:2,title:"Hybrid-Cloud-Automation-Using-Ansible-ManageIQ",children:[]},{id:"introduction-to-manageiq",level:2,title:"Introduction to ManageIQ",children:[]},{id:"installation",level:2,title:"Installation",children:[]},{id:"appliance-console-and-basic-configuration",level:2,title:"Appliance console and basic configuration",children:[]},{id:"manageiq-database-configuration",level:2,title:"ManageIQ database configuration",children:[]},{id:"dump-the-postgres-db",level:2,title:"Dump the Postgres DB:",children:[]},{id:"import-the-postgres-dump",level:2,title:"Import the Postgres dump",children:[]}],b={title:"ManageIQ Database Backup and Restore",slug:"manage-iq-db-restore-and-backup",date:"2018-08-30T00:00:00.000Z",author:"Saurabh Londhe",banner:"miq-dashboard.png",bannerPlaceholder:"3-components-of-meaningful-motion-design-placeholder.jpg",categories:["Project","Linux"],layout:"post"}}}]);
//# sourceMappingURL=15.b16e1f5c.chunk.js.map