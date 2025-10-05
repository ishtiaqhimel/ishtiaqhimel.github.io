import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Ishtiaq's Notebook",
  description: "Keeping My Learning Materials Organized",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {src: '/logo.svg', width: 24, height: 24},

    nav: nav(),

    sidebar: {
      '/notes/': { base: '/notes/', items: sidebarNotes() },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ishtiaqhimel' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/md-ishtiaq-islam/' }
    ]
  }
})


function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Notes',
      link: '/notes/content',
    },
    {
      text: 'About Me',
      link: '/me/index'
    }
  ]
}

function sidebarNotes(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Linux',
      collapsed: true,
      items: [
        {text: 'Getting Started With Linux', link: '/linux/intro'}
      ]
    },
    {
      text: 'Networking',
      collapsed: true,
      items: [
        {
          text: 'Networking Fundamentals',
          collapsed: true,
          items: [
            {text: 'Network Devices', link: '/network-devices'}
          ]
        },
      ]
    },
    {
      text: 'GitHub Actions',
      collapsed: true,
      items: [
        {text: 'Getting Started With GitHub Actions', link: '/github-actions/intro'}
      ]
    },
    {
      text: 'Golang',
      collapsed: true,
      items: [
        {text: 'Concurrency', link: '/golang/concurrency'},
        {text: 'Concurrency Pattern', link: '/golang/concurrency-patterns'}
      ]
    },
    {
      text: 'Python',
      collapsed: true,
      items: [
        {text: 'Basic Syntax', link: '/python/basic-syntax'},
        {text: 'Variables', link: '/python/variables'},
        {text: 'data-types', link: '/python/data-types'},
      ]
    }
  ]
}