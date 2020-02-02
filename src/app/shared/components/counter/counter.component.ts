import { Component, Renderer2, ViewChild, ElementRef, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';

import { ItemsCounterService } from '../../../services/counter/items-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @ViewChild('counter', {static: true}) item: ElementRef;
  componentDestroyed$: Subject<boolean> = new Subject();

  scores: number[] = [0, 0, 0, 0, 0];
  itemCounter;

  constructor(
    private renderer: Renderer2,
    private itemsCounterService: ItemsCounterService
  ) {}

  ngOnInit() {
    this.itemCounter = this.itemsCounterService.getAllItems();
  }

  onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
      this.renderer.addClass(target, visible ? 'active' : 'inactive');
      this.renderer.removeClass(target, visible ? 'inactive' : 'active');
      if (this.item.nativeElement.classList.contains('active')) {
        for (let i = 0; i < this.itemsCounterService.items.length; i++) {
          this.counter(i);
        }
    }
  }

  counter(position: number) {
    const counter = interval(80);
    counter.subscribe(() => {
      while (this.scores[position] < this.itemsCounterService.items[position].num) {
        this.scores[position] += 1;
        return this.scores[position];
      }
    });
  }

}
