import * as t from 'io-ts';
import { Either } from 'fp-ts/lib/Either';

interface ArticleTagBrand {
  readonly ArticleTag: unique symbol;
}

const isValidArticleTag = (
  tag: string
): tag is t.Branded<string, ArticleTagBrand> => tag.length <= 20;

export const ArticleTagC = t.brand(t.string, isValidArticleTag, 'ArticleTag');
export type ArticleTag = t.TypeOf<typeof ArticleTagC>;
export const makeArticleTag = (tag: string): Either<t.Errors, ArticleTag> =>
  ArticleTagC.decode(tag);
