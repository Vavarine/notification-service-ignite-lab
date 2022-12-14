import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a new notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: '1',
      content: 'Você recebeu uma nova mensagem',
      category: 'social',
    });

    expect(notificationsRepository.notifications[0]).toBe(notification);
  });
});
