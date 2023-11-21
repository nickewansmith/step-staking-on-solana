import { notification } from 'antd';

notification.config({
  placement: 'bottomLeft',
  bottom: 50,
  duration: 2
});

export const notify = {
  success: (message: React.ReactNode, description: React.ReactNode) => notification.success({
    message: message,
    description: description,
  }),
  error: (message: React.ReactNode, description: React.ReactNode) => notification.error({
    message: message,
    description: description,
  }),
  info: (message: React.ReactNode, description: React.ReactNode) => notification.info({
    message: message,
    description: description,
  }),
  warning: (message: React.ReactNode, description: React.ReactNode) => notification.warning({
    message: message,
    description: description,
  }),
};