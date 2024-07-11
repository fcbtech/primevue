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
import TabView from '@fcbtech/primevue/tabview';
import TabPanel from '@fcbtech/primevue/tabpanel';
`
            }
        };
    }
};
</script>
