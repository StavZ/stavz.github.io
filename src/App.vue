<template>
  <div class="container">
    <div id="nav" class="noselect">
      <router-link to="/">Home</router-link> |
      <router-link to="/projects">Projects</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark-theme-color);
}

.container {
  min-height: 100vh;
}

#nav {
  margin: auto;
  max-width: 700px;
  padding-top: 30px;
  display: inline-block;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: var(--dark-theme-color);
}

#nav a.router-link-exact-active {
  color: var(--ls-color);
  padding-bottom: 1px;
  border-bottom: 0.13em solid var(--ls-color);
}
</style>
