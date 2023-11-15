<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import TagStyle from '@fcbtech/primevue/tag/style';

export default {
    name: 'BaseTag',
    extends: BaseComponent,
    props: {
        value: null,
        severity: null,
        rounded: Boolean,
        icon: String
    },
    style: TagStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
