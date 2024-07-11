<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import MenubarStyle from '@fcbtech/primevue/menubar/style';

export default {
    name: 'BaseMenubar',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        buttonProps: {
            type: null,
            default: null
        },
        breakpoint: {
            type: String,
            default: '960px'
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: MenubarStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
