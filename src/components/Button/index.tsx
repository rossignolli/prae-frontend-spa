import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  minimal?: boolean;
  customColor?: string;
  icon?: JSX.Element;
  as?: React.ElementType;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = "medium",
    fullWidth = false,
    customColor = "",
    minimal = false,
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    customColor={customColor}
    hasIcon={!!icon}
    minimal={minimal}
    ref={ref}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default forwardRef(Button);
