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
var grid_1 = require('modules/grid/grid');
var CountyProfile = (function () {
    function CountyProfile() {
        this.county = {
            name: "Waukesha",
            DMA: "Milwaukee",
            VAP: 303917,
            VoteGoal: 177615,
            May2016RJ: 148032
        };
    }
    CountyProfile = __decorate([
        core_1.Component({
            selector: 'county-profile',
            template: "\n\t\t<h1>{{county.name}}</h1>\n\t\t<p>Total Population: </p>\n\t\t<p>Total Voting Age Population: (% of Statewide VAP)</p>\n\t\t<p>Total Registered Voters: (% of VAP) (% of Statewide Registered Voters)</p>\n\t\t<p>2016 Vote Goal: (% of 2016 Projected Turnout) (% of Statewide GOP Vote Goal)</p>\n\t\t<p>2016 Projected Turnout: (% of Registered Voters) (% of VAP)</p>\n\t\t<p>GOP Delta from 2012: (% Increase/Decrease)</p>\n\t\t<p>Total Vote Delta from 2012: (% Increase/Decrease)</p>\n\t\t<p>GOP Delta from 2008: (% Increase/Decrease)</p>\n\t\t<p>Total Vote Delta from 2008: (% Increase/Decrease)</p>\n\t\t<p>Total Population By Ethnicity: </p>\n\t\t<p>Total Population By Religion: </p>\n\t\t<p>Total Population By Rural/Urban/Suburban: </p>\n\t\t<p>Breakout Into Relevant Groups: </p>\n\t\t<p>County GOP Leadership: </p>\n\t\t<p>Trump County Leadership: </p>\n\t\t<p>Congressional District Leadership: </p>\n\t",
            directives: [grid_1.Grid]
        }), 
        __metadata('design:paramtypes', [])
    ], CountyProfile);
    return CountyProfile;
}());
exports.CountyProfile = CountyProfile;
//# sourceMappingURL=county-profile.js.map