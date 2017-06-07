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
var error_1 = require('./error');
var ErrorService = (function () {
    function ErrorService() {
        this.errorOccured = new core_1.EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new error_1.Error(error.title, error.error.message);
        this.errorOccured.emit(errorData);
    };
    ErrorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ErrorService);
    return ErrorService;
}());
exports.ErrorService = ErrorService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9lcnJvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFFekQsc0JBQXNCLFNBQVMsQ0FBQyxDQUFBO0FBR2hDO0lBQUE7UUFFSSxpQkFBWSxHQUFHLElBQUksbUJBQVksRUFBUyxDQUFBO0lBTzVDLENBQUM7SUFMRyxrQ0FBVyxHQUFYLFVBQVksS0FBVTtRQUNsQixJQUFNLFNBQVMsR0FBRyxJQUFJLGFBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDN0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQVJMO1FBQUMsaUJBQVUsRUFBRTs7b0JBQUE7SUFVYixtQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksb0JBQVksZUFTeEIsQ0FBQSIsImZpbGUiOiJlcnJvcnMvZXJyb3Iuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRXJyb3IgfSBmcm9tICcuL2Vycm9yJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVycm9yU2VydmljZSB7XHJcblxyXG4gICAgZXJyb3JPY2N1cmVkID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKVxyXG5cclxuICAgIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBuZXcgRXJyb3IoZXJyb3IudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgdGhpcy5lcnJvck9jY3VyZWQuZW1pdChlcnJvckRhdGEpO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
