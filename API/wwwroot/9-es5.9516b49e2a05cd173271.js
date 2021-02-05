function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var c=e[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+p+5":function(t,e,r){"use strict";r.r(e);var c,b=r("ofXK"),i=r("tyNb"),n=r("fXoL"),o=r("AytR"),s=r("tk/3"),a=((c=function(){function t(e){_classCallCheck(this,t),this.http=e,this.baseUrl=o.a.apiUrl}return _createClass(t,[{key:"getOrder",value:function(t){return this.http.get(this.baseUrl+"orders/"+t)}},{key:"getOrders",value:function(){return this.http.get(this.baseUrl+"orders")}}]),t}()).\u0275fac=function(t){return new(t||c)(n.Wb(s.b))},c.\u0275prov=n.Ib({token:c,factory:c.\u0275fac,providedIn:"root"}),c),d=r("tc9g");function l(t,e){if(1&t&&(n.Sb(0,"tr"),n.Sb(1,"th",16),n.Sb(2,"div",17),n.Nb(3,"img",18),n.Sb(4,"div",19),n.Sb(5,"h5",20),n.Ac(6),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(7,"td",21),n.Sb(8,"strong"),n.Ac(9),n.dc(10,"currency"),n.Rb(),n.Rb(),n.Sb(11,"td",21),n.Sb(12,"span",22),n.Ac(13),n.Rb(),n.Rb(),n.Sb(14,"td",21),n.Sb(15,"strong"),n.Ac(16),n.dc(17,"currency"),n.Rb(),n.Rb(),n.Rb()),2&t){var r=e.$implicit;n.Bb(3),n.jc("src",r.pictureUrl,n.uc),n.jc("alt",r.productName),n.Bb(3),n.Cc(" ",r.productName," "),n.Bb(3),n.Bc(n.ec(10,6,r.price)),n.Bb(4),n.Bc(r.quantity),n.Bb(3),n.Bc(n.ec(17,8,r.price*r.quantity))}}function u(t,e){if(1&t&&(n.Sb(0,"div",2),n.Sb(1,"div",3),n.Sb(2,"div"),n.Sb(3,"div",4),n.Sb(4,"table",5),n.Sb(5,"thead"),n.Sb(6,"tr"),n.Sb(7,"th",6),n.Sb(8,"div",7),n.Ac(9,"Product"),n.Rb(),n.Rb(),n.Sb(10,"th",6),n.Sb(11,"div",8),n.Ac(12,"Price"),n.Rb(),n.Rb(),n.Sb(13,"th",6),n.Sb(14,"div",8),n.Ac(15,"Quantity"),n.Rb(),n.Rb(),n.Sb(16,"th",6),n.Sb(17,"div",8),n.Ac(18,"Total"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(19,"tbody"),n.yc(20,l,18,10,"tr",9),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(21,"div",10),n.Sb(22,"div",11),n.Ac(23,"Order summary"),n.Rb(),n.Sb(24,"div",12),n.Sb(25,"ul",13),n.Sb(26,"li",14),n.Sb(27,"strong",15),n.Ac(28,"Order subtotal"),n.Rb(),n.Sb(29,"strong"),n.Ac(30),n.dc(31,"currency"),n.Rb(),n.Rb(),n.Sb(32,"li",14),n.Sb(33,"strong",15),n.Ac(34,"Shipping and handling"),n.Rb(),n.Sb(35,"strong"),n.Ac(36),n.dc(37,"currency"),n.Rb(),n.Rb(),n.Sb(38,"li",14),n.Sb(39,"strong",15),n.Ac(40,"Total"),n.Rb(),n.Sb(41,"strong"),n.Ac(42),n.dc(43,"currency"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb()),2&t){var r=n.cc();n.Bb(20),n.ic("ngForOf",r.order.orderItems),n.Bb(10),n.Bc(n.ec(31,4,r.order.subTotal)),n.Bb(6),n.Bc(n.ec(37,6,r.order.shippingPrice)),n.Bb(6),n.Bc(n.ec(43,8,r.order.total))}}var p,S=((p=function(){function t(e,r,c){_classCallCheck(this,t),this.orderService=e,this.activatedRoute=r,this.bcService=c,this.bcService.set("@orderDetails"," ")}return _createClass(t,[{key:"ngOnInit",value:function(){this.loadOrder()}},{key:"loadOrder",value:function(){var t=this,e=this.activatedRoute.snapshot.paramMap.get("id");this.orderService.getOrder(+e).subscribe((function(e){t.order=e,console.log(e),t.bcService.set("@orderDetails","Order# "+e.id+" - "+e.status)}),(function(t){console.log(t)}))}}]),t}()).\u0275fac=function(t){return new(t||p)(n.Mb(a),n.Mb(i.a),n.Mb(d.c))},p.\u0275cmp=n.Gb({type:p,selectors:[["app-order-detailed"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-8"],[1,"table-responsive"],[1,"table"],["scope","col",1,"border-0","bg-light"],[1,"p-2","text-uppercase"],[1,"py-2","text-uppercase"],[4,"ngFor","ngForOf"],[1,"col-4"],[1,"bg-light","px-4","py-3","text-uppercase","font-weight-bold"],[1,"p-4"],[1,"list-unstyled","mb-1"],[1,"d-flex","justify-content-between","py-3","border-bottom"],[1,"text-muted"],["scope","row"],[1,"p-2"],[1,"img-fluid",2,"max-height","50px",3,"src","alt"],[1,"ml-3","d-inline-block","align-middle"],[1,"mb-0"],[1,"align-middle"],[1,"font-weight-bold","px-2"]],template:function(t,e){1&t&&(n.Sb(0,"div",0),n.yc(1,u,44,10,"div",1),n.Rb()),2&t&&(n.Bb(1),n.ic("ngIf",e.order))},directives:[b.m,b.l],pipes:[b.d],styles:[""]}),p);function f(t,e){if(1&t&&(n.Sb(0,"tr",7),n.Sb(1,"td",8),n.Sb(2,"strong"),n.Ac(3),n.Rb(),n.Rb(),n.Sb(4,"td",8),n.Ac(5),n.dc(6,"date"),n.Rb(),n.Sb(7,"td",8),n.Ac(8),n.dc(9,"currency"),n.Rb(),n.Sb(10,"td",8),n.Ac(11),n.Rb(),n.Rb()),2&t){var r=e.$implicit;n.kc("routerLink","/orders/",r.id,""),n.Bb(3),n.Cc("# ",r.id,""),n.Bb(2),n.Bc(n.fc(6,5,r.orderDate,"medium")),n.Bb(3),n.Bc(n.ec(9,8,r.total)),n.Bb(3),n.Bc(r.status)}}var R,h,v=[{path:"",component:(R=function(){function t(e){_classCallCheck(this,t),this.orderService=e}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.orderService.getOrders().subscribe((function(e){t.orders=e}),(function(t){console.log(t)}))}}]),t}(),R.\u0275fac=function(t){return new(t||R)(n.Mb(a))},R.\u0275cmp=n.Gb({type:R,selectors:[["app-order"]],decls:19,vars:1,consts:[[1,"container","mt-5"],[1,"table-responsive"],[1,"table"],["scope","col",1,"border-0","bg-light"],[1,"p-2","px-3","text-uppercase"],[1,"py-2","text-uppercase"],["class","link",3,"routerLink",4,"ngFor","ngForOf"],[1,"link",3,"routerLink"],[1,"align-middle"]],template:function(t,e){1&t&&(n.Sb(0,"div",0),n.Sb(1,"div",1),n.Sb(2,"table",2),n.Sb(3,"thead"),n.Sb(4,"tr"),n.Sb(5,"th",3),n.Sb(6,"div",4),n.Ac(7,"Order"),n.Rb(),n.Rb(),n.Sb(8,"th",3),n.Sb(9,"div",5),n.Ac(10,"Date"),n.Rb(),n.Rb(),n.Sb(11,"th",3),n.Sb(12,"div",5),n.Ac(13,"Total"),n.Rb(),n.Rb(),n.Sb(14,"th",3),n.Sb(15,"div",5),n.Ac(16,"Status"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(17,"tbody"),n.yc(18,f,12,10,"tr",6),n.Rb(),n.Rb(),n.Rb(),n.Rb()),2&t&&(n.Bb(18),n.ic("ngForOf",e.orders))},directives:[b.l,i.d],pipes:[b.f,b.d],styles:["tr.link[_ngcontent-%COMP%]{cursor:pointer}tr.link[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}"]}),R)},{path:":id",component:S,data:{breadcrumb:{alias:"orderDetails"}}}],g=((h=function t(){_classCallCheck(this,t)}).\u0275mod=n.Kb({type:h}),h.\u0275inj=n.Jb({factory:function(t){return new(t||h)},imports:[[i.g.forChild(v)],i.g]}),h),y=r("PCNd");r.d(e,"OrderModule",(function(){return k}));var m,k=((m=function t(){_classCallCheck(this,t)}).\u0275mod=n.Kb({type:m}),m.\u0275inj=n.Jb({factory:function(t){return new(t||m)},imports:[[b.c,g,y.a]]}),m)}}]);