<template>
  <div>
    <span>I'm a </span>
    <span
      :style="{ color: currentColor }"
      ref="typedElement"
      class="font-bold"
    ></span>
    <span class="cursor">|</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Typed from "typed.js";

const typedElement = ref(null);
const currentColor = ref("");

const roles = [
  { text: "Data Analyst", color: "#F59E0B" }, // Amber Gold (Triadic with Green)
  { text: "Business Analyst", color: "#0EA5E9" }, // Sky Blue (Triadic with Green)
  { text: "Data Engineer", color: "#10B981" }, // Green (Primary Accent)
  { text: "Process Doctor", color: "#E11D48" }, // Crimson Red (Complementary to Green)
  { text: "Lifelong Learner", color: "#9333EA" }, // Deep Purple (Contrasting for richness)
];

onMounted(() => {
  const typed = new Typed(typedElement.value, {
    strings: roles.map((role) => role.text),
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    preStringTyped: (arrayPos) => {
      currentColor.value = roles[arrayPos].color;
    },
  });
});
</script>

<style>
.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
