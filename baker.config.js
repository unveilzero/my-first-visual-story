const entrypoints = [
  // Add more script entrypoints here as needed
  'app',
];

export default {
  output: 'docs',
  domain: 'https://unveilzero.github.io',
  // domain: 'http://baker-example-page-template-production.s3-website-us-east-1.amazonaws.com/',
  entrypoints: `scripts/${
    entrypoints.length > 1 ? `{${entrypoints.join(',')}}` : entrypoints[0]
  }.js`,
  pathPrefix: '/my-first-visual-story/',
  // An example of how creating dynamic pages, as described in the README
  // createPages(createPage, data) {
  //   const pageList = data.example;
  //   for (const d of pageList) {
  //     const template = 'year-detail.html';
  //     const url = `${d.year}`;
  //     const context = { obj: d };
  //     createPage(template, url, context);
  //   }
  // },
};
