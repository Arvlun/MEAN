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
var message_1 = require('./message');
var message_service_1 = require('./message.service');
var error_service_1 = require('../errors/error.service');
var MessageComponent = (function () {
    function MessageComponent(messageService, errorService) {
        this.messageService = messageService;
        this.errorService = errorService;
        this.editClicked = new core_1.EventEmitter();
    }
    MessageComponent.prototype.onEdit = function () {
        this.messageService.editMessage(this.message);
    };
    MessageComponent.prototype.onDelete = function () {
        var _this = this;
        this.messageService.deleteMessage(this.message)
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this.errorService.handleError(error); });
    };
    MessageComponent.prototype.belongsToUser = function () {
        return localStorage.getItem('user') == this.message.userId;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MessageComponent.prototype, "editClicked", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-message',
            templateUrl: 'message.component.html',
            styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            display: inline-block;\n            text-align: right;\n            font-size: 12px;\n            width: 19%\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, error_service_1.ErrorService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFFdkUsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBcUJ2RDtJQUlHLDBCQUFxQixjQUE4QixFQUFVLFlBQTBCO1FBQWxFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRjdFLGdCQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFFdUMsQ0FBQztJQUUzRixpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzNCLFNBQVMsQ0FDUCxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXBDLENBQW9DLENBQy9DLENBQUM7SUFDekIsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUMvRCxDQUFDO0lBbkJEO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzt5REFBQTtJQXJCWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxNQUFNLEVBQUUsQ0FBQywwVEFhUixDQUFDO1NBQ0wsQ0FBQzs7d0JBQUE7SUFzQkYsdUJBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLHdCQUFnQixtQkFxQjVCLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3Iuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdtZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAuYXV0aG9yIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbmZpZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE5JVxyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQ29tcG9uZW50IHtcclxuICAgQElucHV0KCkgbWVzc2FnZTogTWVzc2FnZTtcclxuICAgQE91dHB1dCgpIGVkaXRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XHJcblxyXG4gICBvbkVkaXQoKSB7XHJcbiAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmVkaXRNZXNzYWdlKHRoaXMubWVzc2FnZSk7XHJcbiAgIH1cclxuXHJcbiAgIG9uRGVsZXRlKCkge1xyXG4gICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5kZWxldGVNZXNzYWdlKHRoaXMubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgfVxyXG5cclxuICAgYmVsb25nc1RvVXNlcigpIHtcclxuICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpID09IHRoaXMubWVzc2FnZS51c2VySWQ7XHJcbiAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
