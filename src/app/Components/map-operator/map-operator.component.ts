import { PrintService } from './../../services/print.service';
import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.css'],
})
export class MapOperatorComponent implements OnInit {
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  constructor(private printService: PrintService) {}
  // messages
  msg1: string;
  msg2: number;
  msg3: string;

  ngOnInit(): void {
    const broadCastVideos = interval(1000);

    // Ex:01
    this.subscription1 = broadCastVideos
      .pipe(map((data) => 'video ' + data))
      .subscribe((res) => {
        this.msg1 = res;
      });

    setTimeout(() => {
      this.subscription1.unsubscribe();
    }, 10000);

    // Ex:02
    this.subscription2 = broadCastVideos
      .pipe(map((data) => data + 10))
      .subscribe((res) => {
        this.msg2 = res;
      });

    setTimeout(() => {
      this.subscription2.unsubscribe();
    }, 10000);

    // Ex:03
    const members = from([
      {
        id: 1,
        name: 'Niranjan',
      },
      {
        id: 2,
        name: 'Anup',
      },
      {
        id: 3,
        name: 'Kumar',
      },
      {
        id: 4,
        name: 'Ajay',
      },
      {
        id: 5,
        name: 'Neeraj',
      },
      {
        id: 6,
        name: 'Karan',
      },
    ])
      .pipe(map((data) => data.name))
      .subscribe((res) => {
        this.printService.listItemPrinter('namePrint', res);
      });
  }
}
