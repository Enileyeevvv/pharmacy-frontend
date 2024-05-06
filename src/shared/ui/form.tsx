import { Flex } from "@mantine/core"
import { DetailedHTMLProps, FC, FormHTMLAttributes } from "react"

interface FormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

export const Form: FC<FormProps> = ({ children, ...props }) => {
  return (
    <form {...props}>
      <Flex
        maw={360}
        direction="column"
        gap={8}
      >
        {children}
      </Flex>
    </form>
  )
}
