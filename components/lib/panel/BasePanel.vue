<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import PanelStyle from '@fcbtech/primevue/panel/style';

export default {
    name: 'BasePanel',
    extends: BaseComponent,
    props: {
        header: String,
        toggleable: Boolean,
        collapsed: Boolean,
        toggleButtonProps: {
            type: null,
            default: null
        }
    },
    style: PanelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
