<template>
  <NavBar />

  <!-- Hero Section -->
  <main>
    <section
      class="bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
    >
      <UContainer>
        <div
          class="flex flex-col lg:flex-row items-center justify-center py-10 lg:py-16"
        >
          <div class="flex-1 order-2 lg:order-1 text-left">
            <h1 class="text-5xl lg:text-6xl font-extrabold text-left">
              Hi! I am
              <span class="text-green-700 dark:text-green-400"> Atef. </span>

              <RoleTyping class="text-3xl lg:text-4xl" />
            </h1>
            <p
              class="text-xl lg:text-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed"
            >
              I design and build scalable data solutions, uncover insights that
              drive decisions, and lead technical projects to deliver measurable
              impact. Passionate about turning raw data into meaningful stories.
            </p>
          </div>
          <div class="p-5 flex-1 order-1 lg:order-2 flex justify-end">
            <NuxtImg
              src="/herosectionprofile.png"
              alt=""
              class="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </UContainer>
    </section>
  </main>

  <!-- About Me -->
  <section class="py-12 bg-neutral-200 dark:bg-neutral-800">
    <UContainer>
      <div class="mx-auto text-left">
        <h2
          class="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-6"
        >
          About Me
        </h2>
        <div
          class="space-y-4 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed"
        >
          <p>
            I’m Atef, a dedicated and results-driven data professional with a
            passion for solving complex problems and creating meaningful impact
            through data. Over the years, I’ve gained expertise in designing
            scalable data pipelines, building insightful dashboards, and leading
            technical teams to success.
          </p>
          <p>
            Beyond my work, I’m an avid learner who enjoys exploring
            cutting-edge tools, managing my Proxmox homelab, and experimenting
            with innovative solutions in data engineering and analytics.
          </p>
        </div>

        <!-- Fun Fact Alert -->
        <div class="flex mt-6 max-w-md mx-auto justify-center">
          <UAlert
            icon="line-md:chat"
            color="info"
            variant="subtle"
            title="Fun Fact!"
            description="I believe that the best insights come from asking the right questions—and I love finding the answers."
            class="rounded-lg shadow-md"
          />
        </div>
      </div>
    </UContainer>
  </section>

  <!-- How I Work -->
  <section class="py-12 bg-neutral-100 dark:bg-neutral-900">
    <UContainer>
      <h2
        class="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-8"
      >
        How I Work
      </h2>
      <div
        class="space-y-6 text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed"
      >
        <p>
          I deliver efficient, scalable data solutions by focusing on precision,
          performance, and clarity. My process combines technical expertise with
          a deep understanding of business needs to empower impactful decisions.
        </p>
      </div>

      <UAccordion type="multiple" :items="items" class="py-6">
        <template #engineer>
          <div class="text-neutral-800 dark:text-neutral-100 text-left">
            <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Architecting and building scalable data pipelines ensures seamless
              integration, efficient data flow, and robust performance.
            </p>
            <ul
              class="list-disc list-inside mt-4 text-sm text-neutral-600 dark:text-neutral-400"
            >
              <li>
                Develop end-to-end pipelines tailored for reliability and
                scalability.
              </li>
              <li>
                Optimize systems to handle complex, large-scale datasets
                effectively.
              </li>
              <li>
                Enhance storage and retrieval processes for high-speed
                accessibility.
              </li>
            </ul>
            <div
              class="inline-flex gap-5 md:gap-3 mt-6 mb-6 justify-center bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg shadow-md mx-auto"
            >
              <Icon name="logos:dbt" alt="dbt" class="w-6 h-6" />
              <Icon name="logos:snowflake-icon" class="w-6 h-6" />
              <Icon name="logos:airflow-icon" class="w-6 h-6" />
              <Icon name="logos:postgresql" class="w-6 h-6" />
              <Icon name="logos:mongodb-icon" class="w-6 h-6" />
              <Icon name="simple-icons:minio" class="w-6 h-6" />
              <Icon name="logos:docker-icon" class="w-6 h-6" />
              <Icon name="logos:kubernetes" class="w-6 h-6" />
              <Icon name="logos:github-icon" class="w-6 h-6" />
            </div>
          </div>
        </template>

        <template #analyze>
          <div class="text-neutral-800 dark:text-neutral-100 text-left">
            <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Transforming data into valuable insights through advanced
              analytics and machine learning empowers informed, data-driven
              decisions.
            </p>
            <ul
              class="list-disc list-inside mt-2 text-sm text-gray-500 dark:text-gray-400"
            >
              <li>
                Build predictive models to anticipate trends and inform
                strategy.
              </li>
              <li>
                Extract meaningful patterns from complex datasets to drive
                growth.
              </li>
              <li>
                Identify and address operational inefficiencies using deep data
                analysis.
              </li>
            </ul>
            <div
              class="inline-flex gap-5 mt-2 mb-4 justify-center bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg shadow-md mx-auto"
            >
              <Icon name="logos:python" class="w-6 h-6" />
              <Icon name="logos:jupyter" class="w-6 h-6" />
              <Icon name="logos:pandas-icon" class="w-6 h-6" />
              <Icon name="devicon:scikitlearn" class="w-6 h-6" />
              <Icon name="logos:apache-spark" class="w-6 h-6" />
              <Icon name="logos:salesforce" class="w-6 h-6" />
              <Icon name="logos:splunk" class="w-6 h-6" />
              <Icon name="vscode-icons:file-type-excel" class="w-6 h-6" />
            </div>
          </div>
        </template>

        <template #visualize>
          <div class="text-neutral-800 dark:text-neutral-100 text-left">
            <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Crafting intuitive visualizations and dashboards translates
              complex data into actionable narratives, enabling stakeholders to
              act with confidence.
            </p>
            <ul
              class="list-disc list-inside mt-2 text-sm text-gray-500 dark:text-gray-400"
            >
              <li>
                Design dashboards that simplify decision-making processes.
              </li>
              <li>
                Develop visuals that communicate key trends and metrics
                effectively.
              </li>
              <li>
                Present clear, compelling data stories tailored for diverse
                audiences.
              </li>
            </ul>
            <div
              class="inline-flex gap-5 mt-2 mb-4 justify-center bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg shadow-md mx-auto"
            >
              <Icon name="logos:tableau-icon" class="w-6 h-6" />
              <Icon name="logos:microsoft-power-bi" class="w-6 h-6" />
              <Icon name="logos:apache-superset-icon" class="w-6 h-6" />
              <Icon name="logos:streamlit" class="w-6 h-6" />
              <Icon name="logos:miro" class="w-6 h-6" />
              <Icon name="logos:confluence" class="w-6 h-6" />
              <Icon name="logos:slides" class="w-6 h-6" />
              <Icon name="logos:nuxt-icon" class="w-6 h-6" />
              <Icon name="logos:tailwindcss-icon" class="w-6 h-6" />
            </div>
          </div>
        </template>
      </UAccordion>

      <div class="flex mt-6 max-w-md mx-auto justify-center">
        <UAlert
          icon="line-md:lightbulb"
          variant="subtle"
          title="Tips!"
          description="Success in data is not just technical—it’s relational. Focus on understanding the problem, fostering collaboration, and communicating insights clearly for maximum impact."
          class="rounded-lg shadow-md"
          color="success"
        />
      </div>
    </UContainer>
  </section>

  <!-- Featured Blogs -->
  <section class="py-12 bg-neutral-200 dark:bg-neutral-800">
    <UContainer>
      <div>
        <h2
          class="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-6"
        >
          Featured Blogs
        </h2>
      </div>
      <!-- Pull Recent 3 Blogs with Featured Tag -->
      <div class="justify-center">
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li
            v-for="(post, index) in featuredblog"
            :key="post._path"
            class="border rounded-md shadow-md relative min-h-[150px] overflow-hidden hover:border-green-500 hover:shadow-[0_0_20px_rgba(72,187,120,0.6)] transition-all duration-400"
          >
            <NuxtLink :to="post._path">
              <!-- image -->
              <div
                class="absolute inset-0 bg-cover bg-center"
                :style="{ 'background-image': `url(${post.image})` }"
              ></div>
              <!-- overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"
              ></div>
              <!-- body -->
              <div class="relative z-10 p-3 text-white">
                <div class="text text-xl font font-bold">{{ post.title }}</div>
                <div class="text-shadow mb-2">
                  {{ post.description }}
                </div>
                <div
                  v-for="(tag, index) in post.tags"
                  :key="index"
                  class="inline-block bg-green-700 rounded-full text-xs px-2 py-1 mr-2"
                >
                  {{ tag }}
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </UContainer>
  </section>

  <!-- Contact Me -->
  <section class="py-12 bg-neutral-100 dark:bg-neutral-900">
    <UContainer>
      <section>
        <h2
          class="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-8"
        >
          Let's Build Something Great Together!
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          Looking for a data analyst or a developer for your next project? Reach
          out, and let’s make it happen!
        </p>
        <UButton @click="open = true">Contact Me</UButton>
        <ContactMe v-model="open" />
      </section>
    </UContainer>
  </section>

  <Footer />
</template>

<script setup lang="ts">
// State for modal
const open = ref(false);
watch(open, (newValue) => {
  console.log("open state:", newValue);
});

// Accordion Labels and Icons
const items = [
  {
    label: "Engineer",
    icon: "i-heroicons-wrench-screwdriver",
    slot: "engineer",
  },
  {
    label: "Analyze",
    icon: "i-heroicons-square-3-stack-3d",
    slot: "analyze",
  },
  {
    label: "Visualize",
    icon: "i-heroicons-adjustments-horizontal",
    slot: "visualize",
  },
];

// Query for 3 Featured Blogs
const featuredblog = await queryContent("blog")
  .sort({ date: -1 })
  .where({ tags: { $icontains: "featured" } })
  .limit(3)
  .find();
</script>
