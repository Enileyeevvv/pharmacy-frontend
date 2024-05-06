"use client"

import { Button, PasswordInput, TextInput } from "@mantine/core"

import { Form } from "@/shared/ui/form"

import { useSignUpForm } from "../hooks/use-sign-up-form"

export const SignUpForm = () => {
  const { getInputProps, handleSubmit, onSubmit } = useSignUpForm()

  return (
    <Form onSubmit={onSubmit(handleSubmit)}>
      <TextInput
        label="Логин"
        placeholder="Введите логин"
        {...getInputProps("login")}
      />
      <PasswordInput
        label="Пароль"
        placeholder="Введите пароль"
        {...getInputProps("password")}
      />
      <PasswordInput
        label="Повторите пароль"
        placeholder="Введите пароль"
        {...getInputProps("confirmPassword")}
      />
      <Button
        mt={24}
        type="submit"
      >
        Зарегистрироваться
      </Button>
    </Form>
  )
}
