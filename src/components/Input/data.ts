import { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export interface IInputData extends IInput { }

export interface IInputLayout
  extends Omit<IInputData, ""> { }