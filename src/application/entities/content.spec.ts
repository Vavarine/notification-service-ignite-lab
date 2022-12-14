import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a new notification content', async () => {
    const content = new Content('Você recebeu uma nova mensagem');

    expect(content).toBeInstanceOf(Content);
  });

  it('should not be able to create a new notification content with less then 5 characters', async () => {
    expect(() => new Content('')).toThrowError(
      'Content must be between 5 and 255 characters',
    );
  });

  it('should not be able to create a new notification content with more then 255 characters', async () => {
    expect(() => new Content('a'.repeat(256))).toThrowError(
      'Content must be between 5 and 255 characters',
    );
  });
});
