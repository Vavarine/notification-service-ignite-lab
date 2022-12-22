import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count notification', () => {
  it('should be able to count notifications by recipient id', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: '1',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: '1',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: '2',
      }),
    );

    const response = await countRecipientNotifications.execute({
      recipientId: '1',
    });

    expect(response.count).toBe(2);
  });
});
