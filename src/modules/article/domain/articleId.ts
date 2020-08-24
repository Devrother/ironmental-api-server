import * as t from 'io-ts';
import { Either } from 'fp-ts/lib/Either';

interface UUIDBrand {
  readonly UUID: unique symbol;
}

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

type UUID = t.Branded<string, UUIDBrand>;
const isValidUUID = (id: string): id is UUID => uuidRegex.test(id);

export const ArticleIdC = t.brand(t.string, isValidUUID, 'UUID');
export type ArticleId = t.TypeOf<typeof ArticleIdC>;
export const makeArticleId = (id: string): Either<t.Errors, ArticleId> =>
  ArticleIdC.decode(id);
