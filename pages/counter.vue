<template>
  <section class="container">
    <div>
      <h1 class="title">
        counter
      </h1>
    </div>
    <div>
      <h3>{{ $store.state.counter }}</h3>
      <button @click="$store.commit('increment')">increment</button>
      <button @click="$store.commit('decrement')">decrement</button>
    </div>
  </section>
</template>
