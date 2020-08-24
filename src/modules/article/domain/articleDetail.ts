import * as t from 'io-ts';
import { ArticleInfoC } from './articleInfo';
import { ArticleIdC } from './articleId';
import { ArticleLikedUserIdC } from './articleLikedUserId';

export const ArticleDetailCommentInfoC = t.type({
  articleId: ArticleIdC,
  count: t.number
});

export const ArticleDetailLikeInfoC = t.type({
  articleId: ArticleIdC,
  count: t.number,
  likedUsers: t.array(ArticleLikedUserIdC)
});

export const ArticleDetailC = t.type({
  article: ArticleInfoC,
  comment: ArticleDetailCommentInfoC,
  like: ArticleDetailLikeInfoC
});

export type ArticleDetail = t.TypeOf<typeof ArticleDetailC>;
export type ArticleDetailLikeInfo = t.TypeOf<typeof ArticleDetailLikeInfoC>;
export type ArticleDetailCommentInfo = t.TypeOf<
  typeof ArticleDetailCommentInfoC
>;

export const makeArticleDetail = (article: object) =>
  ArticleDetailC.decode(article);
export const makeArticleDetailLikeInfo = (like: object) =>
  ArticleDetailLikeInfoC.decode(like);
export const makeArticleDetailCommentInfo = (comment: object) =>
  ArticleDetailCommentInfoC.decode(comment);
