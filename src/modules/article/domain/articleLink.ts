import * as t from 'io-ts';
import { Either } from 'fp-ts/lib/Either';

interface ArticleLinkBrand {
  readonly ArticleLink: unique symbol;
}

const urlRegex = /^(?:(?:https?):\/\/)?(?:localhost|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))))(?::\d{2,5})?(?:\/\S*)?$/i;

const isValidArticleLink = (
  link: string
): link is t.Branded<string, ArticleLinkBrand> => urlRegex.test(link);

export const ArticleLinkC = t.brand(
  t.string,
  isValidArticleLink,
  'ArticleLink'
);
export type ArticleLink = t.TypeOf<typeof ArticleLinkC>;
export const makeArticleLink = (link: string): Either<t.Errors, ArticleLink> =>
  ArticleLinkC.decode(link);
