<template>
  <footer class="w-full py-3 bg-slate-300 dark:bg-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Copyright Text -->
        <p class="text-sm text-slate-400">
          &copy; {{ new Date().getFullYear() }} Atef. All rights reserved.
        </p>

        <!-- Social Links -->
        <div class="flex space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sky-400 hover:text-sky-300 transition-colors"
          >
            <Icon name="i-lucide-github" class="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/atefsyed"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sky-400 hover:text-sky-300 transition-colors"
          >
            <Icon name="i-lucide-linkedin" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
