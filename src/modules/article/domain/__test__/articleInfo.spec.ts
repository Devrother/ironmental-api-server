import * as E from 'fp-ts/lib/Either';
import { good, bad } from './mocks';

describe('[TEST] ArticleInfo', () => {
  test('decode', () => {
    expect(E.isRight(good.articleInfo)).toEqual(true);
    expect(E.isLeft(bad.articleInfo)).toEqual(true);
  });
});
