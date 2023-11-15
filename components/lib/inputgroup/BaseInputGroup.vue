<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import InputGroupStyle from '@fcbtech/primevue/inputgroup/style';

export default {
    name: 'BaseInputGroup',
    extends: BaseComponent,
    style: InputGroupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
