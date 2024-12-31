<template>
  <NavBar />
  <UContainer>
    <main class="py-8 sm:py-12">
      <div
        class="w-full h-96 sm:h-[32rem] mb-8 rounded-lg overflow-hidden flex flex-col justify-end p-6 sm:p-8 relative"
        :style="{
          backgroundImage: data.image
            ? `url(${data.image})`
            : 'linear-gradient(135deg, #6EE7B7 0%, #3B82F6 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <!-- Overlay for better text contrast -->
        <div class="absolute inset-0 bg-black/40"></div>

        <!-- Blog Title -->
        <h1
          class="relative z-10 text-5xl lg:text-6xl font-bold text-white drop-shadow-lg tracking-wide mb-4"
        >
          {{ data.title }}
        </h1>

        <!-- Metadata (Date and Tags) -->
        <div class="space-y-2 relative z-10 text-gray-200">
          <!-- Published Date -->
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-calendar" class="w-5 h-5 text-white" />
            <span>{{ formatDate(data.date) }}</span>
          </div>

          <!-- Tags -->
          <div class="flex items-center gap-3">
            <UIcon name="i-heroicons-tag" class="w-5 h-5 text-white" />
            <div class="flex gap-2 flex-wrap">
              <span
                v-for="tag in data.tags"
                :key="tag"
                class="bg-primary-500/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-500/30 transition-all duration-150"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <section class="prose">
        <ContentRenderer :value="data" />
      </section>
    </main>
  </UContainer>
  <Footer />
</template>

<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);
console.log(data.value);

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<style>
/* Add styles for headers */
.prose h1 {
  font-size: 2.25rem; /* Equivalent to text-4xl */
  font-weight: 700; /* Bold */
  margin-bottom: 1rem; /* Equivalent to mb-4 */
  color: #007b83; /* Primary-500 */
}

.prose h2 {
  font-size: 1.875rem; /* Equivalent to text-3xl */
  font-weight: 700; /* Bold */
  margin-bottom: 1rem; /* Equivalent to mb-4 */
  color: #00a0a8; /* Primary-400 */
}

.prose h3 {
  font-size: 1.5rem; /* Equivalent to text-2xl */
  font-weight: 700; /* Bold */
  margin-bottom: 1rem; /* Equivalent to mb-4 */
  color: #005960; /* Primary-300 */
}

/* Light mode styles for code blocks */
.prose pre {
  font-family: "Fira Code", monospace; /* Monospace font */
  background-color: #e5e7eb; /* Equivalent to bg-gray-200 */
  border: 1px solid #d1d5db; /* Equivalent to border-gray-300 */
  border-radius: 8px; /* Equivalent to rounded-lg */
  padding: 1rem; /* Equivalent to p-4 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  overflow-x: auto;
  color: #1f2937; /* Equivalent to text-gray-800 */
  margin-bottom: 1rem; /* Equivalent to mb-4 */
}

/* Dark mode styles for code blocks */
.dark .prose pre {
  background-color: #1f2937; /* Equivalent to bg-gray-800 */
  border: 1px solid #374151; /* Equivalent to border-gray-700 */
  color: #d1d5db; /* Equivalent to text-gray-300 */
}

/* Light mode styles for inline code */
.prose code:not(pre code) {
  font-family: "Fira Code", monospace; /* Monospace font */
  background-color: #e5e7eb; /* Equivalent to bg-gray-200 */
  padding: 0.2em 0.4em; /* Small padding for inline code */
  border-radius: 4px; /* Rounded corners */
  color: #d946ef; /* Purple text */
}

/* Dark mode styles for inline code */
.dark .prose code:not(pre code) {
  background-color: #374151; /* Equivalent to bg-gray-700 */
  color: #f472b6; /* Pink text */
}

/* Table styles */
.prose table {
  width: 100%;
  border-collapse: collapse; /* No spacing between borders */
  margin: 1rem 0; /* Equivalent to my-4 */
}

.prose th,
.prose td {
  border: 1px solid #5077c5; /* Custom border color */
  padding: 0.5rem; /* Equivalent to p-2 */
  text-align: left; /* Left-align text */
}

.prose th {
  background-color: #5e82c8; /* Header background */
  color: #ffffff; /* White text */
}

.dark .prose th {
  background-color: #344a77; /* Dark mode header background */
}

/* Unordered list styles */
.prose ul {
  list-style-type: disc; /* Default bullet points */
  margin-left: 1.5rem; /* Equivalent to ml-6 */
}

.prose ul li.task-list-item {
  list-style-type: none; /* No bullets */
  margin-left: 0; /* No indentation */
}

/* Style the checkbox */
.prose input[type="checkbox"] {
  margin-right: 0.5rem; /* Space between checkbox and text */
}

/* Blockquote styles */
.prose blockquote {
  border-left: 4px solid #e5e7eb; /* Light border */
  padding-left: 1rem; /* Space inside blockquote */
  margin: 1rem 0; /* Equivalent to my-4 */
  color: #6b7280; /* Muted text */
  font-style: italic;
}

.dark .prose blockquote {
  border-left: 4px solid #374151; /* Dark mode border */
  color: #d1d5db; /* Muted light text */
}
</style>
