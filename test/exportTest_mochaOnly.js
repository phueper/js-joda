/**
 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */
import { expect } from 'chai';

import * as joda from '../src/js-joda';

describe('js-joda exports', () => {
    describe('errors', () => {
        it('should export DateTimeException', () => {
            expect(joda.DateTimeException).to.exist;
        });

        it('should export NullPointerException', () => {
            expect(joda.NullPointerException).to.exist;
        });
    });

    it('should export Clock', () => {
        expect(joda.Clock).to.exist;
    });
});
