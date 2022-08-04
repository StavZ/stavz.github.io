<script setup>
import moment from "moment";

const now = moment();
const bd = moment("2004-06-18T02:00:00.000Z");
const age = moment.duration(now.format("x") - bd.format("x")).years();
</script>
<template>
  <div class="home dark">
    <img alt="Logo" class="photo noselect" src="../assets/logo.jpg" />
    <p class="pinfo">
      {{ age }} {{ age < 18 ? "y.o." : "years old"
      }}{{ age < 18 ? " kid" : "" }} • Node.js Developer
    </p>
    <div class="links noselect">
      <a href="https://vk.com/stavzdev" target="_blank" class="vk">
        <span class="iconify" data-icon="bx:bxl-vk" data-inline="true"></span>
      </a>
      <a href="tg://resolve?domain=stavzdev" target="_blank" class="tg">
        <span
          class="iconify"
          data-icon="bx:bxl-telegram"
          data-inline="true"
        ></span>
      </a>
      <a href="https://github.com/StavZ" target="_blank" class="github">
        <span
          class="iconify"
          data-icon="bx:bxl-github"
          data-inline="true"
        ></span>
      </a>
      <a href="https://twitter.com/StavZDev" target="_blank" class="twitter">
        <span
          class="iconify"
          data-icon="bx:bxl-twitter"
          data-inline="true"
        ></span>
      </a>
      <a
        href="https://instagram.com/stavzdev.inst"
        target="_blank"
        class="inst"
      >
        <span
          class="iconify"
          data-icon="bx:bxl-instagram"
          data-inline="true"
        ></span>
      </a>
      <a
        href="https://open.spotify.com/user/acuhb7unxfwyqpagif9bks2ee"
        target="_blank"
        class="spotify"
      >
        <span
          class="iconify"
          data-icon="bx:bxl-spotify"
          data-inline="true"
        ></span>
      </a>
      <a
        href="https://www.youtube.com/channel/UCQcOYjpXiDEWpb34eBtObtQ/"
        target="_blank"
        class="youtube"
      >
        <span
          class="iconify"
          data-icon="ant-design:youtube-filled"
          data-inline="true"
        ></span>
      </a>
    </div>
  </div>
</template>
<style>
.photo {
  width: 300px;
  margin-top: 30px;
  border-radius: 170px;
  border: 1px solid #665452;
  color: #7380ae;
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.4);
}
.pinfo {
  padding-top: 10px;
}
.home {
  max-width: 700px;
  margin: auto;
}
.links {
  padding-top: 20px;
}
.links a {
  color: #acadae !important;
  margin-right: 0.4rem;
  margin-left: 0.4rem;
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color: var(--dark-theme-bg);
  line-height: 2rem;
  text-align: center;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.8);
}
.links a span {
  height: 10px;
}
.links a {
  transition: 0.5s;
}
a.spotify:hover {
  color: #1db954 !important;
}

a.vk:hover {
  color: #2787f5 !important;
}

a.twitter:hover {
  color: #1da1f2 !important;
}

a.inst:hover {
  color: #e1306c !important;
}

a.tg:hover {
  color: #28a8e9 !important;
}

a.github:hover {
  color: white !important;
}
a.npm:hover {
  color: #c13534 !important;
}
a.site:hover {
  color: #1c70e7 !important;
}
a.discord:hover {
  color: #404eed !important;
}
a.youtube:hover {
  color: #ff0000 !important;
}
</style>
