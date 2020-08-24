import * as t from 'io-ts';
import { ArticleTitleC } from './articleTitle';
import { ArticleTextC } from './articleText';
import { ArticleLinkC } from './articleLink';
import { ArticleTagC } from './articleTag';
import { ArticleIdC } from './articleId';

export const ArticleInfoC = t.type({
  id: ArticleIdC,
  title: ArticleTitleC,
  text: t.union([ArticleTextC, t.undefined]),
  // text: ArticleTextC, // TODO: option;
  link: ArticleLinkC,
  tags: t.array(ArticleTagC)
});

export type ArticleInfo = t.TypeOf<typeof ArticleTitleC>;
export const makeArticleInfo = (article: object) =>
  ArticleInfoC.decode(article);
