<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import DividerStyle from '@fcbtech/primevue/divider/style';

export default {
    name: 'BaseDivider',
    extends: BaseComponent,
    props: {
        align: {
            type: String,
            default: null
        },
        layout: {
            type: String,
            default: 'horizontal'
        },
        type: {
            type: String,
            default: 'solid'
        }
    },
    style: DividerStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
