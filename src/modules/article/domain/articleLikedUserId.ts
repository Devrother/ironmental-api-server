import * as t from 'io-ts';
import { Either } from 'fp-ts/lib/Either';

interface UUIDBrand {
  readonly UUID: unique symbol;
}

const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

type UUID = t.Branded<string, UUIDBrand>;
const isValidUUID = (id: string): id is UUID => regex.test(id);

export const ArticleLikedUserIdC = t.brand(t.string, isValidUUID, 'UUID');
export type ArticleLikedUserId = t.TypeOf<typeof ArticleLikedUserIdC>;
export const makeArticleLikedUserId = (
  id: string
): Either<t.Errors, ArticleLikedUserId> => ArticleLikedUserIdC.decode(id);
