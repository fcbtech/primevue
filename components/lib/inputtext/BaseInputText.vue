<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import InputTextStyle from '@fcbtech/primevue/inputtext/style';

export default {
    name: 'BaseInputText',
    extends: BaseComponent,
    props: {
        modelValue: null,
        size: {
            type: String,
            default: null
        }
    },
    style: InputTextStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
