<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import FieldsetStyle from '@fcbtech/primevue/fieldset/style';

export default {
    name: 'BaseFieldset',
    extends: BaseComponent,
    props: {
        legend: String,
        toggleable: Boolean,
        collapsed: Boolean,
        toggleButtonProps: {
            type: null,
            default: null
        }
    },
    style: FieldsetStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
