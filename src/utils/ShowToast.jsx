
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Inject CSS to make all toast close icons white globally
const style = document.createElement('style');
style.innerHTML = `
  .Toastify__close-button > svg,
  .Toastify__close-button {
    color: white !important;
    fill: white !important;
  }
`;
document.head.appendChild(style);

const baseStyle = {
  color: 'white',
};

const baseProgress = {
  background: 'white',
};

export const showErrorToast = (message) => {
  toast.error(message, {
    position: 'top-center',
    style: {
      ...baseStyle,
      background: 'linear-gradient(to right, #b91c1c, #ef4444, #b91c1c)', // red
    },
    progressStyle: baseProgress,
  });
};

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: 'top-center',
    style: {
      ...baseStyle,
      background: 'linear-gradient(to right, #15803d, #22c55e, #15803d)', // green
    },
    progressStyle: baseProgress,
  });
};

export const showWarningToast = (message) => {
  toast.warn(message, {
    position: 'top-center',
    style: {
      ...baseStyle,
      background: 'linear-gradient(to right, #d97706, #facc15, #d97706)', // amber/yellow
    },
    progressStyle: baseProgress,
  });
};
