---
title: Creating Polished Contact Form
description: Explore the decisions and tools behind creating a user-friendly modal contact form with Nuxt UI.
image: /image/building-portfolio.jpg
author: Syed Atef Alvi
avatar: /profile.jpeg
date: 2025-01-03
tags:
  - nuxt3
  - portfolio
  - web-development
  - featured
---

## The Goal

Provide an easy way for visitors to reach me without navigating away from the page. The solution? A modal-based contact form powered by Nuxt UI.

## Key Decisions

- **Modal vs. Separate Page**

  Choice: A modal keeps users on the same page, ensuring a smooth experience.

- **Form Feedback**

  Choice: Replaced intrusive alerts with Nuxt UI’s useToast for clean, subtle notifications.

- **Prebuilt Components**

  Choice: Leveraged Nuxt UI’s Modal, Form, and Input components for quick setup and consistent design.

## Highlights in Action

The "Contact Me" button triggers a modal with a form. Once the form is submitted, a toast confirms the message is sent.

```html
<template>
  <div>
    <!-- Button to open the modal -->
    <UButton @click="openModal">Contact Me</UButton>

    <!-- Modal with v-model binding -->
    <UModal v-model:open="isModalOpen">
      <UForm @submit="handleSubmit">
        <UFormField label="Name">
          <UInput v-model="formData.name" />
        </UFormField>
        <UFormField label="Email">
          <UInput v-model="formData.email" />
        </UFormField>
        <UFormField label="Message">
          <UTextarea v-model="formData.message" />
        </UFormField>
        <UButton type="submit">Send</UButton>
      </UForm>
    </UModal>
  </div>
</template>

<script setup>
  import { ref, reactive } from "vue";

  // Reactive state for the modal's open/close state
  const isModalOpen = ref(false);

  // Reactive state for the form data
  const formData = reactive({
    name: "",
    email: "",
    message: "",
  });

  // Function to open the modal
  const openModal = () => {
    isModalOpen.value = true;
  };

  // Function to handle form submission
  const handleSubmit = () => {
    console.log("Form Data:", formData);
    isModalOpen.value = false; // Close the modal after submission
  };
</script>
```

## The Outcome

The result is a clean, interactive, and user-friendly "Contact Me" section that fits seamlessly into the portfolio.

Using Nuxt UI not only simplified the process but also ensured a polished finish.

**What do you think of this approach? Let me know!**
