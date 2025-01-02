<template>
  <!-- Centering Container -->
  <div class="flex justify-center">
    <!-- Callout Component -->
    <div class="callout flex rounded-lg overflow-hidden max-w-md w-full">
      <!-- Left Section: Darker Strip -->
      <div
        :style="{ backgroundColor: config.borderColor }"
        class="w-1 flex-shrink-0"
      />
      <!-- Right Section: Lighter Background -->
      <div
        :style="{ backgroundColor: config.bgColor }"
        class="flex-1 p-3 flex items-start gap-2"
      >
        <!-- Icon -->
        <div class="flex-shrink-0 min-w-[25px]">
          <Icon
            :name="config.icon"
            size="25"
            :style="{ color: config.borderColor }"
          />
        </div>
        <!-- Header and Content -->
        <div>
          <p
            class="font-bold text-md mb-1"
            :style="{ color: config.borderColor }"
          >
            {{ config.header }}
          </p>
          <div class="text-sm text-gray-800">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { type = "note" } = defineProps({
  type: {
    type: String,
    default: "note", // Default type
  },
});

// Map styles, icons, and headers to callout types
const calloutConfig = {
  note: {
    bgColor: "#e5ebf7",
    borderColor: "#4389fc",
    icon: "i-lucide-notebook-pen",
    header: "Note",
  },
  info: {
    bgColor: "#e0f2fe",
    borderColor: "#38bdf8",
    icon: "i-lucide-badge-info",
    header: "Info",
  },
  tip: {
    bgColor: "#dcfce7",
    borderColor: "#4ade80",
    icon: "i-lucide-lightbulb",
    header: "Tip",
  },
  success: {
    bgColor: "#bbf7d0",
    borderColor: "#22c55e",
    icon: "i-lucide-badge-check",
    header: "Success",
  },
  help: {
    bgColor: "#cffafe",
    borderColor: "#22d3ee",
    icon: "i-lucide-badge-help",
    header: "Help",
  },
  bug: {
    bgColor: "#fce7f3",
    borderColor: "#f472b6",
    icon: "i-lucide-bug",
    header: "Bug",
  },
  quote: {
    bgColor: "#dedee0",
    borderColor: "#8a919c",
    icon: "i-lucide-quote",
    header: "Quote",
  },
  warning: {
    bgColor: "#fef3c7",
    borderColor: "#f59e0b",
    icon: "i-lucide-triangle-alert",
    header: "Warning",
  },
  error: {
    bgColor: "#fee2e2",
    borderColor: "#ef4444",
    icon: "i-lucide-badge-x",
    header: "Error",
  },
};

// Fallback to 'note' if the type is not found in calloutConfig
const config = calloutConfig[type] || calloutConfig.note;
</script>
