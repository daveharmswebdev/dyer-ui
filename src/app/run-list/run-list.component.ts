import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RunWorkoutService } from '../services/run-workout.service';

@Component({
  selector: 'app-run-list',
  templateUrl: './run-list.component.html',
  styleUrls: ['./run-list.component.scss'],
})
export class RunListComponent implements OnInit {
  runs$: Observable<any> = this.runsWorkoutService.getRuns();

  constructor(private runsWorkoutService: RunWorkoutService) {}

  ngOnInit(): void {}
}
