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
import Terminal from '@fcbtech/primevue/terminal';
import TerminalService from '@fcbtech/primevue/terminalservice'
`
            }
        };
    }
};
</script>
