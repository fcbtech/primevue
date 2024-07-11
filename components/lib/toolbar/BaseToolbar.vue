<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import ToolbarStyle from '@fcbtech/primevue/toolbar/style';

export default {
    name: 'BaseToolbar',
    extends: BaseComponent,
    props: {
        ariaLabelledby: {
            type: String,
            default: null
        }
    },
    style: ToolbarStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
