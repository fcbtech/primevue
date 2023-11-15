import BaseStyle from '@fcbtech/primevue/base/style';

const css = `
@layer primevue {
    .p-tabview-nav-container {
        position: relative;
    }

    .p-tabview-scrollable .p-tabview-nav-container {
        overflow: hidden;
    }

    .p-tabview-nav-content {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tabview-nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex: 1 1 auto;
    }

    .p-tabview-header-action {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        overflow: hidden;
    }

    .p-tabview-ink-bar {
        display: none;
        z-index: 1;
    }

    .p-tabview-header-action:focus {
        z-index: 1;
    }

    .p-tabview-title {
        line-height: 1;
        white-space: nowrap;
    }

    .p-tabview-nav-btn {
        position: absolute;
        top: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-tabview-nav-prev {
        left: 0;
    }

    .p-tabview-nav-next {
        right: 0;
    }

    .p-tabview-nav-content::-webkit-scrollbar {
        display: none;
    }
}
`;

const classes = {
    root: ({ props }) => [
        'p-tabview p-component',
        {
            'p-tabview-scrollable': props.scrollable
        }
    ],
    navContainer: 'p-tabview-nav-container',
    previousButton: 'p-tabview-nav-prev p-tabview-nav-btn p-link',
    navContent: 'p-tabview-nav-content',
    nav: 'p-tabview-nav',
    tab: {
        header: ({ instance, tab, index }) => [
            'p-tabview-header',
            instance.getTabProp(tab, 'headerClass'),
            {
                'p-highlight': instance.d_activeIndex === index,
                'p-disabled': instance.getTabProp(tab, 'disabled')
            }
        ],
        headerAction: 'p-tabview-nav-link p-tabview-header-action',
        headerTitle: 'p-tabview-title',
        content: ({ instance, tab }) => ['p-tabview-panel', instance.getTabProp(tab, 'contentClass')]
    },
    inkbar: 'p-tabview-ink-bar',
    nextButton: 'p-tabview-nav-next p-tabview-nav-btn p-link',
    panelContainer: 'p-tabview-panels'
};

export default BaseStyle.extend({
    name: 'tabview',
    css,
    classes
});
