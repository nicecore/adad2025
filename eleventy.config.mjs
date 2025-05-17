
function blogDate(input) {
  return `${new Date(input).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
}


export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addFilter('blogDate', blogDate)
  }


