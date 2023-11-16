<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import BreadcrumbStyle from '@fcbtech/primevue/breadcrumb/style';

export default {
    name: 'BaseBreadcrumb',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        home: {
            type: null,
            default: null
        }
    },
    style: BreadcrumbStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
