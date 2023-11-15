<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import ProgressSpinnerStyle from '@fcbtech/primevue/progressspinner/style';

export default {
    name: 'BaseProgressSpinner',
    extends: BaseComponent,
    props: {
        strokeWidth: {
            type: String,
            default: '2'
        },
        fill: {
            type: String,
            default: 'none'
        },
        animationDuration: {
            type: String,
            default: '2s'
        }
    },
    style: ProgressSpinnerStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
