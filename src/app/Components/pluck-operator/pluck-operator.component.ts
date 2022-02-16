import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck-operator',
  templateUrl: './pluck-operator.component.html',
  styleUrls: ['./pluck-operator.component.css'],
})
export class PluckOperatorComponent implements OnInit {
  constructor() {}

  users = [
    {
      name: 'Niranjan',
      skills: 'Angular',
    },
    {
      name: 'Kumar',
      skills: 'React',
    },
    {
      name: 'Kushwaha',
      skills: 'javaScript',
    },
    {
      name: 'Sonu',
      skills: 'Rxjs',
    },
    {
      name: 'neeraj',
      skills: 'History',
    },
  ];
  data: any;

  users2 = [
    {
      name: 'Niranjan',
      skills: 'Angular',
      job: {
        title: 'FrontEnd Developer',
        exp: '1year',
      },
    },
    {
      name: 'Kumar',
      skills: 'React',
      job: {
        title: 'React Developer',
        exp: '2year',
      },
    },
    {
      name: 'Kushwaha',
      skills: 'javaScript',
      job: {
        title: 'UI Developer',
        exp: '3year',
      },
    },
    {
      name: 'Sonu',
      skills: 'Rxjs',
      job: {
        title: 'UI Intern Developer',
        exp: '4year',
      },
    },
    {
      name: 'neeraj',
      skills: 'Node.Js',
      job: {
        title: 'backend Developer',
        exp: '5year',
      },
    },
  ];

  data2: any;
  ngOnInit(): void {
    // Ex:01   with simple objects
    // --------------------> old way of doing
    // from(this.users)
    //   .pipe(
    //     map((obj) => obj.name),
    //     toArray()
    //   )
    //   .subscribe((res) => (this.data = res));

    // -------------------> with pluck operator
    from(this.users)
      .pipe(pluck('name'), toArray())
      .subscribe((res) => (this.data = res));

    //Ex:02  With nested object
    from(this.users2)
      .pipe(pluck('job', 'title'), toArray())
      .subscribe((res) => (this.data2 = res));
  }
}
