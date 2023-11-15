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
import TreeTable from '@fcbtech/primevue/treetable';
import Column from '@fcbtech/primevue/column';
`
            }
        };
    }
};
</script>
