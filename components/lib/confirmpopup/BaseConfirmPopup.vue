<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import ConfirmPopupStyle from '@fcbtech/primevue/confirmpopup/style';

export default {
    name: 'BaseConfirmPopup',
    extends: BaseComponent,
    props: {
        group: String
    },
    style: ConfirmPopupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
