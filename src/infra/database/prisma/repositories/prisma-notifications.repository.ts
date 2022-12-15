import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prisma: PrismaService) {}
  countManyByRecipientId(recipientId: string): Promise<number> {
    throw new Error('Method not implemented.');
  }

  findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    throw new Error('Method not implemented.');
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
