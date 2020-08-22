import * as E from 'fp-ts/lib/Either';
import { PathReporter } from 'io-ts/lib/PathReporter';
import { good, bad } from './mocks';

describe('[TEST] ArticleTag', () => {
  test('decode', () => {
    expect(E.isRight(good.articleTag)).toEqual(true);
    expect(E.isLeft(bad.articleTag)).toEqual(true);
    expect(PathReporter.report(bad.articleTag)).toEqual([
      'Invalid value "more than 20 characters" supplied to : ArticleTag'
    ]);
  });
});
