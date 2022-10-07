import mocks from '../mocks/mocks.json';
import { getComputedCurrentSituation } from './computedCurrentSituation';

describe('getComputedCurrentSituation', () => {
  it('should be inProgress', () => {
    const status = getComputedCurrentSituation(mocks);

    expect(status).toBe(3);
  });
});
