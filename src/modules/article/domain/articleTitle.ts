import * as t from 'io-ts';
import { Either } from 'fp-ts/lib/Either';

interface ArticleTitleBrand {
  readonly ArticleTitle: unique symbol;
}

const isValidArticleTitle = (
  title: string
): title is t.Branded<string, ArticleTitleBrand> => title.length <= 200;

export const ArticleTitleC = t.brand(
  t.string,
  isValidArticleTitle,
  'ArticleTitle'
);
export type ArticleTitle = t.TypeOf<typeof ArticleTitleC>;
export const makeArticleTitle = (
  title: string
): Either<t.Errors, ArticleTitle> => ArticleTitleC.decode(title);
