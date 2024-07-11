import { babel } from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

import fs from 'fs-extra';
import path from 'path';

import pkg from './package.json';

let entries = [];

let core = {};

const CORE_ICON_DEPENDENCIES = {
    '@fcbtech/primevue/baseicon': 'primevue.baseicon',
    '@fcbtech/primevue/icons/angledoubledown': 'primevue.icons.angledoubledown',
    '@fcbtech/primevue/icons/angledoubleleft': 'primevue.icons.angledoubleleft',
    '@fcbtech/primevue/icons/angledoubleright': 'primevue.icons.angledoubleright',
    '@fcbtech/primevue/icons/angledoubleup': 'primevue.icons.angledoubleup',
    '@fcbtech/primevue/icons/angledown': 'primevue.icons.angledown',
    '@fcbtech/primevue/icons/angleleft': 'primevue.icons.angleleft',
    '@fcbtech/primevue/icons/angleright': 'primevue.icons.angleright',
    '@fcbtech/primevue/icons/angleup': 'primevue.icons.angleup',
    '@fcbtech/primevue/icons/arrowdown': 'primevue.icons.arrowdown',
    '@fcbtech/primevue/icons/arrowup': 'primevue.icons.arrowup',
    '@fcbtech/primevue/icons/ban': 'primevue.icons.ban',
    '@fcbtech/primevue/icons/bars': 'primevue.icons.bars',
    '@fcbtech/primevue/icons/blank': 'primevue.icons.blank',
    '@fcbtech/primevue/icons/calendar': 'primevue.icons.calendar',
    '@fcbtech/primevue/icons/check': 'primevue.icons.check',
    '@fcbtech/primevue/icons/chevrondown': 'primevue.icons.chevrondown',
    '@fcbtech/primevue/icons/chevronleft': 'primevue.icons.chevronleft',
    '@fcbtech/primevue/icons/chevronright': 'primevue.icons.chevronright',
    '@fcbtech/primevue/icons/chevronup': 'primevue.icons.chevronup',
    '@fcbtech/primevue/icons/exclamationtriangle': 'primevue.icons.exclamationtriangle',
    '@fcbtech/primevue/icons/eye': 'primevue.icons.eye',
    '@fcbtech/primevue/icons/eyeslash': 'primevue.icons.eyeslash',
    '@fcbtech/primevue/icons/filter': 'primevue.icons.filter',
    '@fcbtech/primevue/icons/filterslash': 'primevue.icons.filterslash',
    '@fcbtech/primevue/icons/infocircle': 'primevue.icons.infocircle',
    '@fcbtech/primevue/icons/minus': 'primevue.icons.minus',
    '@fcbtech/primevue/icons/pencil': 'primevue.icons.pencil',
    '@fcbtech/primevue/icons/plus': 'primevue.icons.plus',
    '@fcbtech/primevue/icons/refresh': 'primevue.icons.refresh',
    '@fcbtech/primevue/icons/search': 'primevue.icons.search',
    '@fcbtech/primevue/icons/searchminus': 'primevue.icons.searchminus',
    '@fcbtech/primevue/icons/searchplus': 'primevue.icons.searchplus',
    '@fcbtech/primevue/icons/sortalt': 'primevue.icons.sortalt',
    '@fcbtech/primevue/icons/sortamountdown': 'primevue.icons.sortamountdown',
    '@fcbtech/primevue/icons/sortamountupalt': 'primevue.icons.sortamountupalt',
    '@fcbtech/primevue/icons/spinner': 'primevue.icons.spinner',
    '@fcbtech/primevue/icons/star': 'primevue.icons.star',
    '@fcbtech/primevue/icons/starfill': 'primevue.icons.starfill',
    '@fcbtech/primevue/icons/thlarge': 'primevue.icons.thlarge',
    '@fcbtech/primevue/icons/times': 'primevue.icons.times',
    '@fcbtech/primevue/icons/timescircle': 'primevue.icons.timescircle',
    '@fcbtech/primevue/icons/trash': 'primevue.icons.trash',
    '@fcbtech/primevue/icons/undo': 'primevue.icons.undo',
    '@fcbtech/primevue/icons/upload': 'primevue.icons.upload',
    '@fcbtech/primevue/icons/windowmaximize': 'primevue.icons.windowmaximize',
    '@fcbtech/primevue/icons/windowminimize': 'primevue.icons.windowminimize'
};

const CORE_PASSTHROUGH_DEPENDENCIES = {
    '@fcbtech/primevue/passthrough': 'primevue.passthrough',
    '@fcbtech/primevue/passthrough/tailwind': 'primevue.passthrough.tailwind'
};

const CORE_STYLE_DEPENDENCIES = {
    '@fcbtech/primevue/base/style': 'primevue.base.style',
    '@fcbtech/primevue/basecomponent/style': 'primevue.basecomponent.style',
    '@fcbtech/primevue/accordion/style': 'primevue.accordion.style',
    '@fcbtech/primevue/accordiontab/style': 'primevue.accordiontab.style',
    '@fcbtech/primevue/animateonscroll/style': 'primevue.animateonscroll.style',
    '@fcbtech/primevue/autocomplete/style': 'primevue.autocomplete.style',
    '@fcbtech/primevue/avatar/style': 'primevue.avatar.style',
    '@fcbtech/primevue/avatargroup/style': 'primevue.avatargroup.style',
    '@fcbtech/primevue/badge/style': 'primevue.badge.style',
    '@fcbtech/primevue/badgedirective/style': 'primevue.badgedirective.style',
    '@fcbtech/primevue/baseicon/style': 'primevue.baseicon.style',
    '@fcbtech/primevue/blockui/style': 'primevue.blockui.style',
    '@fcbtech/primevue/breadcrumb/style': 'primevue.breadcrumb.style',
    '@fcbtech/primevue/button/style': 'primevue.button.style',
    '@fcbtech/primevue/buttongroup/style': 'primevue.buttongroup.style',
    '@fcbtech/primevue/calendar/style': 'primevue.calendar.style',
    '@fcbtech/primevue/card/style': 'primevue.card.style',
    '@fcbtech/primevue/carousel/style': 'primevue.carousel.style',
    '@fcbtech/primevue/cascadeselect/style': 'primevue.cascadeselect.style',
    '@fcbtech/primevue/chart/style': 'primevue.chart.style',
    '@fcbtech/primevue/checkbox/style': 'primevue.checkbox.style',
    '@fcbtech/primevue/chip/style': 'primevue.chip.style',
    '@fcbtech/primevue/chips/style': 'primevue.chips.style',
    '@fcbtech/primevue/colorpicker/style': 'primevue.colorpicker.style',
    '@fcbtech/primevue/column/style': 'primevue.column.style',
    '@fcbtech/primevue/columngroup/style': 'primevue.columngroup.style',
    '@fcbtech/primevue/confirmdialog/style': 'primevue.confirmdialog.style',
    '@fcbtech/primevue/confirmpopup/style': 'primevue.confirmpopup.style',
    '@fcbtech/primevue/contextmenu/style': 'primevue.contextmenu.style',
    '@fcbtech/primevue/datatable/style': 'primevue.datatable.style',
    '@fcbtech/primevue/dataview/style': 'primevue.dataview.style',
    '@fcbtech/primevue/dataviewlayoutoptions/style': 'primevue.dataviewlayoutoptions.style',
    '@fcbtech/primevue/deferredcontent/style': 'primevue.deferredcontent.style',
    '@fcbtech/primevue/dialog/style': 'primevue.dialog.style',
    '@fcbtech/primevue/divider/style': 'primevue.divider.style',
    '@fcbtech/primevue/dock/style': 'primevue.dock.style',
    '@fcbtech/primevue/dropdown/style': 'primevue.dropdown.style',
    '@fcbtech/primevue/dynamicdialog/style': 'primevue.dynamicdialog.style',
    '@fcbtech/primevue/editor/style': 'primevue.editor.style',
    '@fcbtech/primevue/fieldset/style': 'primevue.fieldset.style',
    '@fcbtech/primevue/fileupload/style': 'primevue.fileupload.style',
    '@fcbtech/primevue/focustrap/style': 'primevue.focustrap.style',
    '@fcbtech/primevue/galleria/style': 'primevue.galleria.style',
    '@fcbtech/primevue/image/style': 'primevue.image.style',
    '@fcbtech/primevue/inlinemessage/style': 'primevue.inlinemessage.style',
    '@fcbtech/primevue/inplace/style': 'primevue.inplace.style',
    '@fcbtech/primevue/inputgroup/style': 'primevue.inputgroup.style',
    '@fcbtech/primevue/inputgroupaddon/style': 'primevue.inputgroupaddon.style',
    '@fcbtech/primevue/inputmask/style': 'primevue.inputmask.style',
    '@fcbtech/primevue/inputnumber/style': 'primevue.inputnumber.style',
    '@fcbtech/primevue/inputotp/style': 'primevue.inputotp.style',
    '@fcbtech/primevue/inputswitch/style': 'primevue.inputswitch.style',
    '@fcbtech/primevue/inputtext/style': 'primevue.inputtext.style',
    '@fcbtech/primevue/knob/style': 'primevue.knob.style',
    '@fcbtech/primevue/listbox/style': 'primevue.listbox.style',
    '@fcbtech/primevue/megamenu/style': 'primevue.megamenu.style',
    '@fcbtech/primevue/menu/style': 'primevue.menu.style',
    '@fcbtech/primevue/menubar/style': 'primevue.menubar.style',
    '@fcbtech/primevue/message/style': 'primevue.message.style',
    '@fcbtech/primevue/metergroup/style': 'primevue.metergroup.style',
    '@fcbtech/primevue/multiselect/style': 'primevue.multiselect.style',
    '@fcbtech/primevue/orderlist/style': 'primevue.orderlist.style',
    '@fcbtech/primevue/organizationchart/style': 'primevue.organizationchart.style',
    '@fcbtech/primevue/overlaypanel/style': 'primevue.overlaypanel.style',
    '@fcbtech/primevue/paginator/style': 'primevue.paginator.style',
    '@fcbtech/primevue/panel/style': 'primevue.panel.style',
    '@fcbtech/primevue/panelmenu/style': 'primevue.panelmenu.style',
    '@fcbtech/primevue/password/style': 'primevue.password.style',
    '@fcbtech/primevue/picklist/style': 'primevue.picklist.style',
    '@fcbtech/primevue/portal/style': 'primevue.portal.style',
    '@fcbtech/primevue/progressbar/style': 'primevue.progressbar.style',
    '@fcbtech/primevue/progressspinner/style': 'primevue.progressspinner.style',
    '@fcbtech/primevue/radiobutton/style': 'primevue.radiobutton.style',
    '@fcbtech/primevue/rating/style': 'primevue.rating.style',
    '@fcbtech/primevue/ripple/style': 'primevue.ripple.style',
    '@fcbtech/primevue/row/style': 'primevue.row.style',
    '@fcbtech/primevue/scrollpanel/style': 'primevue.scrollpanel.style',
    '@fcbtech/primevue/scrolltop/style': 'primevue.scrolltop.style',
    '@fcbtech/primevue/selectbutton/style': 'primevue.selectbutton.style',
    '@fcbtech/primevue/sidebar/style': 'primevue.sidebar.style',
    '@fcbtech/primevue/skeleton/style': 'primevue.skeleton.style',
    '@fcbtech/primevue/slider/style': 'primevue.slider.style',
    '@fcbtech/primevue/speeddial/style': 'primevue.speeddial.style',
    '@fcbtech/primevue/splitbutton/style': 'primevue.splitbutton.style',
    '@fcbtech/primevue/splitter/style': 'primevue.splitter.style',
    '@fcbtech/primevue/splitterpanel/style': 'primevue.splitterpanel.style',
    '@fcbtech/primevue/stepper/style': 'primevue.stepper.style',
    '@fcbtech/primevue/stepperpanel/style': 'primevue.stepperpanel.style',
    '@fcbtech/primevue/steps/style': 'primevue.steps.style',
    '@fcbtech/primevue/tabmenu/style': 'primevue.tabmenu.style',
    '@fcbtech/primevue/tabpanel/style': 'primevue.tabpanel.style',
    '@fcbtech/primevue/tabview/style': 'primevue.tabview.style',
    '@fcbtech/primevue/tag/style': 'primevue.tag.style',
    '@fcbtech/primevue/terminal/style': 'primevue.terminal.style',
    '@fcbtech/primevue/textarea/style': 'primevue.textarea.style',
    '@fcbtech/primevue/tieredmenu/style': 'primevue.tieredmenu.style',
    '@fcbtech/primevue/timeline/style': 'primevue.timeline.style',
    '@fcbtech/primevue/toast/style': 'primevue.toast.style',
    '@fcbtech/primevue/togglebutton/style': 'primevue.togglebutton.style',
    '@fcbtech/primevue/toolbar/style': 'primevue.toolbar.style',
    '@fcbtech/primevue/tooltip/style': 'primevue.tooltip.style',
    '@fcbtech/primevue/tree/style': 'primevue.tree.style',
    '@fcbtech/primevue/treeselect/style': 'primevue.treeselect.style',
    '@fcbtech/primevue/treetable/style': 'primevue.treetable.style',
    '@fcbtech/primevue/tristatecheckbox/style': 'primevue.tristatecheckbox.style',
    '@fcbtech/primevue/virtualscroller/style': 'primevue.virtualscroller.style'
};

const CORE_DEPENDENCIES = {
    '@fcbtech/primevue/utils': 'primevue.utils',
    '@fcbtech/primevue/api': 'primevue.api',
    '@fcbtech/primevue/config': 'primevue.config',
    '@fcbtech/primevue/base': 'primevue.base',
    '@fcbtech/primevue/usestyle': 'primevue.usestyle',
    ...CORE_STYLE_DEPENDENCIES,
    '@fcbtech/primevue/basedirective': 'primevue.basedirective',
    '@fcbtech/primevue/ripple': 'primevue.ripple',
    '@fcbtech/primevue/portal': 'primevue.portal',
    '@fcbtech/primevue/basecomponent': 'primevue.basecomponent',
    ...CORE_ICON_DEPENDENCIES,
    '@fcbtech/primevue/tooltip': 'primevue.tooltip',
    '@fcbtech/primevue/focustrap': 'primevue.focustrap',
    '@fcbtech/primevue/virtualscroller': 'primevue.virtualscroller',
    '@fcbtech/primevue/confirmationeventbus': 'primevue.confirmationeventbus',
    '@fcbtech/primevue/toasteventbus': 'primevue.toasteventbus',
    '@fcbtech/primevue/overlayeventbus': 'primevue.overlayeventbus',
    '@fcbtech/primevue/dynamicdialogeventbus': 'primevue.dynamicdialogeventbus',
    '@fcbtech/primevue/terminalservice': 'primevue.terminalservice',
    '@fcbtech/primevue/useconfirm': 'primevue.useconfirm',
    '@fcbtech/primevue/usetoast': 'primevue.usetoast',
    '@fcbtech/primevue/usedialog': 'primevue.usedialog',
    '@fcbtech/primevue/button': 'primevue.button',
    '@fcbtech/primevue/inputtext': 'primevue.inputtext',
    '@fcbtech/primevue/inputnumber': 'primevue.inputnumber',
    '@fcbtech/primevue/checkbox': 'primevue.checkbox',
    '@fcbtech/primevue/radiobutton': 'primevue.radiobutton',
    '@fcbtech/primevue/message': 'primevue.message',
    '@fcbtech/primevue/progressbar': 'primevue.progressbar',
    '@fcbtech/primevue/dropdown': 'primevue.dropdown',
    '@fcbtech/primevue/dialog': 'primevue.dialog',
    '@fcbtech/primevue/paginator': 'primevue.paginator',
    '@fcbtech/primevue/tree': 'primevue.tree',
    '@fcbtech/primevue/menu': 'primevue.menu',
    '@fcbtech/primevue/tieredmenu': 'primevue.tieredmenu',
    '@fcbtech/primevue/badge': 'primevue.badge',
    ...CORE_PASSTHROUGH_DEPENDENCIES
};

// dependencies
const GLOBAL_DEPENDENCIES = {
    vue: 'Vue'
};

const GLOBAL_COMPONENT_DEPENDENCIES = {
    ...GLOBAL_DEPENDENCIES,
    ...CORE_DEPENDENCIES
};

// externals
const EXTERNAL = ['vue', 'chart.js/auto', 'quill'];

const EXTERNAL_COMPONENT = [...EXTERNAL, ...Object.keys(CORE_DEPENDENCIES)];

// plugins
const BABEL_PLUGIN_OPTIONS = {
    extensions: ['.js', '.vue'],
    exclude: 'node_modules/**',
    presets: ['@babel/preset-env'],
    plugins: [],
    skipPreflightCheck: true,
    babelHelpers: 'runtime',
    babelrc: false
};

const POSTCSS_PLUGIN_OPTIONS = {
    sourceMap: false
};

const TERSER_PLUGIN_OPTIONS = {
    compress: {
        keep_infinity: true,
        pure_getters: true,
        reduce_funcs: false
    }
};

const PLUGINS = [vue(), postcss(POSTCSS_PLUGIN_OPTIONS), babel(BABEL_PLUGIN_OPTIONS)];

function addEntry(folder, inFile, outFile) {
    const exports = inFile === 'PrimeVue.js' || folder === 'passthrough/tailwind' ? 'named' : 'auto';
    const useCorePlugin = Object.keys(GLOBAL_COMPONENT_DEPENDENCIES).some((d) => d.replace('@fcbtech/primevue/', '') === folder);
    const plugins = PLUGINS;
    const external = EXTERNAL_COMPONENT;
    const inlineDynamicImports = true;

    const input = `components/lib/${folder}/${inFile}`;
    const output = `dist/${folder}/${outFile}`;

    const getEntry = (isMinify) => {
        return {
            input,
            plugins: [...plugins, isMinify && terser(TERSER_PLUGIN_OPTIONS), useCorePlugin && corePlugin()],
            external,
            inlineDynamicImports
        };
    };

    const get_CJS_ESM = (isMinify) => {
        return {
            ...getEntry(isMinify),
            output: [
                {
                    format: 'cjs',
                    file: `${output}.cjs${isMinify ? '.min' : ''}.js`,
                    exports
                },
                {
                    format: 'esm',
                    file: `${output}.esm${isMinify ? '.min' : ''}.js`,
                    exports
                }
            ]
        };
    };

    const get_IIFE = (isMinify) => {
        return {
            ...getEntry(isMinify),
            output: [
                {
                    format: 'iife',
                    name: 'primevue.' + folder.replaceAll('/', '.'),
                    file: `${output}${isMinify ? '.min' : ''}.js`,
                    globals: GLOBAL_COMPONENT_DEPENDENCIES,
                    exports
                }
            ]
        };
    };

    entries.push(get_CJS_ESM());
    entries.push(get_IIFE());

    // Minify
    entries.push(get_CJS_ESM(true));
    entries.push(get_IIFE(true));
}

function corePlugin() {
    return {
        name: 'corePlugin',
        generateBundle(outputOptions, bundle) {
            const { name, format } = outputOptions;

            if (format === 'iife') {
                Object.keys(bundle).forEach((id) => {
                    const chunk = bundle[id];
                    const folderName = name.replace('primevue.', '').replaceAll('.', '/');
                    const filePath = `./dist/core/core${id.indexOf('.min.js') > 0 ? '.min.js' : '.js'}`;

                    core[filePath] ? (core[filePath][folderName] = chunk.code) : (core[filePath] = { [`${folderName}`]: chunk.code });
                });
            }
        }
    };
}

function addCore() {
    const lastEntry = entries[entries.length - 1];

    lastEntry.plugins = [
        ...lastEntry.plugins,
        {
            name: 'coreMergePlugin',
            generateBundle() {
                Object.entries(core).forEach(([filePath, value]) => {
                    const code = Object.keys(CORE_DEPENDENCIES).reduce((val, d) => {
                        const name = d.replace('@fcbtech/primevue/', '');

                        val += value[name] + '\n';

                        return val;
                    }, '');

                    fs.outputFile(path.resolve(__dirname, filePath), code, {}, function (err) {
                        if (err) {
                            // eslint-disable-next-line no-console
                            return console.error(err);
                        }
                    });
                });
            }
        }
    ];
}

function addSFC() {
    fs.readdirSync(path.resolve(__dirname, './components/lib'), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, './components/lib/' + folderName)).forEach((file) => {
                let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();

                if (/\.vue$/.test(file) && name === folderName) {
                    addEntry(folderName, file, name);
                }
            });
        });
}

function addIcon() {
    fs.readdirSync(path.resolve(__dirname, './components/lib/icons'), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, './components/lib/icons/' + folderName)).forEach((file) => {
                if (/\.vue$/.test(file)) {
                    addEntry('icons/' + folderName, 'index.vue', 'index');
                }
            });
        });
}

function addStyle() {
    fs.readdirSync(path.resolve(__dirname, './components/lib'), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            try {
                fs.readdirSync(path.resolve(__dirname, './components/lib/' + folderName + '/style')).forEach((file) => {
                    if (/\.js$/.test(file)) {
                        let name = file.split(/(.js)$/)[0].toLowerCase();

                        addEntry(folderName + '/style', file, name);
                    }
                });
            } catch {}
        });
}

function addDirectives() {
    addEntry('basedirective', 'BaseDirective.js', 'basedirective');
    addEntry('badgedirective', 'BadgeDirective.js', 'badgedirective');
    addEntry('ripple', 'Ripple.js', 'ripple');
    addEntry('tooltip', 'Tooltip.js', 'tooltip');
    addEntry('focustrap', 'FocusTrap.js', 'focustrap');
    addEntry('styleclass', 'StyleClass.js', 'styleclass');
    addEntry('animateonscroll', 'AnimateOnScroll.js', 'animateonscroll');
}

function addConfig() {
    addEntry('config', 'PrimeVue.js', 'config');
}

function addPassThrough() {
    addEntry('passthrough', 'index.js', 'index');
    addEntry('passthrough/tailwind', 'index.js', 'index');
}

function addUtils() {
    addEntry('utils', 'Utils.js', 'utils');
}

function addApi() {
    addEntry('api', 'Api.js', 'api');
}

function addBase() {
    addEntry('base', 'Base.js', 'base');
}

function addServices() {
    addEntry('confirmationservice', 'ConfirmationService.js', 'confirmationservice');
    addEntry('confirmationeventbus', 'ConfirmationEventBus.js', 'confirmationeventbus');
    addEntry('useconfirm', 'UseConfirm.js', 'useconfirm');
    addEntry('toastservice', 'ToastService.js', 'toastservice');
    addEntry('toasteventbus', 'ToastEventBus.js', 'toasteventbus');
    addEntry('overlayeventbus', 'OverlayEventBus.js', 'overlayeventbus');
    addEntry('usetoast', 'UseToast.js', 'usetoast');
    addEntry('usestyle', 'UseStyle.js', 'usestyle');
    addEntry('terminalservice', 'TerminalService.js', 'terminalservice');
    addEntry('usedialog', 'UseDialog.js', 'usedialog');
    addEntry('dialogservice', 'DialogService.js', 'dialogservice');
    addEntry('dynamicdialogeventbus', 'DynamicDialogEventBus.js', 'dynamicdialogeventbus');
}

function addPackageJson() {
    const outputDir = 'dist';
    const packageJson = `{
    "name": "@fcbtech/primevue",
    "version": "${pkg.version}",
    "private": false,
    "author": "Faizal Mahmood",
    "description": "PrimeVue is an open source UI library for Vue featuring a rich set of 80+ components, a theme designer, various theme alternatives such as Material, Bootstrap, Tailwind, premium templates and professional support. In addition, it integrates with PrimeBlock, which has 370+ ready to use UI blocks to build spectacular applications in no time.",
    "homepage": "https://primevue.org/",
    "repository": {
        "type": "git",
        "url": "https://github.com/fcbtech/primevue.git"
    },
    "license": "MIT",
    "publishConfig": {
        "@fcbtech:registry": "https://npm.pkg.github.com"
    },
    "bugs": {
        "url": "https://github.com/primefaces/primevue/issues"
    },
    "keywords": [
        "primevue",
        "vue",
        "vue.js",
        "vue2",
        "vue3",
        "ui library",
        "component library",
        "material",
        "bootstrap",
        "fluent",
        "tailwind",
        "unstyled",
        "passthrough"
    ],
    "web-types": "./web-types.json",
    "vetur": {
        "tags": "./vetur-tags.json",
        "attributes": "./vetur-attributes.json"
    },
    "peerDependencies": {
        "vue": "^3.0.0"
    }
}`;

    !fs.existsSync(outputDir) && fs.mkdirSync(outputDir);
    fs.writeFileSync(path.resolve(outputDir, 'package.json'), packageJson);
}

addUtils();
addStyle();
addBase();
addApi();
addConfig();
addDirectives();
addServices();
addSFC();
addIcon();
addPassThrough();
addCore();
addPackageJson();

export default entries;
