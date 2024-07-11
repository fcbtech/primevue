<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import InputIconStyle from '@fcbtech/primevue/inputicon/style';

export default {
    name: 'BaseInputIcon',
    extends: BaseComponent,
    style: InputIconStyle,
    props: {
        class: null
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
