import { config } from '@vue/test-utils';
import { defaultOptions } from '@fcbtech/primevue/config';

config.global.mocks['$primevue'] = {
    config: defaultOptions
};

describe('PrimeVue.vue', () => {
    it('should exist', async () => {});
});
