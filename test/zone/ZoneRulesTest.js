/*
 * @copyright (c) 2016, Philipp Thürwächter, Pattrick Hüper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */


import { expect } from 'chai';

import '../_init';

import { assertEquals } from '../testUtils';

import { ZoneOffset } from '../../src/ZoneOffset';
import { ZoneRules } from '../../src/zone/ZoneRules';

describe('zone/ZoneRules', () => {
    describe('abstract methods', () => {
        it('should fail for isFixedOffset', () => {
            expect(() => {
                new ZoneRules().isFixedOffset();
            }).to.throw(TypeError);
        });

        it('should fail for offsetOfInstant', () => {
            expect(() => {
                new ZoneRules().offsetOfInstant();
            }).to.throw(TypeError);
        });

        it('should fail for offsetOfEpochMilli', () => {
            expect(() => {
                new ZoneRules().offsetOfEpochMilli();
            }).to.throw(TypeError);
        });

        it('should fail for offsetOfLocalDateTime', () => {
            expect(() => {
                new ZoneRules().offsetOfLocalDateTime();
            }).to.throw(TypeError);
        });

        it('should fail for validOffsets', () => {
            expect(() => {
                new ZoneRules().validOffsets();
            }).to.throw(TypeError);
        });

        it('should fail for transition', () => {
            expect(() => {
                new ZoneRules().transition();
            }).to.throw(TypeError);
        });

        it('should fail for standardOffset', () => {
            expect(() => {
                new ZoneRules().standardOffset();
            }).to.throw(TypeError);
        });

        it('should fail for daylightSavings', () => {
            expect(() => {
                new ZoneRules().daylightSavings();
            }).to.throw(TypeError);
        });

        it('should fail for isDaylightSavings', () => {
            expect(() => {
                new ZoneRules().isDaylightSavings();
            }).to.throw(TypeError);
        });

        it('should fail for isValidOffset', () => {
            expect(() => {
                new ZoneRules().isValidOffset();
            }).to.throw(TypeError);
        });

        it('should fail for nextTransition', () => {
            expect(() => {
                new ZoneRules().nextTransition();
            }).to.throw(TypeError);
        });

        it('should fail for previousTransition', () => {
            expect(() => {
                new ZoneRules().previousTransition();
            }).to.throw(TypeError);
        });

        it('should fail for transitions', () => {
            expect(() => {
                new ZoneRules().transitions();
            }).to.throw(TypeError);
        });

        it('should fail for transitionRules', () => {
            expect(() => {
                new ZoneRules().transitionRules();
            }).to.throw(TypeError);
        });
    });

    describe('Fixed ZoneRules', () => {
        it('should return same offset rules for any epoch milli', () => {
            const fixedOffset = ZoneOffset.ofHours(2);
            const offsetOfMilli = fixedOffset.rules().offsetOfEpochMilli(0);

            assertEquals(offsetOfMilli, fixedOffset);
            assertEquals(offsetOfMilli.rules(), fixedOffset.rules());
        });

        it('should equal for same rules', () => {
            const fixedOffset = ZoneOffset.ofHours(2);
            const offsetOfMilli = fixedOffset.rules().offsetOfEpochMilli(0);

            expect(offsetOfMilli.rules().equals(ZoneOffset.ofHours(2).rules())).to.be.true;
            expect(offsetOfMilli.rules().equals(ZoneOffset.ofHours(3).rules())).to.be.false;
            expect(offsetOfMilli.rules().equals({})).to.be.false;
        });
    });
});
