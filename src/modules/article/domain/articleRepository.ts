import { URIS2, Kind2 } from 'fp-ts/lib/HKT';
import { ArticleId } from '.';
import { Monad2 } from 'fp-ts/lib/Monad';

interface ArticleQueryRepository<F extends URIS2, E, A> {
  readonly getArticleById: (id: ArticleId) => Kind2<F, E, A>;
  readonly getRecentArticles: (limit: number, offset: number) => Kind2<F, E, A>;
}

export type ArticleRepository<F extends URIS2, E, A> = ArticleQueryRepository<
  F,
  E,
  A
> &
  Monad2<F>;
