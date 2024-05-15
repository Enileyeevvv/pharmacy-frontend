"use client"

import { Button, TextInput } from "@mantine/core"

import { Form } from "@/shared/ui/form"

import { useFeedbackForm } from "../hooks/use-feedback-form"

export const FeedbackForm = () => {
  const { values, getInputProps, onSubmit, form, handleSubmit } =
    useFeedbackForm()

  return (
    <Form onSubmit={onSubmit(handleSubmit)}>
      <TextInput
        label="Email"
        placeholder="Введите email"
        {...getInputProps("email")}
      />
      <TextInput
        label="Название организации"
        placeholder="Введите название организации"
        {...getInputProps("companyName")}
      />
      <Button
        type="submit"
        mt={24}
      >
        Отправить заявку
      </Button>
    </Form>
  )
}
