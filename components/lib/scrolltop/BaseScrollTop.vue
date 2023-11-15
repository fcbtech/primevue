<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import ScrollTopStyle from '@fcbtech/primevue/scrolltop/style';

export default {
    name: 'BaseScrollTop',
    extends: BaseComponent,
    props: {
        target: {
            type: String,
            default: 'window'
        },
        threshold: {
            type: Number,
            default: 400
        },
        icon: {
            type: String,
            default: undefined
        },
        behavior: {
            type: String,
            default: 'smooth'
        }
    },
    style: ScrollTopStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
