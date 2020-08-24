import * as E from 'fp-ts/lib/Either';
import { PathReporter } from 'io-ts/lib/PathReporter';
import { good, bad } from './mocks';

describe('[TEST] ArticleId', () => {
  test('decode', () => {
    expect(E.isRight(good.articleId)).toEqual(true);
    expect(E.isLeft(bad.articleId)).toEqual(true);
    expect(PathReporter.report(bad.articleId)).toEqual([
      'Invalid value "not a uuid" supplied to : UUID'
    ]);
  });
});
