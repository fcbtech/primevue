<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Splitter from '@fcbtech/primevue/splitter';
import SplitterPanel from '@fcbtech/primevue/splitterpanel';
`
            }
        };
    }
};
</script>
