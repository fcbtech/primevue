<template>
    <button v-ripple :class="cx('lastPageButton')" type="button" v-bind="getPTOptions('lastPageButton')" data-pc-group-section="pagebutton">
        <component :is="template || 'AngleDoubleRightIcon'" :class="cx('lastPageIcon')" v-bind="getPTOptions('lastPageIcon')" />
    </button>
</template>

<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import AngleDoubleRightIcon from '@fcbtech/primevue/icons/angledoubleright';
import Ripple from '@fcbtech/primevue/ripple';

export default {
    name: 'LastPageLink',
    hostName: 'Paginator',
    extends: BaseComponent,
    props: {
        template: {
            type: Function,
            default: null
        }
    },
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
                context: {
                    disabled: this.$attrs.disabled
                }
            });
        }
    },
    components: {
        AngleDoubleRightIcon: AngleDoubleRightIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
