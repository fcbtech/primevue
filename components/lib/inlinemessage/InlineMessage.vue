<template>
    <div role="alert" aria-live="assertive" aria-atomic="true" :class="cx('root')" v-bind="ptmi('root')">
        <slot name="icon">
            <component :is="icon ? 'span' : iconComponent" :class="cx('icon')" v-bind="ptm('icon')"></component>
        </slot>
        <span :class="cx('text')" v-bind="ptm('text')">
            <slot>&nbsp;</slot>
        </span>
    </div>
</template>

<script>
import CheckIcon from '@fcbtech/primevue/icons/check';
import ExclamationTriangleIcon from '@fcbtech/primevue/icons/exclamationtriangle';
import InfoCircleIcon from '@fcbtech/primevue/icons/infocircle';
import TimesCircleIcon from '@fcbtech/primevue/icons/timescircle';
import BaseInlineMessage from './BaseInlineMessage.vue';

export default {
    name: 'InlineMessage',
    extends: BaseInlineMessage,
    inheritAttrs: false,
    timeout: null,
    data() {
        return {
            visible: true
        };
    },
    mounted() {
        if (!this.sticky) {
            setTimeout(() => {
                this.visible = false;
            }, this.life);
        }
    },
    computed: {
        iconComponent() {
            return {
                info: InfoCircleIcon,
                success: CheckIcon,
                warn: ExclamationTriangleIcon,
                error: TimesCircleIcon
            }[this.severity];
        }
    }
};
</script>
