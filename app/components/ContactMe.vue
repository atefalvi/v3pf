<template>
  <UModal
    v-model:open="open"
    side="bottom"
    title="Contact Me"
    :close="{ color: 'primary', variant: 'outline', class: 'rounded-full' }"
  >
    <template #body>
      <UForm
        :schema="schema"
        :state="state"
        @submit="onSubmit"
        class="h-full p-4 flex flex-col"
      >
        <!-- Form Fields Container -->
        <div
          class="flex-1 space-y-4 max-w-full md:max-w-xl lg:max-w-2xl mx-auto"
        >
          <!-- Name Field -->
          <UFormField label="Name" name="name" required>
            <UInput v-model="state.name" placeholder="Enter your full name" />
          </UFormField>

          <!-- Email Field -->
          <UFormField label="Email" name="email" required>
            <UInput
              v-model="state.email"
              placeholder="Enter your email"
              type="email"
            />
          </UFormField>

          <!-- Message Field -->
          <UFormField label="Message" name="message" required>
            <UTextarea
              v-model="state.message"
              placeholder="Enter your message (max 200 characters)"
              :maxlength="maxLength"
              aria-describedby="character-count"
              :ui="{ trailing: 'pointer-events-none' }"
            >
              <template #trailing>
                <div
                  id="character-count"
                  class="text-xs text-[var(--ui-text-muted)] tabular-nums"
                  aria-live="polite"
                  role="status"
                >
                  {{ state.message?.length }}/{{ maxLength }}
                </div>
              </template>
            </UTextarea>
          </UFormField>
        </div>

        <!-- Buttons Container -->
        <div class="mt-8 mb-20 pb-8 max-w-full md:max-w-md lg:max-w-lg mx-auto">
          <div class="flex justify-end space-x-2">
            <UButton
              type="button"
              color="error"
              variant="outline"
              @click="onCancel"
            >
              Cancel
            </UButton>
            <UButton type="submit" color="primary" :loading="isSubmitting">
              Submit
            </UButton>
          </div>
        </div>
      </UForm>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { object, string } from "zod";

// Define the form schema using Zod
const schema = object({
  name: string().min(1, "Name is required"),
  email: string().email("Invalid email").min(1, "Email is required"),
  message: string()
    .min(1, "Message is required")
    .max(200, "Message must be less than 200 characters"),
});

// Define the form state
const state = reactive({
  name: "",
  email: "",
  message: "",
});

// Max length for the message field
const maxLength = 200;

// Props and emits for the open state
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

// Computed property for the open state
const open = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

// Loading state for the submit button
const isSubmitting = ref(false);

// Toasts for Contact Form
const toast = useToast();

// Handle form submission
const onSubmit = async () => {
  isSubmitting.value = true;

  try {
    const response = await $fetch("/api/contact", {
      method: "POST",
      body: state,
    });

    if (response.success) {
      toast.add({
        title: "Success",
        description: "Message sent successfully!",
        icon: "i-line-md-email-check-twotone",
        color: "success",
      });
      resetForm();
      open.value = false; // Close the slideover
    }
  } catch (error) {
    toast.add({
      title: "Error",
      description: "Failed to send message. Please try again.",
      icon: "i-line-md:email-remove-twotone",
      color: "error",
    });
    console.error(error);
  } finally {
    isSubmitting.value = false;
  }
};

// Handle cancel
const onCancel = () => {
  resetForm();
  open.value = false; // Close the slideover
};

// Reset the form
const resetForm = () => {
  state.name = "";
  state.email = "";
  state.message = "";
};
</script>
