import { RegisterOptions } from "react-hook-form";

const RegisterValidation: {
  [x: string]: RegisterOptions;
} = {
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },
    maxLength: {
      value: 72,
      message: "Password must be at most 72 characters",
    },
  },
  confirmPassword: {
    required: "Confirm Password is required",
    minLength: {
      value: 8,
      message: "Confirm Password must be at least 8 characters",
    },
    maxLength: {
      value: 72,
      message: "Confirm Password must be at most 72 characters",
    },
  },
};

export { RegisterValidation };