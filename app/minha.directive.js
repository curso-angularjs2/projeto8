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
var MinhaDirective = (function () {
    function MinhaDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._defaultColor = 'red';
    }
    Object.defineProperty(MinhaDirective.prototype, "defaultColor", {
        set: function (colorName) {
            this._defaultColor = colorName || this._defaultColor;
        },
        enumerable: true,
        configurable: true
    });
    MinhaDirective.prototype.onMouseEnter = function () {
        this.mudarCor(this.corDaminhaDirective || this._defaultColor);
    };
    MinhaDirective.prototype.onMouseLeave = function () {
        this.mudarCor(null);
    };
    MinhaDirective.prototype.mudarCor = function (color) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], MinhaDirective.prototype, "defaultColor", null);
    __decorate([
        core_1.Input('minhaDirective'), 
        __metadata('design:type', String)
    ], MinhaDirective.prototype, "corDaminhaDirective", void 0);
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MinhaDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MinhaDirective.prototype, "onMouseLeave", null);
    MinhaDirective = __decorate([
        core_1.Directive({
            selector: '[minhaDirective]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MinhaDirective);
    return MinhaDirective;
}());
exports.MinhaDirective = MinhaDirective;
//# sourceMappingURL=minha.directive.js.map