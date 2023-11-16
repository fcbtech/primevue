<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import InputGroupAddonStyle from '@fcbtech/primevue/inputgroupaddon/style';

export default {
    name: 'BaseInputGroupAddon',
    extends: BaseComponent,
    style: InputGroupAddonStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
