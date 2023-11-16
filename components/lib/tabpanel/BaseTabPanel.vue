<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import TabPanelStyle from '@fcbtech/primevue/tabpanel/style';

export default {
    name: 'BaseTabPanel',
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
    style: TabPanelStyle
};
</script>
