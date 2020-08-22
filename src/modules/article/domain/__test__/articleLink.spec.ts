import * as E from 'fp-ts/lib/Either';
import { good } from './mocks';

describe('[TEST] ArticleLink', () => {
  test('decode', () => {
    expect(E.isRight(good.articleLink)).toEqual(true);
  });
});
