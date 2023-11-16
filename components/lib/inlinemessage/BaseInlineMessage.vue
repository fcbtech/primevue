<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import InlineMessageStyle from '@fcbtech/primevue/inlinemessage/style';

export default {
    name: 'BaseInlineMessage',
    extends: BaseComponent,
    props: {
        severity: {
            type: String,
            default: 'error'
        },
        icon: {
            type: String,
            default: undefined
        }
    },
    style: InlineMessageStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
