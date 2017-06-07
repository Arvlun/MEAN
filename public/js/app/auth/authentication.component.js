"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_service_1 = require('./auth.service');
var signup_component_1 = require('./signup.component');
var signin_component_1 = require('./signin.component');
var logout_component_1 = require('./logout.component');
var AuthenticationComponent = (function () {
    function AuthenticationComponent(authService) {
        this.authService = authService;
    }
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AuthenticationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-auth',
            template: "\n        <header class=\"row spacing\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-tabs\">\n                    <li><a [routerLink]=\"['./signup']\">Signup</a></li>\n                    <li><a [routerLink]=\"['./signin']\" *ngIf=\"!isLoggedIn()\">Signin</a></li>\n                    <li><a [routerLink]=\"['./logout']\" *ngIf=\"isLoggedIn()\">Signout</a></li>\n                </ul>\n            </nav>\n        </header>\n        <div class=\"row spacing\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n        .router-link-active {\n            color: #555;\n            cursor: default;\n            background-color: #fff;\n            border: 1px solid #ddd;\n            border-bottom-color: transparent;\n        }\n    "]
        }),
        router_1.Routes([
            { path: '/signup', component: signup_component_1.SignupComponent },
            { path: '/signin', component: signin_component_1.SigninComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent }
        ]), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFFNUQsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFtQ3JEO0lBQ0ksaUNBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCw0Q0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQXRDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLGlrQkFhVDtZQUNELFVBQVUsRUFBRSxDQUFFLDBCQUFpQixDQUFFO1lBQ2pDLE1BQU0sRUFBRSxDQUFDLG1PQVFSLENBQUM7U0FDTCxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ0osRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1lBQzdDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztZQUM3QyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7U0FDaEQsQ0FBQzs7K0JBQUE7SUFRRiw4QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksK0JBQXVCLDBCQU9uQyxDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlcywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gJy4vc2lnbnVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmluLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ291dENvbXBvbmVudCB9IGZyb20gJy4vbG9nb3V0LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LWF1dGgnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwicm93IHNwYWNpbmdcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLi9zaWdudXAnXVwiPlNpZ251cDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vc2lnbmluJ11cIiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIj5TaWduaW48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL2xvZ291dCddXCIgKm5nSWY9XCJpc0xvZ2dlZEluKClcIj5TaWdub3V0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHNwYWNpbmdcIj5cclxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6IFsgUk9VVEVSX0RJUkVDVElWRVMgXSxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAucm91dGVyLWxpbmstYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuQFJvdXRlcyhbXHJcbiAgICB7cGF0aDogJy9zaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9zaWduaW4nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9sb2dvdXQnLCBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudH1cclxuXSlcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlICkge31cclxuXHJcbiAgICBpc0xvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
