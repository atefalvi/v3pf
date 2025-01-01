<template>
  <footer class="w-full py-3 bg-neutral-300 dark:bg-neutral-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Copyright Text -->
        <p class="text-sm text-neutral-400">
          &copy; {{ new Date().getFullYear() }} Atef. All rights reserved.
        </p>

        <!-- Social Links -->
        <div class="flex space-x-6">
          <a
            href="https://github.com/atefalvi"
            target="_blank"
            rel="noopener noreferrer"
            class="text-green-500 hover:text-green-300 transition-colors"
          >
            <Icon name="i-lucide-github" class="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/atefsyed"
            target="_blank"
            rel="noopener noreferrer"
            class="text-green-500 hover:text-green-300 transition-colors"
          >
            <Icon name="i-lucide-linkedin" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
