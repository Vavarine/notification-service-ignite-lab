import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get notifications by recipient id', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipient = new GetRecipientNotifications(notificationsRepository);

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

    const { notifications } = await getRecipient.execute({
      recipientId: '1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          recipientId: '1',
        }),
        expect.objectContaining({
          recipientId: '1',
        }),
      ]),
    );
  });
});
