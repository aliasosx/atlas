import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {

  constructor(private dataService: DataService) { }
  foods: any;
  ngOnInit() {
    this.getFoods();
  }
  getFoods() {
    this.dataService.getFoods().subscribe(foods => {
      this.foods = foods;
      //console.log(foods);
    });
  }
  addList(id) {
    this.dataService.getFoodById(id).subscribe(foods => {
      console.log(foods)
    });
  }

}
