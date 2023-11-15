<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
// import as component
import Badge from '@fcbtech/primevue/badge';

// import as directive
import BadgeDirective from '@fcbtech/primevue/badgedirective';

app.directive('badge', BadgeDirective);
`
            }
        };
    }
};
</script>
