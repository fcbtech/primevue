import BaseStyle from '@fcbtech/primevue/base/style';
import { useStyle } from '@fcbtech/primevue/usestyle';

export default BaseStyle.extend({
    name: 'common',
    loadGlobalStyle: (globalCSS, options = {}) => useStyle(globalCSS, { name: 'global', ...options })
});
