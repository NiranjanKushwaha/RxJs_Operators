import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.css'],
})
export class FilterOperatorComponent implements OnInit {
  constructor() {}

  dataArr = [
    {
      id: 1,
      name: 'Anupam',
      gender: 'Male',
    },
    {
      id: 2,
      name: 'Narayan',
      gender: 'Male',
    },
    {
      id: 3,
      name: 'Pihu',
      gender: 'FeMale',
    },
    {
      id: 4,
      name: 'namna',
      gender: 'FeMale',
    },
    {
      id: 5,
      name: 'Amogh',
      gender: 'Male',
    },
    {
      id: 6,
      name: 'Kuwar',
      gender: 'Male',
    },
    {
      id: 7,
      name: 'chapala',
      gender: 'FeMale',
    },
    {
      id: 8,
      name: 'Garima',
      gender: 'FeMale',
    },
  ];
  data1: any;
  data2: any;
  data3: any;
  ngOnInit(): void {
    const source = from(this.dataArr);

    //  Ex: 01 Filter by name length(lenght :6)
    source
      .pipe(
        filter((member) => member.name.length > 6),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data1 = res;
      });

    //Ex: 02 Filter By Gender

    source
      .pipe(
        filter((member) => member.gender === 'Male'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data2 = res;
      });

    //Ex: 02 Filter By Gender

    source
      .pipe(
        filter((member) => member.gender === 'Male'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data2 = res;
      });

    //Ex: 03 Filter By Nth item (How many data to show)

    source
      .pipe(
        filter((member) => member.id <= 6),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data3 = res;
      });
  }
}
