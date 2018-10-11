import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Problem} from "../../models/problem.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
  problem: Problem;

  constructor(private data: DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.problem = this.data.getProblem(+params['id']);
    })
  }


}
