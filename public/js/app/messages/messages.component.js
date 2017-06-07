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
var message_list_component_1 = require('./message-list.component');
var message_input_component_1 = require('./message-input.component');
var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-messages',
            template: "\n        <div class=\"row spacing\">\n            <my-message-input></my-message-input>\n        </div>\n        <div class=\"row spacing\">\n            <my-message-list></my-message-list>\n        <div>\n    ",
            directives: [message_list_component_1.MessageListComponent,
                message_input_component_1.MessageInputComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELHVDQUFxQywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2hFLHdDQUFzQywyQkFBMkIsQ0FBQyxDQUFBO0FBZ0JsRTtJQUFBO0lBQ0EsQ0FBQztJQWZEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUscU5BT1Q7WUFDRCxVQUFVLEVBQUUsQ0FBRSw2Q0FBb0I7Z0JBQ3BCLCtDQUFxQixDQUFFO1NBQ3hDLENBQUM7O3lCQUFBO0lBRUYsd0JBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLHlCQUFpQixvQkFDN0IsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVzc2FnZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZXMnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHNwYWNpbmdcIj5cclxuICAgICAgICAgICAgPG15LW1lc3NhZ2UtaW5wdXQ+PC9teS1tZXNzYWdlLWlucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxyXG4gICAgICAgICAgICA8bXktbWVzc2FnZS1saXN0PjwvbXktbWVzc2FnZS1saXN0PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogWyBNZXNzYWdlTGlzdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgTWVzc2FnZUlucHV0Q29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzQ29tcG9uZW50IHtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
