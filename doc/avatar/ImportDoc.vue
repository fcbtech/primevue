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
import Avatar from '@fcbtech/primevue/avatar';
import AvatarGroup from '@fcbtech/primevue/avatargroup';   //Optional for grouping
`
            }
        };
    }
};
</script>
