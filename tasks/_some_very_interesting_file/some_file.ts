/**
 * The original task for Michail:
 * 
 * Specification and a long-story-short history
 * 
 *    When executed , the code below will log true,false,false
 * if we concatetenate all decimal numebrs on line 5 15 25 and 31 
 * we get the string 11010816321 which has the length of 11
 * there are bug on line 5 15 25 and 31. By changing decimal numbers 
 * on those line you can fix the code and make it log true, true, true 
 * the resulting dstrigng should have the lenght of 12.
 *
 * The internal code of the task:
 * ======================================================================

    import BigNumber from 'bignumber.js'; // See https://github.com/MikeMcl/bignumber.js

    const denominationsMultiplier = {
      WEI: new BigNumber(1, 10).times(10).exponentiatedBy(18),
      GWEI: new BigNumber(1, 10).times(10).exponentiatedBy(8),
      ETH: new BigNumber(1, 10).times(10).exponentiatedBy(1),
    }

    function getFiatValueToRender({
      value,
      conversionRate = 1,
      fromDenomination,
      fromCurrency,
    }) {
      let number = new BigNumber(value, 16);
      if (fromCurrency !== 'ETH') {
        number = number.multipliedBy(conversionRate);
      }
      if (fromDenomination !== 'WEI') {
        number = number.multipliedBy(
          denominationsMultiplier.WEI
            .dividedBy(denominationsMultiplier[fromDenomination])
        )
      }
      return number.toString(32);
    }

    function getResult(value) {
      return getFiatValueToRender({
        value,
        conversionRate: 1,
        fromDenomination: 'GWEI',
        fromCurrency: 'ABC',
      })
    }

    let x = 0

    console.log(getResult(0) === '0')
    console.log(getResult(1) === '59682f00')
    console.log(getResult(10600.47) === 'e762bdf8a40')
    
 * ======================================================================
  
  * Make those changes to the code above and send the string containing 
  * the concatenated decimal numbers of the line 5, 15, 25, 31.
  * 
 */

import BigNumber from 'bignumber.js';

export const denominationsMultiplier = {
  WEI: new BigNumber(1, 10).times(10).exponentiatedBy(18),
  GWEI: new BigNumber(1, 10).times(10).exponentiatedBy(9), // this is the line with bug  
  ETH: new BigNumber(1, 10).times(10).exponentiatedBy(18),
};

export function getFiatValueToRender({
  value,
  conversionRate = 1,
  fromDenomination,
  fromCurrency,
}: FiatValueOptions): string {
  let number = new BigNumber(value, 10); // this is the line with bug
  if (fromCurrency !== 'ETH') {
    number = number.multipliedBy(conversionRate);
  }
  if (fromDenomination !== 'WEI') {
    number = number.multipliedBy(
      denominationsMultiplier.WEI
        .dividedBy(denominationsMultiplier[fromDenomination])
    );
  }
  return number.toString(16); // this is the line with bug
}

export function getResult(value: string | number): string {
  return getFiatValueToRender({
    value,
    conversionRate: 1.5, // this is the line with bug
    fromDenomination: 'GWEI',
    fromCurrency: 'ABC',
  });
}

interface FiatValueOptions {
  value: string | number; // BigNumber accepts both string and number
  conversionRate?: number;
  fromDenomination: Denomination;
  fromCurrency: Currency;
}

type Denomination = 'WEI' | 'GWEI' | 'ETH';
type Currency = 'ETH' | 'ABC'; // Extend this as needed


// old: 110108 16 32 1
// new: 110109 10 16 15 