import type { DefaultTheme } from 'vitepress';

export default <DefaultTheme.Config> {
    search: {
        provider: 'local',
        options: {
            translations: {
                button: {
                    buttonText: 'Search',
                    buttonAriaLabel: 'Search',
                },
                modal: {
                    displayDetails: 'Show detailed list',
                    resetButtonTitle: 'Reset search',
                    backButtonTitle: 'Close search',
                    noResultsText: 'No results found',
                    footer: {
                        selectText: 'Select',
                        selectKeyAriaLabel: 'enter',
                        navigateText: 'Navigate',
                        navigateUpKeyAriaLabel: 'Arrow Up',
                        navigateDownKeyAriaLabel: 'Arrow Down',
                        closeText: 'Close',
                        closeKeyAriaLabel: 'esc',
                    },
                },
            },
        },
    },
    docFooter: {
        prev: 'Previous',
        next: 'Next'
    },
    darkModeSwitchLabel: 'Appearance',
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    editLink: {
        pattern: 'https://github.com/zalithlauncher/zalithdocs/edit/main/:path',
        text: 'Edit this page on GitHub'
    },
    lastUpdated: {
        text: 'Updated at',
        formatOptions: {
            dateStyle: 'medium',
            timeStyle: 'short'
        }
    },
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Download', link: 'https://www.zalithlauncher.cn/download' },
        { text: 'Announcement', link: '/docs/announcement/discord-shutdown' },
        { 
            text: 'More',
            items: [
                { text: 'Launcher Documentation', link: '/docs/projects/zl2' },
                { text: 'About this site', link: '/docs/about/about' }
            ]
        }
    ],
    sidebar: [
        {
            text: 'Projects',
            items: [
                { text: 'Zalith Launcher 1', link: '/docs/projects/zl1' },
                { text: 'Zalith Launcher 2', link: '/docs/projects/zl2' }
            ]
        },
        {
            text: 'ZL2 Launcher Help',
            items: [
                { text: 'Download and Install Game', link: '/docs/help/download_game' },
                { text: 'ModLoader', link: '/docs/help/modloader' },
                { text: 'Account', link: '/docs/help/account' },
                { text: '3rd Authentication Servers', link: '/docs/help/auth_server' },
                { text: 'Replace Skin or Capes', link: '/docs/help/changing_skin_capes'},
                { text: 'Version Isolation', link: '/docs/help/version_isolation' }
            ]
        },
        {
            text: 'ZL2 Control Layout Help',
            collapsed: true,
            items: [
                { text: 'Overview', link: '/docs/control2_help/overview' },
                { text: 'Basic Editor Operations', link: '/docs/control2_help/basic_operation' },
                { text: "Control Layout Operations", link: "/docs/control2_help/control_layout_operations" },
                { text: 'Control Layer', link: '/docs/control2_help/control_layer' },
                { text: 'Controls', link: '/docs/control2_help/controls' }
            ]
        },
        {
            text: 'About this site',
            items: [
                { text: 'About', link: '/docs/about/about' },
                { text: 'Privacy Policy', link: '/docs/about/privacy' },
                { text: 'Terms of Service', link: '/docs/about/terms' }
            ]
        }
    ],
    outlineTitle: 'On this page',

    footer: {
        message: '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">新ICP备2024015133号-4</a>',
        copyright: 'Copyright © 2025 Zalith Launcher, All rights reserved. | MIT License'
    },

    notFound: {
        title: 'PAGE NOT FOUND',
        quote: "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
        linkText: 'Take me home'
    }

};
