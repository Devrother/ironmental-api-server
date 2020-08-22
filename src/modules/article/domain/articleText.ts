import * as t from 'io-ts';
import { Either } from 'fp-ts/lib/Either';

interface ArticleTextBrand {
  readonly ArticleText: unique symbol;
}

const isValidArticleText = (
  s: string
): s is t.Branded<string, ArticleTextBrand> => s.length <= 3000;

export const ArticleTextC = t.brand(
  t.string,
  isValidArticleText,
  'ArticleText'
);
export type ArticleText = t.TypeOf<typeof ArticleTextC>;
export const makeArticleText = (text: string): Either<t.Errors, ArticleText> =>
  ArticleTextC.decode(text);
