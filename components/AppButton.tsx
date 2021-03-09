import Button from "react-bootstrap/Button"

interface AppButtonProps {
  onClick?: (event: any) => any
  color?: string
  title: string
  gradient?: boolean
  submit?: boolean
}

export const AppButton = ({
  color,
  onClick,
  title,
  gradient,
  submit,
}: AppButtonProps) => {
  return (
    <Button
      className={gradient ? "gradient" : ""}
      style={{ backgroundColor: color, border: "none" }}
      variant="dark"
      onClick={onClick}
      type={submit && "submit"}
    >
      {title}
    </Button>
  )
}
