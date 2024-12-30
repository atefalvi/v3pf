<template>
  <UContainer class="bg-slate-600 py-4 mx-auto max-w-full">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo and Brand Name -->
        <div class="flex items-center space-x-2">
          <NuxtImg src="/logo4.png" alt="Company Logo" width="32" height="32" />
          <span class="text-3xl font-semibold">Atef.</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <UNavigationMenu
            :items="navItems"
            class="justify-center"
            variant="pill"
            highlight
            active-class="text-sky-400"
          />
          <USwitch
            v-model="switchValue"
            :unchecked-icon="'i-lucide-moon'"
            :checked-icon="'i-lucide-sun'"
            size="xl"
            color="warning"
          />
        </div>

        <!-- Mobile Menu Button -->
        <UButton @click="toggleMobileMenu" class="md:hidden" color="netural">
          <Icon v-if="!isMobileMenuOpen" name="i-lucide-menu" size="24" />
          <Icon v-else name="i-lucide-minimize-2" size="24" />
        </UButton>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMobileMenuOpen" class="md:hidden mt-4">
      <div class="flex flex-row items-center space-x-4">
        <UNavigationMenu
          :items="navItems"
          variant="pill"
          highlight
          active-class="text-sky-400"
        />
        <USwitch
          v-model="switchValue"
          :unchecked-icon="'i-lucide-moon'"
          :checked-icon="'i-lucide-sun'"
          size="xl"
          color="warning"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup>
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
