import { Device } from "./Device";
import { MyUser } from "./MyUser";
import FHT, { FHPicture } from "./templates/FHT";
import { Quasar } from "./templates/Quasar";

class MyUserFHT extends FHT<MyUser> {
  collectionName = "user";
  Picture = new FHPicture((id) => `user/${id}/profile_picture.jpg`);
}

class DeviceFHT extends FHT<Device> {
  collectionName = "device";
}

class AdminSettingsFHT extends FHT<Quasar> {
  collectionName = "admin";
}

export default abstract class FH {
  static AdminSettings = new AdminSettingsFHT();
  static MyUser = new MyUserFHT();
  static Device = new DeviceFHT();
}
