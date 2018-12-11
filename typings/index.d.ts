// Type definitions for replace-outside-strings
// Project: https://github.com/protoEvangelion/utilities/tree/master/packages/replace-outside-strings
// Definitions by: Ryan Garant <rhino.codes>

export { replace } from '../src/api'

export interface IArgs {
  file?: string
  directory?: string
  s1: string
  s2: string
  r1: string
  r2: string
}
