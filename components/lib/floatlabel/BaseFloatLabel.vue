<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import FloatLabelStyle from '@fcbtech/primevue/floatlabel/style';

export default {
    name: 'BaseFloatLabel',
    extends: BaseComponent,
    props: {},
    style: FloatLabelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
