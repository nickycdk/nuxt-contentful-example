<template>
  <div class="page-component">
    <hr />
    <h1>{{page.fields.heading}}</h1>
    <img :src="page.fields.image.fields.file.url" :alt="page.fields.heading" v-if="page.fields.image" />
    <p>
      {{page.fields.content}}
    </p>
  </div>
</template>

<script>
  import {createClient} from '../../plugins/contentful';
  const contentfulClient = createClient();

  export default {
    name: 'index',
    asyncData ({ env, params }) {
      return contentfulClient.getEntries({
        'content_type': 'frontpage',
        'fields.slug': params.id
      }).then(page => {
        return {
          page: page.items[0]
        }
      }).catch(console.error)
    }
  }
</script>

<style scoped lang="scss">
  hr {
    margin:20px 0;
  }
  .page-component {
    padding: 50px;
    max-width:1280px;
    margin: 0 auto;
    img {
      margin: 50px 0;
    }
  }
</style>
