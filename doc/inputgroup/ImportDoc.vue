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
import InputGroup from '@fcbtech/primevue/inputgroup';
import InputGroupAddon from '@fcbtech/primevue/inputgroupaddon';
`
            }
        };
    }
};
</script>
