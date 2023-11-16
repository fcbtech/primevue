<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import ConfirmDialogStyle from '@fcbtech/primevue/confirmdialog/style';

export default {
    name: 'BaseConfirmDialog',
    extends: BaseComponent,
    props: {
        group: String,
        breakpoints: {
            type: Object,
            default: null
        },
        draggable: {
            type: Boolean,
            default: true
        }
    },
    style: ConfirmDialogStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
