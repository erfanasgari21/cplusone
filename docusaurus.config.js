const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
    module.exports = {
        title: "سی بعلاوه یک",
        tagline: "Dinosaurs are cool",
        url: "https://your-docusaurus-test-site.com",
        baseUrl: "/",
        onBrokenLinks: "throw",
        onBrokenMarkdownLinks: "warn",
        favicon: "img/favicon.ico",
        organizationName: "facebook", // Usually your GitHub org/user name.
        projectName: "docusaurus", // Usually your repo name.
        i18n: {
            defaultLocale: "fa",
            locales: ["fa"],
            localeConfigs: {
                fa: {
                    label: "فارسی",
                    direction: "rtl",
                },
            },
        },
        presets: [
            [
                "@docusaurus/preset-classic",
                /** @type {import('@docusaurus/preset-classic').Options} */
                ({
                    docs: {
                        sidebarPath: require.resolve("./sidebars.js"),
                        // Please change this to your repo.
                        editUrl: "https://github.com/facebook/docusaurus/edit/main/website/",
                        remarkPlugins: [math],
                        rehypePlugins: [katex],
                    },
                    blog: {
                        showReadingTime: true,
                        // Please change this to your repo.
                        editUrl: "https://github.com/facebook/docusaurus/edit/main/website/blog/",
                    },
                    theme: {
                        customCss: require.resolve("./src/css/custom.css"),
                    },
                }),
            ],
        ],

        themeConfig:
            /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                navbar: {
                    title: "My Site",
                    logo: {
                        alt: "My Site Logo",
                        src: "img/logo.svg",
                    },
                    items: [
                        {
                            type: "doc",
                            docId: "intro",
                            position: "left",
                            label: "Tutorial",
                        },
                        { to: "/blog", label: "Blog", position: "left" },
                        {
                            href: "https://github.com/facebook/docusaurus",
                            label: "GitHub",
                            position: "right",
                        },
                    ],
                },
                footer: {
                    style: "dark",
                    links: [
                        {
                            title: "Docs",
                            items: [
                                {
                                    label: "Tutorial",
                                    to: "/docs/intro",
                                },
                            ],
                        },
                        {
                            title: "Community",
                            items: [
                                {
                                    label: "Stack Overflow",
                                    href: "https://stackoverflow.com/questions/tagged/docusaurus",
                                },
                                {
                                    label: "Discord",
                                    href: "https://discordapp.com/invite/docusaurus",
                                },
                                {
                                    label: "Twitter",
                                    href: "https://twitter.com/docusaurus",
                                },
                            ],
                        },
                        {
                            title: "More",
                            items: [
                                {
                                    label: "Blog",
                                    to: "/blog",
                                },
                                {
                                    label: "GitHub",
                                    href: "https://github.com/facebook/docusaurus",
                                },
                            ],
                        },
                    ],
                    copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
                },
                prism: {
                    theme: lightCodeTheme,
                    darkTheme: darkCodeTheme,
                },
            }),
        stylesheets: [
            {
                href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
                type: "text/css",
                integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
                crossorigin: "anonymous",
            },
        ],
    }
);