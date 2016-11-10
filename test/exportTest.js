/**
 * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */
import { expect } from 'chai';

import * as joda from '../src/js-joda';

describe('js-joda exports', () => {
    
    describe('assert', function () {
    
        it('should export assert', function () {
            expect(joda.assert).to.exist;
        });

        it('should export assert.requireInstance', function () {
            expect(joda.assert.requireInstance).to.exist;
        });

    });

    describe('errors', function () {
    
        it('should export DateTimeException', function () {
            expect(joda.DateTimeException).to.exist;
        });

        it('should export NullPointerException', function () {
            expect(joda.NullPointerException).to.exist;
        });

    });

    it('should export Clock', function () {
        expect(joda.Clock).to.exist;
    });

});