import {Component} from '@angular/core';
import {Grid, Column} from 'modules/grid/grid';

@Component({
	selector:			'county-profile',
	template:			`
		<h1>{{county.name}}</h1>
		<p>Total Population: </p>
		<p>Total Voting Age Population: (% of Statewide VAP)</p>
		<p>Total Registered Voters: (% of VAP) (% of Statewide Registered Voters)</p>
		<p>2016 Vote Goal: (% of 2016 Projected Turnout) (% of Statewide GOP Vote Goal)</p>
		<p>2016 Projected Turnout: (% of Registered Voters) (% of VAP)</p>
		<p>GOP Delta from 2012: (% Increase/Decrease)</p>
		<p>Total Vote Delta from 2012: (% Increase/Decrease)</p>
		<p>GOP Delta from 2008: (% Increase/Decrease)</p>
		<p>Total Vote Delta from 2008: (% Increase/Decrease)</p>
		<p>Total Population By Ethnicity: </p>
		<p>Total Population By Religion: </p>
		<p>Total Population By Rural/Urban/Suburban: </p>
		<p>Breakout Into Relevant Groups: </p>
		<p>County GOP Leadership: </p>
		<p>Trump County Leadership: </p>
		<p>Congressional District Leadership: </p>
	`,
	directives:		[Grid]
})

export class CountyProfile {
	county = {
		name:				"Waukesha",
		DMA:				"Milwaukee",
		VAP:				303917,
		VoteGoal:		177615,
		May2016RJ:	148032
	};

	constructor() {}
}