<template>
  <section class="home-page">
    <div class="hero">
      <div>
        <p class="eyebrow">Vue 3 Tutorial</p>
        <h1>Build beautiful apps with Vue 3</h1>
        <p class="subtitle">
          Explore the core concepts and modern patterns with an easy navigation menu of all topics.
        </p>
      </div>
      <div class="hero-card">
        <h2>Topics</h2>
        <p>Jump to any topic and start learning.</p>
      </div>
    </div>

    <nav class="topic-nav">
      <ul>
        <li v-for="topic in topics" :key="topic.id">
    <router-link :to="`/${topic.id}`">
  {{ topic.label }}
</router-link>
        </li>
      </ul>
    </nav>

    <div class="topic-grid">
      <article v-for="topic in topics" :key="topic.id" :id="topic.id" class="topic-card">
        <h3>{{ topic.label }}</h3>
        <p>{{ topic.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const topics = [
  { id: "introduction", label: "Introduction", description: "Overview of Vue 3 and what makes it a modern JavaScript framework." },
  { id: "installation", label: "Installation", description: "Set up Vue 3 with Vite, CLI, or manual configuration." },
  { id: "components", label: "Components", description: "Create reusable UI building blocks with single-file components." },
  { id: "template-syntax", label: "Template Syntax", description: "Learn the reactive template syntax and directives in Vue." },
  { id: "reactivity", label: "Reactivity", description: "Understand reactive state, refs, and reactive objects." },
  { id: "composition-api", label: "Composition API", description: "Use the Composition API for flexible and maintainable code." },
  { id: "props-emits", label: "Props & Emits", description: "Pass data between components and emit events." },
  { id: "lifecycle-hooks", label: "Lifecycle Hooks", description: "Use component lifecycle hooks for setup and cleanup logic." },
  { id: "routing", label: "Routing", description: "Navigate between pages using Vue Router." },
  { id: "state-management", label: "State Management", description: "Manage shared application state with Pinia or Vuex." },
  { id: "forms", label: "Forms", description: "Build and validate forms with two-way binding." },
  { id: "watchers", label: "Watchers", description: "Respond to reactive data changes with watchers and computed values." },
  { id: "custom-directives", label: "Custom Directives", description: "Extend Vue's template syntax with custom directives." },
  { id: "transitions", label: "Transitions", description: "Add motion and animations to your Vue application." }
]
</script>

<style scoped>
.home-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  color: #1f2937;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.hero {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.75rem;
  color: #2563eb;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.85rem;
}

h1 {
  font-size: clamp(2.5rem, 4vw, 4rem);
  margin: 0;
  line-height: 1.05;
}

.subtitle {
  margin-top: 1rem;
  max-width: 42rem;
  color: #4b5563;
  line-height: 1.75;
}

.hero-card {
  background: linear-gradient(180deg, rgba(37, 99, 235, 0.1), rgba(59, 130, 246, 0.06));
  border: 1px solid rgba(37, 99, 235, 0.15);
  border-radius: 1.25rem;
  padding: 1.75rem;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
}

.hero-card h2 {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
}

.topic-nav {
  margin-bottom: 2rem;
  overflow-x: auto;
}

.topic-nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.topic-nav a {
  display: inline-block;
  padding: 0.75rem 1.1rem;
  border-radius: 999px;
  background: #f3f4f6;
  color: #1f2937;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s ease, transform 0.2s ease;
}

.topic-nav a:hover {
  background: #2563eb;
  color: #ffffff;
  transform: translateY(-1px);
}

.topic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.topic-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.topic-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);
}

.topic-card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.15rem;
  color: #111827;
}

.topic-card p {
  margin: 0;
  color: #4b5563;
  line-height: 1.65;
}

@media (max-width: 800px) {
  .hero {
    grid-template-columns: 1fr;
  }
}
</style>