import {Component}			from '@angular/core';
import {Column} 				from 'modules/grid/grid';
import {ModalService} 	from 'modules/modal/modal-service';

@Component({
	selector:			'county-profile',
	template:			`
		<h1>{{county.name}}</h1>
		<h3>County Leadership</h3>
		<button class="btn btn-primary" (click)="addNewLeader()">Add New County Party Leader</button>
		<grid [rows]="countyLeaders" [columns]="countyLeaderCols"></grid>
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
	`
})

export class CountyProfile {
	county = {
		name:				"Waukesha",
		DMA:				"Milwaukee",
		VAP:				303917,
		VoteGoal:		177615,
		May2016RJ:	148032
	};
	addCLauto = {
		source: ["mike", "morgan", "pete", "mark","jason","jimmy","ben"];
	}
	addCLFields = [
    {name: "personId", type: "STRING", defaultValue: "", custom: {label: "County Leader", labelAbove: false, controlType: "autocomplete", autocomplete: this.addCLauto, css: {input: {width: "200px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
    {name: "role", type: "STRING", defaultValue: "", custom: {label: "Role", labelAbove: false, css: {input: {width: "195px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}}
	];
	addCLForm = {
    submit:     	function(x){console.log(x)},
		submitLabel:	"Save",
    controls:   	[
      {
        type: "fieldset",
        name: "Event Group",
        fields: [
          {classField: this.addCLFields[0]},
          {classField: this.addCLFields[1]}
        ]
      },
		]
	};
	addCLObject = {
		fieldObject:		this.addCLFields,
		formObject:			this.addCLForm
	};

	constructor(private modal:ModalService) {
		this.countyLeaderCols = [
			new Column('fullname','County Leader'),
			new Column('role','Role'),
			new Column('phone','Phone'),
			new Column('email','E-mail')
		];
		this.countyLeaders = []
	}
	addNewLeader = () => {
		console.log("add New Leader");
		this.modal.formObject = this.addCLObject;
		this.modal.title = "Add a new County Leader";
		this.modal.showModal = true;
	}
}