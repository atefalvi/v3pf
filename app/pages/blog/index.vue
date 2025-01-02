<template>
  <NavBar />
  <UContainer>
    <div class="space-y-8 p-4">
      <!-- Blog Header -->
      <h1 class="text-4xl font-bold text-neutral-800 dark:text-neutral-100">
        Blog Posts
      </h1>

      <!-- Search Bar and Tag Filter -->
      <div class="flex flex-col md:flex-row gap-4">
        <!-- Search Bar -->
        <UInput
          v-model="searchQuery"
          placeholder="Search posts..."
          class="flex-1"
          color="success"
          variant="outline"
        />
      </div>

      <!-- Blog Posts Grid -->
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li
          v-for="(post, index) in filteredPosts"
          :key="post._path"
          class="animate-fade-in"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <NuxtLink
            :to="post._path"
            class="block group relative h-50 rounded-lg overflow-hidden shadow-md border border-neutral-200 dark:border-neutral-700 transition-transform duration-300 hover:scale-105"
          >
            <!-- Background Image -->
            <div
              class="absolute inset-0 bg-cover bg-center"
              :style="{
                backgroundImage: post.image ? `url(${post.image})` : 'none',
                backgroundColor: post.image
                  ? 'transparent'
                  : solidColors[index % solidColors.length],
              }"
            ></div>

            <!-- Gradient Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:via-black/60 group-hover:to-transparent transition-all duration-300"
            ></div>

            <!-- Content -->
            <div
              class="relative z-10 flex flex-col justify-end h-full p-4 text-neutral-100"
            >
              <!-- Title -->
              <h2
                class="text-lg font-bold leading-tight truncate"
                :title="post.title"
              >
                {{ post.title }}
              </h2>

              <!-- Description -->
              <p
                class="text-sm truncate overflow-hidden"
                :title="post.description"
              >
                {{ post.description }}
              </p>

              <!-- Date -->
              <span class="text-xs text-neutral-300">{{ post.date }}</span>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mt-1">
                <span
                  v-for="tag in post.tags"
                  :key="tag"
                  class="bg-green-500 text-white text-xs px-3 py-1 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </UContainer>
  <Footer />
</template>

<script setup>
const solidColors = [
  "#a7d7c5", // Pastel Green
  "#a6c8e2", // Pastel Blue
  "#fddba7", // Pastel Amber
  "#f7b2d9", // Pastel Pink
  "#cbbde7", // Pastel Purple
  "#b9e4c9", // Pastel Lime
  "#fbcbb4", // Pastel Orange
  "#a3d9e4", // Pastel Teal
];

// Fetch posts
const { data: posts } = await useAsyncData("blog-posts", () => {
  return queryContent("/blog").sort({ date: -1 }).find();
});

// Search query
const searchQuery = ref("");

// Filtered posts based on search query and selected tag
const filteredPosts = computed(() => {
  return posts.value.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    return matchesSearch;
  });
});
</script>
