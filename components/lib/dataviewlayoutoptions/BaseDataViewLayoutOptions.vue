<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import DataViewLayoutOptionsStyle from '@fcbtech/primevue/dataviewlayoutoptions/style';

export default {
    name: 'BaseDataViewLayoutOptions',
    extends: BaseComponent,
    props: {
        modelValue: String
    },
    style: DataViewLayoutOptionsStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
