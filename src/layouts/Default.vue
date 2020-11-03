<template>
  <main class="layout" role="main">
    <Header />
    <slot />
    <div class="footer">
      <p>
        chutedeau@daum.net
      </p>
    </div>
  </main>
</template>

<script>
import Header from "./partials/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style>
:root {
  --text-color: #333;
  --border-color: #4000a7;
  --bkg-color: white;
  --line-color: #4000a7;
}
:root [data-theme="sepia"] {
  --text-color: #433422;
  --border-color: #3b120d;
  --bkg-color: #f1e7d0;
  --line-color: #3b120d;
}

:root [data-theme="dark"] {
  --text-color: #ffffff;
  --border-color: #9dfe43;
  --bkg-color: #030200;
  --line-color: #9dfe43;
}
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  border: 15px solid var(--border-color);
  min-height: 100%;
  background-color: var(--bkg-color);
  color: var(--text-color);
  transition: background 0.3s;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.footer {
  padding-top: calc(30em / 4);
  text-align: center;
  font-size: 1em;
}

.link {
  border: 2px dashed var(--border-color);
  padding: 7px;
  color: var(--text-color);
  text-decoration: none;
}
</style>
