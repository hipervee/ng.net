"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var index_1 = require("./index");
var TodolistModule = (function () {
    function TodolistModule() {
    }
    return TodolistModule;
}());
TodolistModule = __decorate([
    core_1.NgModule({
        declarations: [
            index_1.CompletedFilterPipe,
            index_1.TodolistComponent
        ],
        imports: [
            forms_1.FormsModule,
            platform_browser_1.BrowserModule
        ],
        exports: [
            index_1.CompletedFilterPipe,
            index_1.TodolistComponent
        ]
    })
], TodolistModule);
exports.TodolistModule = TodolistModule;
//# sourceMappingURL=todolist.module.js.map