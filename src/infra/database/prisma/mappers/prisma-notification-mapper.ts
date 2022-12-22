import { Notification } from '@application/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(rawNotification: any) {
    return new Notification({
      content: rawNotification.content,
      category: rawNotification.category,
      recipientId: rawNotification.recipientId,
      createdAt: rawNotification.createdAt,
    });
  }
}
