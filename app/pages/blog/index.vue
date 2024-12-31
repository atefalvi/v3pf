<template>
  <NavBar />
  <UContainer>
    <div class="space-y-6 p-5">
      <!-- Blog Header -->
      <h1 class="text-3xl font-bold">Blog Posts</h1>

      <!-- Blog Posts List -->
      <ul class="space-y-6">
        <li v-for="post in posts" :key="post._path">
          <NuxtLink :to="post._path">
            <UCard>
              <h2 class="text-xl font-semibold">{{ post.title }}</h2>
              <p class="text-gray-600 dark:text-gray-400">
                {{ post.description }}
              </p>
            </UCard>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </UContainer>
  <Footer />
</template>

<script setup>
const { data: posts } = await useAsyncData("blog-posts", () => {
  return queryContent("/blog").find();
});
</script>
