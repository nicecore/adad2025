import { HtmlBasePlugin } from "@11ty/eleventy";

function blogDate(input) {
  return `${new Date(input).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
}

export default async function (eleventyConfig) {
    const isGitHubPages = process.env.GITHUB_PAGES === 'true';
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addFilter('blogDate', blogDate);
    eleventyConfig.addPlugin(HtmlBasePlugin, {
      baseHref: isGitHubPages ? "/adad2025/" : "/"
    });

  }


