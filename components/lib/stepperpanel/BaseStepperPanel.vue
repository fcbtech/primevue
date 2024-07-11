<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import StepperPanelStyle from '@fcbtech/primevue/stepperpanel/style';

export default {
    name: 'BaseStepperPanel',
    extends: BaseComponent,
    props: {
        header: null
    },
    style: StepperPanelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
