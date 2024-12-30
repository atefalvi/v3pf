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

<script setup>
import { ref, onMounted } from "vue";
import Typed from "typed.js";

const typedElement = ref(null);
const currentColor = ref("");

const roles = [
  { text: "Data Analyst", color: "#b37a10" },
  { text: "Business Analyst", color: "#8d10b3" },
  { text: "Data Engineer", color: "#0d870b" },
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

  console.log("Typed.js initialized"); // Debugging log
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
