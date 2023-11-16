<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import DynamicDialogStyle from '@fcbtech/primevue/dynamicdialog/style';

export default {
    name: 'BaseDynamicDialog',
    extends: BaseComponent,
    props: {},
    style: DynamicDialogStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
