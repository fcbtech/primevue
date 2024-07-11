<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import IconFieldStyle from '@fcbtech/primevue/iconfield/style';

export default {
    name: 'BaseIconField',
    extends: BaseComponent,
    props: {
        iconPosition: {
            type: String,
            default: 'right'
        }
    },
    style: IconFieldStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
