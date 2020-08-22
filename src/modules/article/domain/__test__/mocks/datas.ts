import {
  makeArticleTitle,
  makeArticleTag,
  makeArticleLikedUserId,
  makeArticleText,
  makeArticleLink,
  makeArticleId,
  makeArticleInfo,
  makeArticleDetailCommentInfo,
  makeArticleDetailLikeInfo,
  makeArticleDetail
} from '../../index';

const uuid = 'c6668ef8-b33d-4947-a9ea-a8918f7aea47';
const uuid2 = 'a6668ef8-b33d-4947-a9ea-a8918f7aea47';
const articleTag = 'typescript';
const articleTags = ['typescript', 'html', 'javascript'];
const articleTitle = 'test article title';
const articleText = 'test article text';
const articleLink = 'https://google.com';
const articleInfo = {
  id: uuid,
  title: articleTitle,
  text: articleText,
  link: articleLink,
  tags: articleTags
};
const articleDetailCommentInfo = { articleId: uuid, count: 300 };
const articleDetailLikeInfo = {
  articleId: uuid,
  count: 2,
  likedUsers: [uuid, uuid2]
};
const articleDetail = {
  article: articleInfo,
  comment: articleDetailCommentInfo,
  like: articleDetailLikeInfo
};

const badUuid = 'not a uuid';
const badUuid2 = '1';
const badArticleTag = 'more than 20 characters';
const badArticleLink = 'no valid link';
const badArticleInfo = {
  id: badUuid2,
  title: articleTitle,
  text: articleText,
  link: badArticleLink,
  tags: articleTags
};

export const good = {
  articleLikedUserId: makeArticleLikedUserId(uuid),
  articleTag: makeArticleTag(articleTag),
  articleTitle: makeArticleTitle(articleTitle),
  articleText: makeArticleText(articleText),
  articleLink: makeArticleLink(articleLink),
  articleId: makeArticleId(uuid),
  articleInfo: makeArticleInfo(articleInfo),
  articleDetailCommentInfo: makeArticleDetailCommentInfo(
    articleDetailCommentInfo
  ),
  articleDetailLikeInfo: makeArticleDetailLikeInfo(articleDetailLikeInfo),
  articleDetail: makeArticleDetail(articleDetail)
};

export const bad = {
  articleLikedUserId: makeArticleLikedUserId(badUuid),
  articleTag: makeArticleTag(badArticleTag),
  articleId: makeArticleId(badUuid),
  articleInfo: makeArticleInfo(badArticleInfo)
};
