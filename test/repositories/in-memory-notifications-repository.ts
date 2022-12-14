import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  notifications: Notification[] = [];

  public async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
