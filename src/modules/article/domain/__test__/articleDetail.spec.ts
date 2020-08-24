import { good } from './mocks';
import * as E from 'fp-ts/lib/Either';

describe('[TEST] ArticleDetail', () => {
  test('decode', () => {
    expect(E.isRight(good.articleDetail)).toEqual(true);
  });
});

describe('[TEST] ArticleDetailCommentInfo', () => {
  test('decode', () => {
    expect(E.isRight(good.articleDetailCommentInfo)).toEqual(true);
  });
});

describe('[TEST] ArticleDetailLikeInfo', () => {
  test('decode', () => {
    expect(E.isRight(good.articleDetailLikeInfo)).toEqual(true);
  });
});
