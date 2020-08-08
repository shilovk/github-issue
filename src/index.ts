import "./style.less";
import { showErrorNotification } from "./notifications/index.ts";

showErrorNotification({
  message: "Test message1"
});
showErrorNotification({
  message: "Test message2",
  timeout: 2000
});
