import { forwardRef } from "react"
import Button from "react-bootstrap/Button"

interface AppButtonProps {
  onClick?: (event: any) => any
  color?: string
  title: string
  gradient?: boolean
  submit?: boolean
  disabled?: boolean
}

export const AppButton = forwardRef(
  (
    { color, onClick, title, gradient, submit, disabled }: AppButtonProps,
    ref: any
  ) => {
    return (
      <Button
        className={gradient ? "gradient" : ""}
        style={{ backgroundColor: color, border: "none" }}
        variant="dark"
        onClick={onClick}
        type={submit && "submit"}
        disabled={disabled}
        ref={ref}
      >
        {title}
      </Button>
    )
  }
)
