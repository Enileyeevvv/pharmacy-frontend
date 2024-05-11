"use client"

import { Button, PasswordInput, TextInput } from "@mantine/core"

import { Form } from "@/shared/ui/form"

import { useSignInForm } from "../hooks/use-sign-in-form"

export const SignInForm = () => {
  const { getInputProps, onSubmit, handleSubmit, isLoading } =
    useSignInForm()

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
      <Button
        mt={24}
        type="submit"
        loading={isLoading}
      >
        Войти
      </Button>
    </Form>
  )
}
