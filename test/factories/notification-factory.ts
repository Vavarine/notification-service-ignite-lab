import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';

export function makeNotification(overrides: Partial<Notification> = {}) {
  return new Notification({
    recipientId: 'recipient-id',
    content: new Content('Nova solicitação de amizade'),
    category: 'social',
    ...overrides,
  });
}
