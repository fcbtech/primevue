<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import MegaMenuStyle from '@fcbtech/primevue/megamenu/style';

export default {
    name: 'BaseMegaMenu',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        orientation: {
            type: String,
            default: 'horizontal'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        },
        'aria-labelledby': {
            type: String,
            default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    style: MegaMenuStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
