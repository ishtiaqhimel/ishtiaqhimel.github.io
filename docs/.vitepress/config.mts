import { DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Ishtiaq's Notebook",
  description: "Keeping My Learning Materials Organized",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: nav(),

    sidebar: {
      '/notes/': { base: '/notes/', items: sidebarNotes() },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
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
      collapsed: false,
      items: [
        {text: 'Getting Started With Linux', link: '/linux/intro'}
      ]
    },
    {
      text: 'Networking',
      collapsed: false,
      items: [
        {
          text: 'Networking Fundamentals',
          collapsed: false,
          items: [
            {text: 'Network Devices', link: '/network-devices'}
          ]
        },
      ]
    },
    {
      text: 'GitHub Actions',
      collapsed: false,
      items: [
        {text: 'Getting Started With GitHub Actions', link: '/github-actions/intro'}
      ]
    }
  ]
}