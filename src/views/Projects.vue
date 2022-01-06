<script>
const json = (res) => res.json();
const noop = () => {};
const data = {
  downloads: "...",
  stars: "...",
  contributors: "...",
  version: "...",
  fetching: false,
};

export default {
  data() {
    return data;
  },

  beforeMount() {
    this.fetch();
  },

  methods: {
    async fetch() {
      if (this.fetching) return;
      this.fetching = true;

      const [downloads, stars, contributors, meta] = await Promise.all([
        fetch(
          "https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/hypixel-api-reborn"
        ).then(json, noop),
        fetch(
          "https://api.github.com/repos/hypixel-api-reborn/hypixel-api-reborn"
        ).then(json, noop),
        fetch(
          "https://api.github.com/repos/hypixel-api-reborn/hypixel-api-reborn/stats/contributors"
        ).then(json, noop),
        fetch(
          "https://raw.githubusercontent.com/StavZ/timetable-telegram-bot/master/package.json"
        ).then(json, noop),
      ]);

      if (downloads) {
        this.downloads = 0;
        for (const item of downloads.downloads)
          this.downloads += item.downloads;
        this.downloads = `${Math.floor(this.downloads / 1000)}k`;
      }
      if (meta) this.version = `v${meta.version}`;
      if (stars) this.stars = stars.stargazers_count.toLocaleString();
      if (contributors)
        this.contributors = contributors.length.toLocaleString();
    },
  },
};
</script>

<template>
  <div class="projects">
    <div class="project-item">
      <h3 class="title">Hypixel API • Reborn</h3>
      <p class="desc">
        A feature-rich
        <a href="https://api.hypixel.net" target="_blank" class="ha-link"
          >Hypixel API</a
        >
        wrapper for Node.js.
      </p>
      <div class="stats">
        <div class="downloads s-item" title="downloads">
          <span class="iconify" data-icon="bx:bxs-download"></span>
          {{ downloads }}
        </div>
        <div class="stars s-item" title="stars">
          <span class="iconify" data-icon="ant-design:star-filled"></span>
          {{ stars }}
        </div>
        <div class="contributors s-item" title="contributors">
          <span class="iconify" data-icon="gridicons:multiple-users"></span>
          {{ contributors }}
        </div>
      </div>
      <div class="links">
        <a
          href="https://github.com/Hypixel-API-Reborn/hypixel-api-reborn"
          target="_blank"
          class="github link"
        >
          <span
            class="iconify"
            data-icon="bx:bxl-github"
            data-inline="true"
          ></span>
        </a>
        <a
          class="link npm"
          href="https://www.npmjs.com/package/hypixel-api-reborn"
          target="_blank"
        >
          <span class="iconify" data-icon="ri:npmjs-fill"></span>
        </a>
        <a
          class="link site"
          href="https://hypixel.stavzdev.me/#/"
          target="_blank"
        >
          <span class="iconify" data-icon="mdi:web"></span>
        </a>
        <a
          href="https://discord.gg/NSEBNMM"
          class="link discord"
          target="_blank"
        >
          <span class="iconify" data-icon="bx:bxl-discord-alt"></span>
        </a>
      </div>
    </div>
    <div class="project-item">
      <h3 class="titl">Schedule Telegram Bot</h3>
      <p class="desc">
        A Telegram bot that automatically sends the class timetable from my
        college website.
      </p>
      <div class="stats">
        <div class="users s-item" title="users">
          <span class="iconify" data-icon="gridicons:multiple-users"></span>
          300+
        </div>
        <div class="version s-item" title="version">
          <span class="iconify" data-icon="system-uicons:version"></span>
          {{ version }}
        </div>
      </div>
      <div class="links">
        <a
          href="https://github.com/StavZ/timetable-telegram-bot"
          target="_blank"
          class="github link"
        >
          <span
            class="iconify"
            data-icon="bx:bxl-github"
            data-inline="true"
          ></span>
        </a>
        <a href="https://t.me/ppkslavyanovabot" target="_blank" class="tg link">
          <span
            class="iconify"
            data-icon="bx:bxl-telegram"
            data-inline="true"
          ></span>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.projects {
  margin-top: 30px;
  max-width: 700px;
  margin-right: auto;
  margin-left: auto;
}
.desc {
  padding: 0;
  margin: 0;
}
.ha-link {
  color: var(--ls-color);
  text-decoration: none;
}
.project-item {
  padding-top: 20px;
}
.stats {
  padding-top: 10px;
  display: inline-flex;
}
.s-item {
  margin-right: 10px;
  margin-left: 10px;
}
.links {
  padding: 10px !important;
}
</style>