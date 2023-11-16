<script>
import AvatarGroupStyle from '@fcbtech/primevue/avatargroup/style';
import BaseComponent from '@fcbtech/primevue/basecomponent';

export default {
    name: 'BaseAvatarGroup',
    extends: BaseComponent,
    style: AvatarGroupStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
