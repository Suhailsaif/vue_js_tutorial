<template>
    <div class="reactivities-container">
        <h1 class="title">Vue 3 Reactivity Showcase</h1>
        
                <!-- Computed Section -->
        <div class="section">
            <h2>if else if , for loop </h2>
            <p><div v-if="isTrue">Show Values</div></p>
            <p>Is Adult: {{ isAdult ? 'Yes' : 'No' }}</p>
            <div>
                        <p> <strong>V-If, V-else-if</strong ></p>
    <h1 v-if="score >= 90">Grade: A+</h1>

    <h1 v-else-if="score >= 75">Grade: B</h1>

    <h1 v-else>Grade: C</h1>
        <p> <strong>V-Show</strong ></p>
    <p v-show="isLoggedIn">Welcome Back, User!</p>
    <ul>
        <p> <strong>For Loop</strong ></p>
    <li v-for="(fruit, index) in fruits" :key="index">
      {{ index + 1 }}. {{ fruit }}
    </li>
  </ul>
  </div>
        </div>
        <!-- Ref Section -->
        <div class="section">
            <h2>Ref</h2>
            <p>Count: {{ count }}</p>
            <button @click="increment" class="btn">Increment</button>
            <button @click="decrement" class="btn">Decrement</button>
        </div>
        
        <!-- Reactive Section -->
        <div class="section">
            <h2>Reactive</h2>
            <p>Name: {{ user.first_name }}</p>
            <p>Age: {{ user.age }}</p>
            <input v-model="user.first_name" placeholder="Name" class="input">
            <input v-model="user.age" placeholder="Age" class="input">
        </div>
        
        <!-- Computed Section -->
        <div class="section">
            <h2>Computed</h2>
            <p>Full Name: {{ fullName }}</p>
            <p>Is Adult: {{ isAdult ? 'Yes' : 'No' }}</p>
        </div>
        
        <!-- Watch Section -->
        <div class="section">
            <h2>Watch</h2>
            <p>Watch Count: {{ watchCount }}</p>
            <button @click="incrementWatch" class="btn">Increment Watch</button>
            <p>Watch Effect: {{ watchEffectMsg }}</p>
        </div>
        
        <!-- WatchEffect Section -->
        <div class="section">
            <h2>WatchEffect</h2>
            <p>Effect triggered: {{ effectCount }}</p>
            <button @click="triggerEffect" class="btn">Trigger Effect</button>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

 // if else if
 const isTrue = ref("true");
 const score = ref(96)
 const isLoggedIn = ref("hi")
 const fruits = reactive(['Apple', 'Banana', 'Mango'])

// Ref
const count = ref(0)
const increment = () => count.value++
const decrement = () => count.value--


// Reactive
const user = reactive([{
    first_name: 'John',
    age: 25
},
{
    first_name: 'Jane',
    age: 30
}])

// Computed
const fullName = computed(() => `${user[0].first_name} Doe`)
const isAdult = computed(() => user[0].age >= 18)

// Watch
const watchCount = ref(0)
const watchEffectMsg = ref('')
watch(watchCount, (newVal, oldVal) => {
    watchEffectMsg.value = `Changed from ${oldVal} to ${newVal}`
})
const incrementWatch = () => watchCount.value++

// WatchEffect
const effectCount = ref(0)
watchEffect(() => {
    console.log('Effect triggered:', effectCount.value)
})
const triggerEffect = () => effectCount.value++
</script>

<style scoped>
.reactivities-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2.5em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.section {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    backdrop-filter: blur(10px);
}

.section h2 {
    margin-top: 0;
    font-size: 1.5em;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 10px;
}

.btn {
    background: #222;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    margin: 10px 5px;
    transition: background 0.3s;
}

.btn:hover {
    background: #000;
}

.input {
    padding: 10px;
    margin: 10px 5px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    width: 200px;
}

p {
    margin: 10px 0;
    font-size: 1.1em;
}
</style>