import {Injectable} from '@angular/core';

@Injectable()

export class CountyService {
	counties = [
		{
			name:				"Waukesha",
			DMA:				"Milwaukee",
			VAP:				303917,
			VoteGoal:		177615,
			May2016RJ:	148032
		},
		{
			name:				"Ozaukee",
			DMA:				"Milwaukee",
			VAP:				303917,
			VoteGoal:		177615,
			May2016RJ:	148032
		}
	];
}