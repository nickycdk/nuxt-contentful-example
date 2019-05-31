<template>
  <section class="container">
    <div class="container__content">
      <h1>Please select a page you wish to view</h1>
      <p>This is a website for demo purposes of using Nuxt & Contentful together</p>
    </div>
  </section>
</template>

<script>
  import Navigation from '../components/Navigation';

  import {createClient} from '../plugins/contentful';
  const contentfulClient = createClient();

  export default {
    components: {
      Navigation
    },
    /*asyncData ({env}) {
      return Promise.all([
        // fetch all blog posts sorted by creation date
        contentfulClient.getEntries({
          'content_type': 'frontpage',
          order: '-sys.createdAt'
        })
      ]).then(([pages]) => {
        // return data that should be available
        // in the template
        return {
          pages: pages.items
        }
      }).catch(console.error)
    }*/
  }
</script>

<style scoped lang="scss">
  .container {
    padding: 50px;
    max-width:1280px;
    margin: 0 auto;
  }
  .container__content {
    padding: 50px 0;
    text-align:center;
  }
</style>
