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
        <!-- Gradient Overlay from Bottom to Top -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
        ></div>

        <!-- Blog Title -->
        <h1
          class="relative z-10 text-5xl lg:text-6xl font-bold text-white drop-shadow-lg tracking-wide mb-6"
        >
          {{ data.title }}
        </h1>

        <!-- Author Info and Date -->
        <div class="relative z-10 flex items-center gap-4 mb-4">
          <!-- Avatar -->
          <img
            v-if="data.avatar"
            :src="data.avatar"
            alt="Author's Avatar"
            class="w-12 h-12 rounded-full object-cover border border-primary-400 shadow-md"
          />

          <!-- Author Name and Date -->
          <div>
            <p class="text-sm font-medium text-white">{{ data.author }}</p>
            <p class="text-xs text-gray-300">{{ formatDate(data.date) }}</p>
          </div>
        </div>

        <!-- Tags -->
        <div class="relative z-10 flex flex-wrap gap-2">
          <span
            v-for="tag in data.tags"
            :key="tag"
            class="bg-primary-500/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-primary-400 hover:bg-primary-400/30 hover:border-primary-300 transition-all duration-200"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <section class="prose markdown-content max-w-none">
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
  color: #059669; /* Green-600 (Primary) */
}

.prose h2 {
  font-size: 1.875rem; /* Equivalent to text-3xl */
  font-weight: 700; /* Bold */
  margin-bottom: 1rem; /* Equivalent to mb-4 */
  color: #10b981; /* Green-500 (Primary) */
}

.prose h3 {
  font-size: 1.5rem; /* Equivalent to text-2xl */
  font-weight: 700; /* Bold */
  margin-bottom: 1rem; /* Equivalent to mb-4 */
  color: #34d399; /* Green-400 (Primary) */
}

/* Paragraph spacing */
.prose p {
  margin-bottom: 1.25rem; /* Equivalent to mb-5 */
  margin-top: 1.25rem; /* Equivalent to mb-5 */
}

/* Ensure callout component is not affected */
.markdown-content .callout p {
  margin-bottom: 0; /* Reset margin for <p> tags inside callout */
  margin-top: 0; /* Reset margin for <p> tags inside callout */
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
}

/* Dark mode styles for inline code */
.dark .prose code:not(pre code) {
  background-color: #374151; /* Equivalent to bg-gray-700 */
}

/* Table styles */
.prose table {
  width: 100%;
  border-collapse: collapse; /* No spacing between borders */
  margin: 1rem 0; /* Equivalent to my-4 */
  background-color: #f9fafb; /* Neutral-50 (Light background) */
  border: 1px solid #d1d5db; /* Neutral-300 (Border) */
}

.prose th,
.prose td {
  border: 1px solid #d1d5db; /* Neutral-300 (Border color) */
  padding: 0.5rem; /* Equivalent to p-2 */
  text-align: left; /* Left-align text */
  color: #374151; /* Neutral-700 (Text color) */
}

.prose th {
  background-color: #d1fae5; /* Green-100 (Header background) */
  color: #065f46; /* Green-700 (Text color) */
}

.dark .prose th {
  background-color: #064e3b; /* Green-900 (Dark mode header background) */
  color: #d1fae5; /* Green-100 (Text color in dark mode) */
  border-color: #4a525f;
}

.dark .prose table {
  background-color: #1f2937; /* Neutral-800 (Dark background) */
}

.dark .prose td {
  color: #d1d5db; /* Neutral-300 (Light text in dark mode) */
  border-color: #4a525f; /* Neutral-700 (Border color in dark mode) */
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
