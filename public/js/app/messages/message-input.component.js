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
var MessageInputComponent = (function () {
    function MessageInputComponent(messageService, errorService) {
        this.messageService = messageService;
        this.errorService = errorService;
        this.message = null;
    }
    MessageInputComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.message) {
            this.message.content = form.content;
            this.messageService.updateMessage(this.message)
                .subscribe(function (data) { return console.log(data); }, function (error) { return _this.errorService.handleError(error); });
            this.message = null;
        }
        else {
            var message = new message_1.Message(form.content, null, 'berra');
            this.messageService.addMessage(message)
                .subscribe(function (data) {
                console.log(data);
                _this.messageService.messages.push(data);
            }, function (error) { return _this.errorService.handleError(error); });
        }
    };
    MessageInputComponent.prototype.onCancel = function () {
        this.message = null;
    };
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.messageIsEdit.subscribe(function (message) {
            _this.message = message;
        });
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-message-input',
            template: "\n            <section class=\"col-md-8 col-md-offset-2\">\n                <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n                    <div class=\"form-group\">\n                        <label for=\"content\">Content</label>\n                        <input ngControl=\"content\" type=\"text\" class=\"form-control\" id=\"content\" #input [ngModel]=\"message?.content\">\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-primary\">{{ !message ? 'Send Message' : 'Save Message' }}</button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCancel()\" *ngIf=\"message\">Cancel</button>\n                </form>       \n            </section>\n    "
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService, error_service_1.ErrorService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsd0JBQXdCLFdBQVcsQ0FBQyxDQUFBO0FBQ3BDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBa0J2RDtJQUdJLCtCQUFvQixjQUE4QixFQUFVLFlBQTBCO1FBQWxFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRnRGLFlBQU8sR0FBWSxJQUFJLENBQUM7SUFFaUUsQ0FBQztJQUUxRix3Q0FBUSxHQUFSLFVBQVMsSUFBUTtRQUFqQixpQkFvQkM7UUFuQkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQzNCLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXBDLENBQW9DLENBQ2hELENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBTSxPQUFPLEdBQVksSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztpQkFDdEIsU0FBUyxDQUNOLFVBQUEsSUFBSTtnQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxFQUNMLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXBDLENBQW9DLENBQ2hELENBQUM7UUFDdEIsQ0FBQztJQUNMLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDdkMsVUFBQSxPQUFPO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBckRMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSw4dEJBV1Q7U0FDSixDQUFDOzs2QkFBQTtJQXVDRiw0QkFBQztBQUFELENBdENBLEFBc0NDLElBQUE7QUF0Q1ksNkJBQXFCLHdCQXNDakMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL21lc3NhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZS1pbnB1dCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYudmFsdWUpXCIgI2Y9XCJuZ0Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGVudFwiPkNvbnRlbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiY29udGVudFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImNvbnRlbnRcIiAjaW5wdXQgW25nTW9kZWxdPVwibWVzc2FnZT8uY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+e3sgIW1lc3NhZ2UgPyAnU2VuZCBNZXNzYWdlJyA6ICdTYXZlIE1lc3NhZ2UnIH19PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIChjbGljayk9XCJvbkNhbmNlbCgpXCIgKm5nSWY9XCJtZXNzYWdlXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+ICAgICAgIFxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbWVzc2FnZTogTWVzc2FnZSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsIHByaXZhdGUgZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XHJcblxyXG4gICAgb25TdWJtaXQoZm9ybTphbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5jb250ZW50ID0gZm9ybS5jb250ZW50O1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UodGhpcy5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlOiBNZXNzYWdlID0gbmV3IE1lc3NhZ2UoZm9ybS5jb250ZW50LCBudWxsLCAnYmVycmEnKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGRNZXNzYWdlKG1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UubWVzc2FnZXMucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5tZXNzYWdlSXNFZGl0LnN1YnNjcmliZShcclxuICAgICAgICAgICAgbWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
