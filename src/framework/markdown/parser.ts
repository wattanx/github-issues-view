import { unified } from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import html from 'rehype-stringify';
import highlight from 'remark-highlight.js';

export const toHtml = (input: string) => {
  return unified()
    .use(highlight)
    .use(markdown)
    .use(remark2rehype)
    .use(html)
    .processSync(input)
    .toString();
};
