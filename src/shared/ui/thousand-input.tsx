import { TextInput, TextInputProps } from "@mantine/core"
import { FC } from "react"
import { NumericFormat } from "react-number-format"

interface ThousandInputProps
  extends Omit<TextInputProps, "type" | "value" | "defaultValue"> {}

export const ThousandInput: FC<ThousandInputProps> = ({
  onChange,
  ...props
}) => {
  return (
    <NumericFormat
      thousandsGroupStyle="thousand"
      thousandSeparator=" "
      customInput={TextInput}
      {...props}
      // @ts-ignore
      onValueChange={({ value }) => onChange?.(value)}
    />
  )
}
