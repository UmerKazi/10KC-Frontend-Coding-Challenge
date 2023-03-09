import { Component } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  startReceivingDisabledFlag: boolean = false;
  stopReceivingDisabledFlag: boolean = true;
  badgeValue: number = null;
  timerSubscription: Subscription;

  toggleReceivingButtons() {
    if (this.startReceivingDisabledFlag == false) {
      this.startReceivingDisabledFlag = true;
      this.stopReceivingDisabledFlag = false;
      this.startTimer();
    } else {
      this.startReceivingDisabledFlag = false;
      this.stopReceivingDisabledFlag = true;
      this.stopTimer();
    }
  }

  resetBadge() {
    this.badgeValue = null;
  }

  startTimer() {
    const timer$: Observable<number> = interval(300);
    this.timerSubscription = timer$.subscribe(() => {
      this.badgeValue++;
    });
  }

  stopTimer() {
    this.timerSubscription.unsubscribe();
  }
}
