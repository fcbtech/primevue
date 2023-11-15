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
import DataView from '@fcbtech/primevue/dataview';
import DataViewLayoutOptions from '@fcbtech/primevue/dataviewlayoutoptions'   // optional
`
            }
        };
    }
};
</script>
