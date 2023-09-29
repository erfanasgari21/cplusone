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
        url: "https://github.com/",
        baseUrl: "/cplusone/",
        onBrokenLinks: "throw",
        onBrokenMarkdownLinks: "warn",
        favicon: "img/favicon.ico",
        organizationName: "erfanasgari21", // Usually your GitHub org/user name.
        projectName: "cplusone", // Usually your repo name.
        trailingSlash: false,
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
                    title: "سی بعلاوه یک",
                    logo: {
                        alt: "My Site Logo",
                        src: "img/logo.svg",
                    },
                    items: [
                        {
                            type: "doc",
                            docId: "intro",
                            position: "left",
                            label: "مجله",
                        },
                        //{ to: "/blog", label: "Blog", position: "left" },
                        {
                            href: "https://github.com/erfanasgari21/cplusone",
                            label: "GitHub",
                            position: "right",
                        },
                    ],
                },
                footer: {
                    style: "dark",
                    links: [
                        {
                            title: "مطالب",
                            items: [
                                {
                                    label: "مجله",
                                    to: "/docs/intro",
                                },
                            ],
                        },
                        {
                            title: "پیوندها",
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
                            title: "بیشتر",
                            items: [
                                // {
                                //     label: "Blog",
                                //     to: "/blog",
                                // },
                                {
                                    label: "GitHub",
                                    href: "https://github.com/erfanasgari21/cplusone",
                                },
                            ],
                        },
                    ],
                    copyright: `Copyright © ${new Date().getFullYear()} UT AP, Inc. Built with Docusaurus.`,
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
            "https://fonts.googleapis.com/css2?family=Vazirmatn&display=swap",
        ],
    }
);
