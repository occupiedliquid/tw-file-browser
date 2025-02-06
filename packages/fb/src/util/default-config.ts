import { FbActions } from "@/action-definitions/index";
import { FileBrowserProps } from "@/types/file-browser.types";
import { FbIconName, SortOrder } from "./enums";

export type FbConfig = Pick<
	FileBrowserProps,
	| "fileActions"
	| "onFileAction"
	| "thumbnailGenerator"
	| "doubleClickDelay"
	| "disableSelection"
	| "disableDefaultFileActions"
	| "disableEssentailFileActions"
	| "hideToolbarInfo"
	| "forceEnableOpenParent"
	| "defaultSortActionId"
	| "defaultFileViewActionId"
	| "defaultSortOrder"
	| "clearSelectionOnOutsideClick"
	| "fileActionGroups"
	| "i18n"
>;

export const defaultConfig: FbConfig = {
	fileActions: null,
	onFileAction: null,
	thumbnailGenerator: null,
	doubleClickDelay: 300,
	disableSelection: false,
	disableDefaultFileActions: false,
	disableEssentailFileActions: false,
	forceEnableOpenParent: false,
	hideToolbarInfo: false,
	defaultSortActionId: FbActions.SortFilesByName.id,
	defaultFileViewActionId: FbActions.EnableListView.id,
	defaultSortOrder: SortOrder.ASC,
	clearSelectionOnOutsideClick: true,
	fileActionGroups: {
		Options: {
			sortOrder: 4,
			icon: FbIconName.config,
			tooltip: "詳細設定",
		},
		Sort: {
			sortOrder: 3,
			icon: FbIconName.sort,
			tooltip: "並び替え",
		},
		View: {
			sortOrder: 2,
			icon: FbIconName.view,
			tooltip: "表示方法",
		},
		Add: {
			sortOrder: 0,
			icon: FbIconName.plus,
			tooltip: "新規作成",
		},
		Actions: {
			sortOrder: -1,
			icon: FbIconName.menu,
			tooltip: "ファイルアクション",
		},
		OpenOptions: {
			sortOrder: 1,
			icon: FbIconName.openOptions,
			tooltip: "アプリで開く",
		},
	},
	i18n: {},
};

export const setFbDefaults = (config: Partial<FbConfig>) => {
	for (const key of Object.keys(defaultConfig)) {
		if (key in config) {
			defaultConfig[key] = config[key as keyof FbConfig] as any;
		}
	}
};
