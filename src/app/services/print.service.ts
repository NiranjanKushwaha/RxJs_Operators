import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrintService {
  constructor() {}
  listItemPrinter(containerId: any, val: any) {
    let el = document.createElement('LI');
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }
}
