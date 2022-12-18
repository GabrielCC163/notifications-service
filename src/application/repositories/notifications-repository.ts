import { Notification } from '../entities/notification';

//could be a interface instead of abstract class.
//Nest handles best the above
export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
