<template>
  <div class="navigation">
    <nav>
      <ul role="menu">
        <li v-for="(navItem, index) in navItems" :key="index">
          <nuxt-link :to="'/' + navItem.fields.slug.trim()" role="menuitem">{{navItem.fields.navTitle}}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'Navigation',
    computed: {
      ...mapState('navigation', [
        'navItems'
      ])
    },
    mounted() {
      this.$store.dispatch("navigation/getPageItems");
    }
  }
</script>

<style lang="scss" scoped>
  .navigation {
    background-color:#f1f1f1;
    padding: 50px 0;
    ul {
      padding:0;
      margin:0;
      list-style:none;
    }
    li {
      display:inline-block;
      padding: 0 10px;
    }

    a {
      color:#333;
      text-decoration: none;
    }

  }
</style>


