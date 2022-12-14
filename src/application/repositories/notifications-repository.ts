import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;

  // abstract findUnreadByRecipientId(
  //   recipientId: string,
  // ): Promise<Notification[]>;

  // abstract markAsRead(
  //   notificationId: string,
  //   recipientId: string,
  // ): Promise<void>;
}
