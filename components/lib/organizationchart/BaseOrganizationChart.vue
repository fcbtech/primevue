<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import OrganizationChartStyle from '@fcbtech/primevue/organizationchart/style';

export default {
    name: 'BaseOrganizationChart',
    extends: BaseComponent,
    props: {
        value: {
            type: null,
            default: null
        },
        selectionKeys: {
            type: null,
            default: null
        },
        selectionMode: {
            type: String,
            default: null
        },
        collapsible: {
            type: Boolean,
            default: false
        },
        collapsedKeys: {
            type: null,
            default: null
        }
    },
    style: OrganizationChartStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
