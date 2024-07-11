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
import DataTable from '@fcbtech/primevue/datatable';
import Column from '@fcbtech/primevue/column';
import ColumnGroup from '@fcbtech/primevue/columngroup';   // optional
import Row from '@fcbtech/primevue/row';                   // optional
`
            }
        };
    }
};
</script>
