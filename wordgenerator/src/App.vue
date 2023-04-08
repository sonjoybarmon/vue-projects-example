<template>
  <main>
    <h1>Word limit is: {{ limit }}</h1>
    <input
      type="range"
      min="1"
      max="50"
      :value="limit"
      v-on:change="handleSlideChange"
    />

    <br />
    <br />

    <button @click="generateWord" class="mt-3">Generate Words</button>
    <br />
    <br />

    <div v-if="word" class="card mt-4 bg-dark text-light p-2">
      <p>{{ word }}</p>
    </div>
  </main>
</template>

<script>
import arrayOfWords from "./utils/word.js";

export default {
  name: "App",
  data() {
    return {
      limit: 1,
      word: "",
    };
  },
  methods: {
    handleSlideChange(e) {
      this.limit = e.target.value;
    },

    generateWord() {
      // this.word = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
      this.word = arrayOfWords.slice(0, this.limit).join(" ");
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Roboto", sans-serif;
}
h1 {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1rem;
}
p {
  margin-bottom: 1rem;
}
button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 300;
  border: none;
  border-radius: 0.25rem;
  background-color: #f1f1f1;
  cursor: pointer;
}
button:hover {
  background-color: #e1e1e1;
}
</style>
