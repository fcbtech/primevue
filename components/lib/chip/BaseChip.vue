<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import ChipStyle from '@fcbtech/primevue/chip/style';

export default {
    name: 'BaseChip',
    extends: BaseComponent,
    props: {
        label: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        removable: {
            type: Boolean,
            default: false
        },
        removeIcon: {
            type: String,
            default: undefined
        }
    },
    style: ChipStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
