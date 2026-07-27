import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "CPAP Complaint Coder",
    pageTitleSuffix: " · Evidence to risk",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "mvattulainen.github.io/medcodingtorisk",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "IBM Plex Sans",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f6f8fb",
          lightgray: "#d9e1ec",
          gray: "#738195",
          darkgray: "#334155",
          dark: "#10243e",
          secondary: "#007a78",
          tertiary: "#b45118",
          highlight: "rgba(0, 122, 120, 0.12)",
          textHighlight: "#fde68a88",
        },
        darkMode: {
          light: "#0d1726",
          lightgray: "#26364b",
          gray: "#8492a6",
          darkgray: "#d6dfeb",
          dark: "#f3f7fb",
          secondary: "#54d3cb",
          tertiary: "#f0a06b",
          highlight: "rgba(84, 211, 203, 0.13)",
          textHighlight: "#a1620788",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Custom OG images are disabled to keep CI builds fast and deterministic.
    ],
  },
}

export default config
