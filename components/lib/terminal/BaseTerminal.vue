<script>
import BaseComponent from '@fcbtech/primevue/basecomponent';
import TerminalStyle from '@fcbtech/primevue/terminal/style';

export default {
    name: 'BaseTerminal',
    extends: BaseComponent,
    props: {
        welcomeMessage: {
            type: String,
            default: null
        },
        prompt: {
            type: String,
            default: null
        }
    },
    style: TerminalStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
