<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
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
