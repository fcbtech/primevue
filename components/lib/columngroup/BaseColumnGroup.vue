<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import ColumnGroupStyle from '@fcbtech/primevue/columngroup/style';

export default {
    name: 'BaseColumnGroup',
    extends: BaseComponent,
    props: {
        type: {
            type: String,
            default: null
        }
    },
    style: ColumnGroupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
