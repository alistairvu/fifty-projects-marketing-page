import Button from "react-bootstrap/Button"

interface AppButtonProps {
  onClick?: (event: any) => any
  color?: string
  title: string
  gradient?: boolean
}

export const AppButton = ({
  color,
  onClick,
  title,
  gradient,
}: AppButtonProps) => {
  return (
    <Button
      className={gradient ? "gradient bold-text" : "bold-text"}
      style={{ backgroundColor: color, border: "none" }}
      variant="dark"
      onClick={onClick}
    >
      {title}
    </Button>
  )
}
