(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6ANv":function(t,e,n){"use strict";n.r(e);var s=n("ofXK"),c=n("PCNd"),i=n("tyNb"),o=n("fXoL"),r=n("tk/3");class a{}var p=n("lJxs");class u{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageNumber=1,this.pageSize=6}}var b=n("LRne"),h=n("AytR");let d=(()=>{class t{constructor(t){this.http=t,this.baseUrl=h.a.apiUrl,this.products=[],this.brands=[],this.types=[],this.pagination=new a,this.shopParams=new u}getProducts(t){if(t||(this.products=[]),this.products.length>0&&t){const t=Math.ceil(this.products.length/this.shopParams.pageSize);if(this.shopParams.pageNumber<=t)return this.pagination.data=this.products.slice((this.shopParams.pageNumber-1)*this.shopParams.pageSize,this.shopParams.pageNumber*this.shopParams.pageSize),Object(b.a)(this.pagination)}let e=new r.e;return this.shopParams.brandId>0&&(e=e.append("brandId",this.shopParams.brandId.toString())),this.shopParams.typeId>0&&(e=e.append("typeId",this.shopParams.typeId.toString())),e=e.append("sort",this.shopParams.sort),e=e.append("pageIndex",this.shopParams.pageNumber.toString()),e=e.append("pageSize",this.shopParams.pageSize.toString()),this.shopParams.search&&(e=e.append("search",this.shopParams.search)),this.http.get(this.baseUrl+"products",{observe:"response",params:e}).pipe(Object(p.a)(t=>(this.products=[...this.products,...t.body.data],this.pagination=t.body,this.pagination)))}setShopParams(t){this.shopParams=t}getShopParams(){return this.shopParams}getProduct(t){const e=this.products.find(e=>e.id===t);return e?Object(b.a)(e):this.http.get(this.baseUrl+"products/"+t)}getBrands(){return this.brands.length>0?Object(b.a)(this.brands):this.http.get(this.baseUrl+"products/brands").pipe(Object(p.a)(t=>(this.brands=t,t)))}getTypes(){return this.types.length>0?Object(b.a)(this.types):this.http.get(this.baseUrl+"products/types").pipe(Object(p.a)(t=>(this.types=t,t)))}}return t.\u0275fac=function(e){return new(e||t)(o.Wb(r.b))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=n("tc9g"),g=n("cAP4");function m(t,e){if(1&t){const t=o.Tb();o.Sb(0,"div",2),o.Sb(1,"div",3),o.Nb(2,"img",4),o.Rb(),o.Sb(3,"div",3),o.Sb(4,"h3"),o.Ac(5),o.Rb(),o.Sb(6,"p",5),o.Ac(7),o.dc(8,"currency"),o.Rb(),o.Sb(9,"div",6),o.Sb(10,"i",7),o.ac("click",(function(){return o.sc(t),o.cc().decrementQuantity()})),o.Rb(),o.Sb(11,"span",8),o.Ac(12),o.Rb(),o.Sb(13,"i",9),o.ac("click",(function(){return o.sc(t),o.cc().incrementQuantity()})),o.Rb(),o.Sb(14,"button",10),o.ac("click",(function(){return o.sc(t),o.cc().addItemToBasket()})),o.Ac(15,"Add to Cart"),o.Rb(),o.Rb(),o.Rb(),o.Sb(16,"div",11),o.Sb(17,"div",12),o.Sb(18,"h4"),o.Ac(19,"Description"),o.Rb(),o.Sb(20,"p"),o.Ac(21),o.Rb(),o.Rb(),o.Rb(),o.Rb()}if(2&t){const t=o.cc();o.Bb(2),o.jc("src",t.product.pictureUrl,o.uc),o.jc("alt",t.product.name),o.Bb(3),o.Bc(t.product.name),o.Bb(2),o.Bc(o.ec(8,6,t.product.price)),o.Bb(5),o.Bc(t.quantity),o.Bb(9),o.Bc(t.product.description)}}let S=(()=>{class t{constructor(t,e,n,s){this.shopService=t,this.activatedRoute=e,this.bcService=n,this.basketService=s,this.quantity=1,this.bcService.set("@productDetails"," ")}ngOnInit(){this.loadProduct()}addItemToBasket(){this.basketService.addItemToBasket(this.product,this.quantity)}incrementQuantity(){this.quantity++}decrementQuantity(){this.quantity>1&&this.quantity--}loadProduct(){this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get("id")).subscribe(t=>{this.product=t,this.bcService.set("@productDetails",t.name)},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(d),o.Mb(i.a),o.Mb(l.c),o.Mb(g.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"img-fluid","w-100",3,"src","alt"],[2,"font-size","2em"],[1,"d-flex","justify-content-start","align-items-center"],[1,"fa","fa-minus-circle","text-warning","mr-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"font-weight-bold",2,"font-size","1.5em"],[1,"fa","fa-plus-circle","text-warning","mx-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"btn","btn-outline-primary","btn-lg","ml-4",3,"click"],[1,"row","mt-5"],[1,"col-12","ml-3"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.yc(1,m,22,8,"div",1),o.Rb()),2&t&&(o.Bb(1),o.ic("ngIf",e.product))},directives:[s.m],pipes:[s.d],styles:[""]}),t})();function f(t,e){if(1&t&&(o.Sb(0,"span"),o.Ac(1," Showing "),o.Sb(2,"strong"),o.Ac(3),o.Rb(),o.Ac(4," of "),o.Sb(5,"strong"),o.Ac(6),o.Rb(),o.Ac(7," results"),o.Rb()),2&t){const t=o.cc();o.Bb(3),o.Dc(" ",(t.pageNumber-1)*t.pageSize+1," - ",t.pageNumber*(t.pageSize<t.totalCount?t.pageSize:t.totalCount)," "),o.Bb(3),o.Bc(t.totalCount)}}function v(t,e){1&t&&(o.Sb(0,"span"),o.Ac(1," There are "),o.Sb(2,"strong"),o.Ac(3,"0"),o.Rb(),o.Ac(4," results "),o.Rb())}let y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["app-paging-header"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize",totalCount:"totalCount"},decls:3,vars:2,consts:[[4,"ngIf"]],template:function(t,e){1&t&&(o.Sb(0,"header"),o.yc(1,f,8,3,"span",0),o.yc(2,v,5,0,"span",0),o.Rb()),2&t&&(o.Bb(1),o.ic("ngIf",e.totalCount&&e.totalCount>0),o.Bb(1),o.ic("ngIf",0===e.totalCount))},directives:[s.m],styles:[""]}),t})();var P=n("3Pt+");let R=(()=>{class t{constructor(t){this.basketService=t}ngOnInit(){}addItemToBasket(){this.basketService.addItemToBasket(this.product)}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(g.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-product-item"]],inputs:{product:"product"},decls:14,vars:8,consts:[[1,"card","h-100","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid","bg-info",3,"src","alt"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],["type","button",1,"btn","btn-primary","fa","fa-shopping-cart","mr-2",3,"click"],["type","button",1,"btn","btn-primary",3,"routerLink"],[1,"card-body","d-flex","flex-column"],[3,"routerLink"],[1,"text-uppercase"],[1,"mb-2"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Nb(2,"img",2),o.Sb(3,"div",3),o.Sb(4,"button",4),o.ac("click",(function(){return e.addItemToBasket()})),o.Rb(),o.Sb(5,"button",5),o.Ac(6,"View"),o.Rb(),o.Rb(),o.Rb(),o.Sb(7,"div",6),o.Sb(8,"a",7),o.Sb(9,"h6",8),o.Ac(10),o.Rb(),o.Rb(),o.Sb(11,"span",9),o.Ac(12),o.dc(13,"currency"),o.Rb(),o.Rb(),o.Rb()),2&t&&(o.Bb(2),o.jc("src",e.product.pictureUrl,o.uc),o.jc("alt",e.product.name),o.Bb(3),o.kc("routerLink","/shop/",e.product.id,""),o.Bb(3),o.kc("routerLink","/shop/",e.product.id,""),o.Bb(2),o.Bc(e.product.name),o.Bb(2),o.Bc(o.ec(13,6,e.product.price)))},directives:[i.d,i.f],pipes:[s.d],styles:[".btn[_ngcontent-%COMP%]{width:30%;height:40px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:hsla(0,0%,100%,.5);opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translateX(-20px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{transform:translateX(20px)}"]}),t})();var C=n("Lm2G");let B=(()=>{class t{constructor(){this.pageChanged=new o.n}ngOnInit(){}onPagerChange(t){this.pageChanged.emit(t.page)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["app-pager"]],inputs:{totalCount:"totalCount",pageSize:"pageSize",pageNumber:"pageNumber"},outputs:{pageChanged:"pageChanged"},decls:1,vars:4,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","ngModel","itemsPerPage","pageChanged"]],template:function(t,e){1&t&&(o.Sb(0,"pagination",0),o.ac("pageChanged",(function(t){return e.onPagerChange(t)})),o.Rb()),2&t&&o.ic("boundaryLinks",!0)("totalItems",e.totalCount)("ngModel",e.pageNumber)("itemsPerPage",e.pageSize)},directives:[C.a,P.i,P.k],styles:[""]}),t})();const k=["search"];function w(t,e){if(1&t&&(o.Sb(0,"option",16),o.Ac(1),o.Rb()),2&t){const t=e.$implicit,n=o.cc(2);o.ic("selected",n.shopParams.sort===t.value)("value",t.value),o.Bb(1),o.Bc(t.name)}}function I(t,e){if(1&t){const t=o.Tb();o.Sb(0,"li",17),o.ac("click",(function(){o.sc(t);const n=e.$implicit;return o.cc(2).onBrandSelected(n.id)})),o.Ac(1),o.Rb()}if(2&t){const t=e.$implicit,n=o.cc(2);o.Eb("active",t.id===n.shopParams.brandId),o.ic("value",t.id),o.Bb(1),o.Cc(" ",t.name," ")}}function O(t,e){if(1&t){const t=o.Tb();o.Sb(0,"li",17),o.ac("click",(function(){o.sc(t);const n=e.$implicit;return o.cc(2).onTypeSelected(n.id)})),o.Ac(1),o.Rb()}if(2&t){const t=e.$implicit,n=o.cc(2);o.Eb("active",t.id===n.shopParams.typeId),o.ic("value",t.id),o.Bb(1),o.Cc(" ",t.name," ")}}function A(t,e){if(1&t){const t=o.Tb();o.Qb(0),o.Sb(1,"h5",10),o.Ac(2,"Sort"),o.Rb(),o.Sb(3,"select",11),o.ac("change",(function(e){return o.sc(t),o.cc().onSortSelected(e.target.value)})),o.yc(4,w,2,3,"option",12),o.Rb(),o.Sb(5,"h5",13),o.Ac(6,"Brands"),o.Rb(),o.Sb(7,"ul",14),o.yc(8,I,2,4,"li",15),o.Rb(),o.Sb(9,"h5",13),o.Ac(10,"Types"),o.Rb(),o.Sb(11,"ul",14),o.yc(12,O,2,4,"li",15),o.Rb(),o.Pb()}if(2&t){const t=o.cc();o.Bb(4),o.ic("ngForOf",t.sortOptions),o.Bb(4),o.ic("ngForOf",t.brands),o.Bb(4),o.ic("ngForOf",t.types)}}function N(t,e){if(1&t){const t=o.Tb();o.Sb(0,"div",18),o.Sb(1,"input",19,20),o.ac("keyup.enter",(function(){return o.sc(t),o.cc().onSearch()})),o.Rb(),o.Sb(3,"button",21),o.ac("click",(function(){return o.sc(t),o.cc().onSearch()})),o.Ac(4,"Search"),o.Rb(),o.Sb(5,"button",22),o.ac("click",(function(){return o.sc(t),o.cc().onReset()})),o.Ac(6,"Reset"),o.Rb(),o.Rb()}}function x(t,e){if(1&t&&(o.Sb(0,"div",23),o.Nb(1,"app-product-item",24),o.Rb()),2&t){const t=e.$implicit;o.Bb(1),o.ic("product",t)}}function M(t,e){if(1&t){const t=o.Tb();o.Sb(0,"div",25),o.Sb(1,"app-pager",26),o.ac("pageChanged",(function(e){return o.sc(t),o.cc().onPageChange(e)})),o.Rb(),o.Rb()}if(2&t){const t=o.cc();o.Bb(1),o.ic("pageSize",t.shopParams.pageSize)("totalCount",t.totalCount)("pageNumber",t.shopParams.pageNumber)}}const T=[{path:"",component:(()=>{class t{constructor(t){this.shopService=t,this.sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low to High",value:"priceAsc"},{name:"Price: High to Low",value:"priceDesc"}],this.shopParams=this.shopService.getShopParams()}ngOnInit(){this.getProducts(!0),this.getBrands(),this.getTypes()}getProducts(t=!1){this.shopService.getProducts(t).subscribe(t=>{this.products=t.data,this.totalCount=t.count},t=>{console.log(t)})}getBrands(){this.shopService.getBrands().subscribe(t=>{this.brands=[{id:0,name:"All"},...t]},t=>{console.log(t)})}getTypes(){this.shopService.getTypes().subscribe(t=>{this.types=[{id:0,name:"All"},...t]},t=>{console.log(t)})}onBrandSelected(t){const e=this.shopService.getShopParams();e.brandId=t,e.pageNumber=1,this.shopService.setShopParams(e),this.getProducts()}onTypeSelected(t){const e=this.shopService.getShopParams();e.typeId=t,e.pageNumber=1,this.shopService.setShopParams(e),this.getProducts()}onSortSelected(t){const e=this.shopService.getShopParams();e.sort=t,this.shopService.setShopParams(e),this.getProducts()}onPageChange(t){const e=this.shopService.getShopParams();e.pageNumber!==t&&(e.pageNumber=t,this.shopService.setShopParams(e),this.getProducts(!0))}onSearch(){const t=this.shopService.getShopParams();t.search=this.searchTerm.nativeElement.value,t.pageNumber=1,this.shopService.setShopParams(t),this.getProducts()}onReset(){this.searchTerm.nativeElement.value="",this.shopParams=new u,this.shopService.setShopParams(this.shopParams),this.getProducts()}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(d))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-shop"]],viewQuery:function(t,e){var n;1&t&&o.Fc(k,!0),2&t&&o.qc(n=o.bc())&&(e.searchTerm=n.first)},decls:11,vars:7,consts:[[1,"container","mt-3"],[1,"row"],[1,"col-3"],[4,"ngIf"],[1,"col-9"],[1,"d-flex","justify-content-between","align-intems-center-pb-2"],[3,"pageNumber","pageSize","totalCount"],["class","form-inline",4,"ngIf"],["class","col-4 mb-4",4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],[1,"text-warning","ml-3","mt-2","mb-3"],[1,"custom-select","mb-4",3,"change"],[3,"selected","value",4,"ngFor","ngForOf"],[1,"text-warning","ml-3"],[1,"list-group","my-3"],["class","list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[3,"selected","value"],[1,"list-group-item",3,"value","click"],[1,"form-inline"],["placeholder","Search",1,"form-control","mr-2",2,"width","300px",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary","my-2",3,"click"],[1,"btn","btn-outline-success","my-2","ml-2",3,"click"],[1,"col-4","mb-4"],[3,"product"],[1,"d-flex","justify-content-center"],[3,"pageSize","totalCount","pageNumber","pageChanged"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"section",2),o.yc(3,A,13,3,"ng-container",3),o.Rb(),o.Sb(4,"section",4),o.Sb(5,"div",5),o.Nb(6,"app-paging-header",6),o.yc(7,N,7,0,"div",7),o.Rb(),o.Sb(8,"div",1),o.yc(9,x,2,1,"div",8),o.Rb(),o.yc(10,M,2,3,"div",9),o.Rb(),o.Rb(),o.Rb()),2&t&&(o.Bb(3),o.ic("ngIf",e.types&&e.brands),o.Bb(3),o.ic("pageNumber",e.shopParams.pageNumber)("pageSize",e.shopParams.pageSize)("totalCount",e.totalCount),o.Bb(1),o.ic("ngIf",e.products),o.Bb(2),o.ic("ngForOf",e.products),o.Bb(1),o.ic("ngIf",e.totalCount&&e.totalCount>0))},directives:[s.m,y,s.l,P.l,P.p,R,B],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:10px 20px;font-size:1.1em}.list-group-item[_ngcontent-%COMP%]:focus{outline:none}.list-group-item.active[_ngcontent-%COMP%]{border-radius:10px}.list-group-item[_ngcontent-%COMP%]:not(.active):hover{color:#fff;background-color:rgba(47,164,231,.62);border-radius:10px}"]}),t})()},{path:":id",component:S,data:{breadcrumb:{alias:"productDetails"}}}];let z=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)},imports:[[i.g.forChild(T)],i.g]}),t})();n.d(e,"ShopModule",(function(){return j}));let j=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)},imports:[[s.c,c.a,z]]}),t})()}}]);