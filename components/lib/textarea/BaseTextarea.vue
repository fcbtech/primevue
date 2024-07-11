<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import TextareaStyle from '@fcbtech/primevue/textarea/style';

export default {
    name: 'BaseTextarea',
    extends: BaseComponent,
    props: {
        modelValue: null,
        autoResize: Boolean,
        invalid: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: null
        }
    },
    style: TextareaStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
