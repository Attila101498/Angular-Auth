"use strict";(self.webpackChunkangular_auth=self.webpackChunkangular_auth||[]).push([[452],{5452:(B,b,s)=>{s.r(b),s.d(b,{UsersModule:()=>m});var u=s(6895),r=s(433),o=s(9230),f=s(590),t=s(8256),Z=s(9949);function h(e,i){1&e&&(t.TgZ(0,"div"),t._uU(1,"First Name is required"),t.qZA())}function x(e,i){if(1&e&&(t.TgZ(0,"div",16),t.YNc(1,h,2,0,"div",10),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.f.firstName.errors.required)}}function A(e,i){1&e&&(t.TgZ(0,"div"),t._uU(1,"Last Name is required"),t.qZA())}function T(e,i){if(1&e&&(t.TgZ(0,"div",16),t.YNc(1,A,2,0,"div",10),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.f.lastName.errors.required)}}function U(e,i){1&e&&(t.TgZ(0,"div"),t._uU(1,"Userame is required"),t.qZA())}function q(e,i){if(1&e&&(t.TgZ(0,"div",16),t.YNc(1,U,2,0,"div",10),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.f.username.errors.required)}}function C(e,i){1&e&&(t.TgZ(0,"em"),t._uU(1,"(Leave blank to keep the same password)"),t.qZA())}function N(e,i){1&e&&(t.TgZ(0,"div"),t._uU(1,"Password is required"),t.qZA())}function I(e,i){1&e&&(t.TgZ(0,"div"),t._uU(1,"Password must be at least 6 characters"),t.qZA())}function J(e,i){if(1&e&&(t.TgZ(0,"div",16),t.YNc(1,N,2,0,"div",10),t.YNc(2,I,2,0,"div",10),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",n.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",n.f.password.errors.minlength)}}function w(e,i){1&e&&t._UZ(0,"span",17)}const _=function(e){return{"is-invalid":e}};function y(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"form",2),t.NdJ("ngSubmit",function(){t.CHM(n);const g=t.oxw();return t.KtG(g.onSubmit())}),t.TgZ(1,"div",3)(2,"div",4)(3,"label",5),t._uU(4,"First Name"),t.qZA(),t._UZ(5,"input",6),t.YNc(6,x,2,1,"div",7),t.qZA(),t.TgZ(7,"div",4)(8,"label",5),t._uU(9,"Last Name"),t.qZA(),t._UZ(10,"input",8),t.YNc(11,T,2,1,"div",7),t.qZA()(),t.TgZ(12,"div",3)(13,"div",4)(14,"label",5),t._uU(15,"Username"),t.qZA(),t._UZ(16,"input",9),t.YNc(17,q,2,1,"div",7),t.qZA(),t.TgZ(18,"div",4)(19,"label",5),t._uU(20," Password "),t.YNc(21,C,2,0,"em",10),t.qZA(),t._UZ(22,"input",11),t.YNc(23,J,3,2,"div",7),t.qZA(),t.TgZ(24,"div",12)(25,"button",13),t.YNc(26,w,1,0,"span",14),t._uU(27," Save "),t.qZA(),t.TgZ(28,"a",15),t._uU(29,"Cancel"),t.qZA()()()()}if(2&e){const n=t.oxw();t.Q6J("formGroup",n.form),t.xp6(5),t.Q6J("ngClass",t.VKq(12,_,n.submitted&&n.f.firstName.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.firstName.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(14,_,n.submitted&&n.f.lastName.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.lastName.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(16,_,n.submitted&&n.f.username.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.username.errors),t.xp6(4),t.Q6J("ngIf",n.id),t.xp6(1),t.Q6J("ngClass",t.VKq(18,_,n.submitted&&n.f.password.errors)),t.xp6(1),t.Q6J("ngIf",n.submitted&&n.f.password.errors),t.xp6(2),t.Q6J("disabled",n.submitting),t.xp6(1),t.Q6J("ngIf",n.submitting)}}function Q(e,i){1&e&&(t.TgZ(0,"div",18),t._UZ(1,"span",19),t.qZA())}class a{constructor(i,n,d,g,v){this.formBuilder=i,this.route=n,this.router=d,this.accountService=g,this.alertService=v,this.loading=!1,this.submitting=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.form=this.formBuilder.group({firstName:["",r.kI.required],lastName:["",r.kI.required],username:["",r.kI.required],password:["",[r.kI.minLength(6),...this.id?[]:[r.kI.required]]]}),this.title="Add User",this.id&&(this.title="Edit User",this.loading=!0,this.accountService.getById(this.id).pipe((0,f.P)()).subscribe(i=>{this.form.patchValue(i),this.loading=!1}))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.saveUser().pipe((0,f.P)()).subscribe({next:()=>{this.alertService.success("User saved",{keepAfterRouteChange:!0}),this.router.navigateByUrl("/users")},error:i=>{this.alertService.error(i),this.submitting=!1}}))}saveUser(){return this.id?this.accountService.update(this.id,this.form.value):this.accountService.register(this.form.value)}}a.\u0275fac=function(i){return new(i||a)(t.Y36(r.qu),t.Y36(o.gz),t.Y36(o.F0),t.Y36(Z.B),t.Y36(Z.c))},a.\u0275cmp=t.Xpm({type:a,selectors:[["ng-component"]],decls:4,vars:3,consts:[[3,"formGroup","ngSubmit",4,"ngIf"],["class","text-center m-5",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col","mb-3"],[1,"form-label"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],[4,"ngIf"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"mb-3"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"text-center","m-5"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(i,n){1&i&&(t.TgZ(0,"h1"),t._uU(1),t.qZA(),t.YNc(2,y,30,20,"form",0),t.YNc(3,Q,2,0,"div",1)),2&i&&(t.xp6(1),t.Oqu(n.title),t.xp6(1),t.Q6J("ngIf",!n.loading),t.xp6(1),t.Q6J("ngIf",n.loading))},dependencies:[u.mk,u.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,o.rH],encapsulation:2});class p{}function Y(e,i){1&e&&t._UZ(0,"span",10)}function E(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1,"Delete"),t.qZA())}function L(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",6)(8,"a",7),t._uU(9,"Edit"),t.qZA(),t.TgZ(10,"button",8),t.NdJ("click",function(){const v=t.CHM(n).$implicit,F=t.oxw();return t.KtG(F.deleteUser(v.id))}),t.YNc(11,Y,1,0,"span",9),t.YNc(12,E,2,0,"span",5),t.qZA()()()}if(2&e){const n=i.$implicit;t.xp6(2),t.Oqu(n.firstName),t.xp6(2),t.Oqu(n.lastName),t.xp6(2),t.Oqu(n.username),t.xp6(2),t.MGl("routerLink","edit/",n.id,""),t.xp6(2),t.Q6J("disabled",n.isDeleting),t.xp6(1),t.Q6J("ngIf",n.isDeleting),t.xp6(1),t.Q6J("ngIf",!n.isDeleting)}}function S(e,i){1&e&&(t.TgZ(0,"tr")(1,"td",11),t._UZ(2,"span",12),t.qZA()())}p.\u0275fac=function(i){return new(i||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[o.lC],encapsulation:2});class l{constructor(i){this.accountService=i}ngOnInit(){this.accountService.getAll().pipe((0,f.P)()).subscribe(i=>this.users=i)}deleteUser(i){const n=this.users.find(d=>d.id===i);confirm("Are you sure, you want to delete this user?")&&(n.isDeleting=this.accountService.delete(i).pipe((0,f.P)()).subscribe(()=>this.users=this.users.filter(d=>d.id!==i)))}}l.\u0275fac=function(i){return new(i||l)(t.Y36(Z.B))},l.\u0275cmp=t.Xpm({type:l,selectors:[["ng-component"]],decls:17,vars:2,consts:[["routerLink","add",1,"btn","btn-sm","btn-success","mb-2"],[1,"table","table-striped"],[2,"width","30%"],[2,"width","10%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","me-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger","btn-delete-user",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(i,n){1&i&&(t.TgZ(0,"h1"),t._uU(1,"Users"),t.qZA(),t.TgZ(2,"a",0),t._uU(3,"Add User"),t.qZA(),t.TgZ(4,"table",1)(5,"thead")(6,"tr")(7,"th",2),t._uU(8,"First Name"),t.qZA(),t.TgZ(9,"th",2),t._uU(10,"Last Name"),t.qZA(),t.TgZ(11,"th",2),t._uU(12,"Username"),t.qZA(),t._UZ(13,"th",3),t.qZA()(),t.TgZ(14,"tbody"),t.YNc(15,L,13,7,"tr",4),t.YNc(16,S,3,0,"tr",5),t.qZA()()),2&i&&(t.xp6(15),t.Q6J("ngForOf",n.users),t.xp6(1),t.Q6J("ngIf",!n.users))},dependencies:[u.sg,u.O5,o.rH],encapsulation:2});const k=[{path:"",component:p,children:[{path:"",component:l},{path:"add",component:a},{path:"edit/:id",component:a}]}];class c{}c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[o.Bz.forChild(k),o.Bz]});class m{}m.\u0275fac=function(i){return new(i||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[u.ez,r.UX,c]})}}]);