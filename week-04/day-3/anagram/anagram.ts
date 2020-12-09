'use strict';

export function isAnagram(text1: string, text2: string): boolean {
  return text1 != text2 && text1.replace(/ /g, '').split('').sort().toString() === text2.replace(/ /g, '').split('').sort().toString();
}
