<script>
import AccordionTabStyle from '@fcbtech/primevue/accordiontab/style';
import BaseComponent from '@fcbtech/primevue/basecomponent';

export default {
    name: 'BaseAccordionTab',
    extends: BaseComponent,
    props: {
        header: null,
        headerStyle: null,
        headerClass: null,
        headerProps: null,
        headerActionProps: null,
        contentStyle: null,
        contentClass: null,
        contentProps: null,
        disabled: Boolean
    },
    style: AccordionTabStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
