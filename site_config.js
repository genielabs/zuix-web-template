var siteConfig = {

    content: [
        {
            id: 'about',
            template: 'app/layout/side_menu_item',
            data: {
                title: 'About',
                icon: 'info_outline',
                link: '#/about',
                file: 'content/about.md'
            }
        },
        {
            id: 'docs',
            template: 'app/layout/side_menu_item',
            data: {
                title: 'Documentation',
                icon: 'import_contacts',
                link: '#/docs/content_files'
            },
            list: [
                {
                    id: 'content_files',
                    template: 'app/layout/side_menu_subitem',
                    data: {
                        title: 'Content',
                        link: '#/docs/content_files',
                        file: 'content/docs/content_files.md'
                    }
                },
                {
                    id: 'side_menu',
                    template: 'app/layout/side_menu_subitem',
                    data: {
                        title: 'Side menu',
                        link: '#/docs/side_menu',
                        file: 'content/docs/side_menu.md'
                    }
                },
                {
                    id: 'theme',
                    template: 'app/layout/side_menu_subitem',
                    data: {
                        title: 'Theme',
                        link: '#/docs/theme',
                        file: 'content/docs/theme.md'
                    }
                },
                {
                    id: 'site_bundling',
                    template: 'app/layout/side_menu_subitem',
                    data: {
                        title: 'Bundling',
                        link: '#/docs/site_bundling',
                        file: 'content/docs/site_bundling.md'
                    }
                }

            ]
        },
        {
            id: 'kit',
            template: 'app/layout/side_menu_item',
            data: {
                title: 'Kit',
                icon: 'extension',
                link: '#/kit/components'
            },
            list: [
                {
                    id: 'components',
                    template: 'app/layout/side_menu_subitem',
                    data: {
                        title: 'Components',
                        link: '#/kit/components',
                        file: 'content/kit/components.html'
                    }
                },
                {
                    id: 'templates',
                    template: 'app/layout/side_menu_subitem',
                    data: {
                        title: 'Templates',
                        link: '#/kit/templates',
                        file: 'content/kit/templates.html'
                    }
                }
            ]
        }
    ],

    strings: {
        startPage: '#/about',
        baseUrl: '/',
        title: 'Website Demo'
    }

};
