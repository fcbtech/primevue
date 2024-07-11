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
import Stepper from '@fcbtech/primevue/stepper';
import StepperPanel from '@fcbtech/primevue/stepperpanel';
`
            }
        };
    }
};
</script>
