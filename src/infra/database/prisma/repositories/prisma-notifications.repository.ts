import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prisma: PrismaService) {}
  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prisma.notification.count({
      where: { recipientId },
    });

    return count;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const rawNotifications = await this.prisma.notification.findMany({
      where: { recipientId },
    });

    const notifications = rawNotifications.map((notification) =>
      PrismaNotificationMapper.toDomain(notification),
    );

    return notifications;
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const rawNotification = await this.prisma.notification.findUnique({
      where: { id: notificationId },
    });

    if (!rawNotification) {
      return null;
    }

    const notification = PrismaNotificationMapper.toDomain(rawNotification);

    return notification;
  }

  async create(notification: Notification): Promise<void> {
    const rawNotification = PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.create({ data: rawNotification });
  }

  async save(notification: Notification): Promise<void> {
    const rawNotification = PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.update({
      where: { id: rawNotification.id },
      data: rawNotification,
    });
  }
}
