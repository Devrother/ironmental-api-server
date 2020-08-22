import * as E from 'fp-ts/lib/Either';
import { good } from './mocks';

describe('[TEST] ArticleText', () => {
  test('decode', () => {
    expect(E.isRight(good.articleTitle)).toEqual(true);
  });
});
