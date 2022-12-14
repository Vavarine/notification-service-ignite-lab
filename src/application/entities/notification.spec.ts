import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a new notification', async () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma nova mensagem'),
      category: 'social',
      recipientId: '1',
    });

    expect(notification).toBeInstanceOf(Notification);
  });

  it('should be able to update notification content', async () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma nova mensagem'),
      category: 'social',
      recipientId: '1',
    });

    notification.content = new Content('Você recebeu uma nova mensagem');

    expect(notification.content).toBeInstanceOf(Content);
  });

  it('should be able to update notification category', async () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma nova mensagem'),
      category: 'social',
      recipientId: '1',
    });

    notification.category = 'social';

    expect(notification.category).toBe('social');
  });
});
