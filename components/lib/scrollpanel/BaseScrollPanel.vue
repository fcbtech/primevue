<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import ScrollPanelStyle from '@fcbtech/primevue/scrollpanel/style';

export default {
    name: 'BaseScrollPanel',
    extends: BaseComponent,
    props: {
        step: {
            type: Number,
            default: 5
        }
    },
    style: ScrollPanelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
