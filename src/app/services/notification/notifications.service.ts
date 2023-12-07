import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private notificationId: number = 0;
  private newNotificationReceived: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  updateNotificationId() {
    this.notificationId += 1;
    this.newNotificationReceived.next(true); // Trigger the notification flag
  }

  decreaseNotificationId(count: number) {
    if (this.notificationId >= count) {
      this.notificationId -= count;
    } else {
      this.notificationId = 0; // Ensure the notification ID doesn't go below 0
    }
  }
   

  getNotificationId(): number {
    return this.notificationId;
  }
  
  getNewNotificationReceived(): Subject<boolean> {
    return this.newNotificationReceived;
  }

  private unreadNotificationCountSource = new BehaviorSubject<number>(0);
  unreadNotificationCount$ = this.unreadNotificationCountSource.asObservable();

  updateUnreadNotificationCount(count: number): void {
    this.unreadNotificationCountSource.next(count);
  }
}
