<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import TextareaStyle from '@fcbtech/primevue/textarea/style';

export default {
    name: 'BaseTextarea',
    extends: BaseComponent,
    props: {
        modelValue: null,
        autoResize: Boolean
    },
    style: TextareaStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
