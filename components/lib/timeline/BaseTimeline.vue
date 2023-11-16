<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import TimelineStyle from '@fcbtech/primevue/timeline/style';

export default {
    name: 'BaseTimeline',
    extends: BaseComponent,
    props: {
        value: null,
        align: {
            mode: String,
            default: 'left'
        },
        layout: {
            mode: String,
            default: 'vertical'
        },
        dataKey: null
    },
    style: TimelineStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
