<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import ButtonGroupStyle from '@fcbtech/primevue/buttongroup/style';

export default {
    name: 'BaseButtonGroup',
    extends: BaseComponent,
    style: ButtonGroupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
