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
import AnimateOnScroll from '@fcbtech/primevue/animateonscroll';
                
app.directive('animateonscroll', AnimateOnScroll);
`
            }
        };
    }
};
</script>
