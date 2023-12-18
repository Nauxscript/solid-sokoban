import { describe, expect, test } from 'vitest';
import { level1 } from '~/maps';
import { renderMap } from '../index';

describe('render test',() => {
  test('render map', () => {
    const renderedData = renderMap(level1, (dot: string) => dot)
    expect(renderedData).toMatchSnapshot()
  })
})