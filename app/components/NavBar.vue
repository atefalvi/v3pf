<template>
  <UContainer
    class="sticky top-0 z-20 bg-neutral-50/70 dark:bg-neutral-800/70 backdrop-blur-lg py-4 shadow-md max-w-full"
  >
    <div
      class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <!-- Logo and Brand Name -->
      <div class="flex items-center space-x-2">
        <NuxtImg
          src="/logo4.png"
          alt="Company Logo"
          width="32"
          height="32"
          class="rounded-full shadow-md"
        />
        <span class="text-3xl font-bold text-green-600 dark:text-green-400">
          Atef.
        </span>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-6">
        <UNavigationMenu
          :items="navItems"
          class="text-base text-neutral-700 dark:text-neutral-300"
          variant="pill"
          highlight
          active-class="text-green-500 dark:text-green-400 border-b-2 border-green-500"
        />
        <USwitch
          v-model="switchValue"
          :unchecked-icon="'i-lucide-moon'"
          :checked-icon="'i-lucide-sun'"
          size="xl"
          color="warning"
          class="dark:border-neutral-700"
        />
      </div>

      <!-- Mobile Menu Button -->
      <UButton
        @click="toggleMobileMenu"
        class="md:hidden p-2 rounded-lg bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-300 dark:hover:bg-neutral-600"
        color="neutral"
      >
        <Icon v-if="!isMobileMenuOpen" name="i-lucide-menu" size="20" />
        <Icon v-else name="i-lucide-minimize-2" size="20" />
      </UButton>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden mt-4 px-4 flex items-center justify-between space-x-4"
    >
      <!-- Navigation Links -->
      <UNavigationMenu
        :items="navItems"
        variant="pill"
        highlight
        active-class="text-green-500 dark:text-green-400 border-b-2 border-green-500"
        class="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-green-500 dark:hover:text-green-400"
      />

      <!-- Light/Dark Mode Switch -->
      <USwitch
        v-model="switchValue"
        :unchecked-icon="'i-lucide-moon'"
        :checked-icon="'i-lucide-sun'"
        size="md"
        color="warning"
        class="dark:border-neutral-700"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
// State for mobile menu
const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Navigation items
const navItems = [
  { label: "Home", icon: "i-lucide-home", to: "/" },
  { label: "Blog", icon: "i-lucide-book-open", to: "/blog" },
];

// Theme switch
const colorMode = useColorMode();
const switchValue = computed({
  get: () => colorMode.preference === "light",
  set: (value) => {
    colorMode.preference = value ? "light" : "dark";
  },
});
</script>
