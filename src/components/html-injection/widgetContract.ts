import { LocalStyles } from "@paperbits/common/styles";
import { Contract } from "@paperbits/common";
import { SizeStylePluginConfig } from "@paperbits/styles/plugins";

/**
 * Data contact (data layer) that defines how widget configuration gets persisted.
 */
export interface HTMLInjectionWidgetContract extends Contract {
    htmlCode: string;
    htmlCodeSizeStyles: SizeStylePluginConfig;
    inheritStyling: boolean;
    styles: LocalStyles;
}