import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  notifications: Notification[] = [];

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    );

    return notifications;
  }

  public async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (notification) => notification.id === notificationId,
    );

    return notification ?? null;
  }

  public async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  public async save(notification: Notification): Promise<void> {
    const index = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    this.notifications[index] = notification;
  }

  public async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = this.notifications.filter(
      (notification) => notification.recipientId === recipientId,
    ).length;

    return count;
  }
}
