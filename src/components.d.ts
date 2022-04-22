/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FamilyTypes, LeadingTypes, TextHeadingTypes, TextLevelTypes, TextWeightTypes } from "./types";
export namespace Components {
    interface CapRichText {
        /**
          * Description...
         */
        "family": FamilyTypes;
        /**
          * Description...
         */
        "leading": LeadingTypes;
    }
    interface CapText {
        /**
          * Description...
         */
        "dataAppend": string;
        /**
          * Description...
         */
        "dataPrepend": string;
        /**
          * Description...
         */
        "ellipsis": boolean;
        /**
          * Description...
         */
        "family": FamilyTypes;
        /**
          * Description...
         */
        "heading": TextHeadingTypes;
        /**
          * Description...
         */
        "italic": boolean;
        /**
          * Description...
         */
        "leading": LeadingTypes;
        /**
          * Description...
         */
        "level": TextLevelTypes;
        /**
          * Description...
         */
        "noWrap": boolean;
        /**
          * Description...
         */
        "paragraph": boolean;
        /**
          * Description...
         */
        "weight": TextWeightTypes;
    }
}
declare global {
    interface HTMLCapRichTextElement extends Components.CapRichText, HTMLStencilElement {
    }
    var HTMLCapRichTextElement: {
        prototype: HTMLCapRichTextElement;
        new (): HTMLCapRichTextElement;
    };
    interface HTMLCapTextElement extends Components.CapText, HTMLStencilElement {
    }
    var HTMLCapTextElement: {
        prototype: HTMLCapTextElement;
        new (): HTMLCapTextElement;
    };
    interface HTMLElementTagNameMap {
        "cap-rich-text": HTMLCapRichTextElement;
        "cap-text": HTMLCapTextElement;
    }
}
declare namespace LocalJSX {
    interface CapRichText {
        /**
          * Description...
         */
        "family"?: FamilyTypes;
        /**
          * Description...
         */
        "leading"?: LeadingTypes;
    }
    interface CapText {
        /**
          * Description...
         */
        "dataAppend"?: string;
        /**
          * Description...
         */
        "dataPrepend"?: string;
        /**
          * Description...
         */
        "ellipsis"?: boolean;
        /**
          * Description...
         */
        "family"?: FamilyTypes;
        /**
          * Description...
         */
        "heading"?: TextHeadingTypes;
        /**
          * Description...
         */
        "italic"?: boolean;
        /**
          * Description...
         */
        "leading"?: LeadingTypes;
        /**
          * Description...
         */
        "level"?: TextLevelTypes;
        /**
          * Description...
         */
        "noWrap"?: boolean;
        /**
          * Description...
         */
        "paragraph"?: boolean;
        /**
          * Description...
         */
        "weight"?: TextWeightTypes;
    }
    interface IntrinsicElements {
        "cap-rich-text": CapRichText;
        "cap-text": CapText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cap-rich-text": LocalJSX.CapRichText & JSXBase.HTMLAttributes<HTMLCapRichTextElement>;
            "cap-text": LocalJSX.CapText & JSXBase.HTMLAttributes<HTMLCapTextElement>;
        }
    }
}
