<script>
  import '@svelteness/kit-docs/client/polyfills/index.js';
  import '@svelteness/kit-docs/client/styles/normalize.css';
  import '@svelteness/kit-docs/client/styles/fonts.css';
  import '@svelteness/kit-docs/client/styles/theme.css';
  import '$lib/styles/kit-docs.css'

  import { page } from '$app/stores';
  // import Logo from '$img/logo.svg?raw';

  import { Button, KitDocs, KitDocsLayout, createSidebarContext } from '@svelteness/kit-docs';

  /** @type {import('./$types').LayoutData} */
  export let data;

  $: ({ meta, sidebar } = data);

  /** @type {import('@svelteness/kit-docs').NavbarConfig} */
  const navbar = {
    links: [/* { title: 'Documentation', slug: '/docs', match: /\/docs/ } */],
  };

  const { activeCategory } = createSidebarContext(sidebar);

  $: category = $activeCategory ? `${$activeCategory}: ` : '';
  $: title = meta ? `${category}${meta.title} | KitDocs` : null;
  $: description = meta?.description;
</script>

<svelte:head>
  {#key $page.url.pathname}
    {#if title}
      <title>{title}</title>
    {/if}
    {#if description}
      <meta name="description" content={description} />
    {/if}
  {/key}
</svelte:head>

<KitDocs {meta}>
  <KitDocsLayout search {navbar} {sidebar}>
    <!-- TODO: Style searchbox -->
    <!-- <input type="text" placeholder="Search documentation" slot="search" /> -->
    <div class="logo" slot="navbar-left">
      <Button href="/">
        <!-- {@html Logo} -->
        <h1>EFC - Production Workflow Guide</h1>
      </Button>
    </div>
    <div slot="navbar-right" />

    <slot />
  </KitDocsLayout>
</KitDocs>

<style>
  :global(:root) {
    --kd-color-brand: 170 0 0;
    /* --kd-color-brand-rgb: 233, 127, 6; */
  }

  :global(:root.dark) {
    --kd-color-brand: 255 20 20;
    /* --kd-color-brand-rgb: 213, 149, 76; */
  }

  .logo :global(a) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo :global(svg) {
    height: 36px;
    overflow: hidden;
  }
</style>
