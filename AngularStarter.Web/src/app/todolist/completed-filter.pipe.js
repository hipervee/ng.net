"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var lodash_1 = require("lodash");
var CompletedFilterPipe = (function () {
    function CompletedFilterPipe() {
    }
    CompletedFilterPipe.prototype.transform = function (todos, done) {
        if (done) {
            return todos;
        }
        return lodash_1.filter(todos, { done: done });
    };
    return CompletedFilterPipe;
}());
CompletedFilterPipe = __decorate([
    core_1.Pipe({
        name: 'asCompletedFilter'
    })
], CompletedFilterPipe);
exports.CompletedFilterPipe = CompletedFilterPipe;
//# sourceMappingURL=completed-filter.pipe.js.map