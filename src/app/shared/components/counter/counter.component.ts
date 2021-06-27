import { Component, Renderer2, ViewChild, ElementRef, OnInit, ChangeDetectorRef, AfterViewInit, QueryList } from '@angular/core';
import { interval, merge, Observable, Subject, Subscription } from 'rxjs';
import { ItemsCounterService } from '../../../core/services/counter/items-counter.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {

  @ViewChild('counter') item: ElementRef;
  componentDestroyed$: Subject<boolean> = new Subject();

  scores: number[] = [0, 0, 0, 0, 0];
  itemCounter;

  constructor(
    private renderer: Renderer2,
    private itemsCounterService: ItemsCounterService,
    private cd: ChangeDetectorRef,
  ) {
  }


  ngOnInit() {
    this.itemsCounterService.getAllItems()
      .then((response: any[]) => {
        this.itemCounter = [];
        response.forEach(async (counter) => {
          this.itemCounter.push(await this.itemsCounterService.getCounterItemWordPressToModel(counter));
          this.cd.detectChanges();
        });
      });

  }

  onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    if (this.itemCounter && this.itemCounter.length > 0) {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
    if (this.item.nativeElement.classList.contains('active')) {
        for (let i = 0; i < this.itemCounter.length; i++) {
          this.counter(i);
        }
      }

    } else {
      this.renderer.addClass(target,  'inactive');
    }

  }

  counter(position: number) {
    const counter = interval(80);
    counter.subscribe(() => {
      while (this.scores[position] < this.itemCounter[position].num) {
        this.scores[position] += 1;
        return this.scores[position];
      }
    });
  }
}
