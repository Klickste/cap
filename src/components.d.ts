/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CapTextFamily, CapTextLeading, CapTextLevel, CapTextWeight } from "./types";
export namespace Components {
    interface CapText {
        /**
          * Description...
         */
        "contentAfter": string;
        /**
          * Description...
         */
        "contentBefore": string;
        /**
          * Description...
         */
        "ellipsis": boolean;
        /**
          * Description...
         */
        "family": CapTextFamily;
        /**
          * Description...
         */
        "italic": boolean;
        /**
          * Description...
         */
        "leading": CapTextLeading;
        /**
          * Description...
         */
        "level": CapTextLevel;
        /**
          * Description...
         */
        "weight": CapTextWeight;
    }
}
declare global {
    interface HTMLCapTextElement extends Components.CapText, HTMLStencilElement {
    }
    var HTMLCapTextElement: {
        prototype: HTMLCapTextElement;
        new (): HTMLCapTextElement;
    };
    interface HTMLElementTagNameMap {
        "cap-text": HTMLCapTextElement;
    }
}
declare namespace LocalJSX {
    interface CapText {
        /**
          * Description...
         */
        "contentAfter"?: string;
        /**
          * Description...
         */
        "contentBefore"?: string;
        /**
          * Description...
         */
        "ellipsis"?: boolean;
        /**
          * Description...
         */
        "family"?: CapTextFamily;
        /**
          * Description...
         */
        "italic"?: boolean;
        /**
          * Description...
         */
        "leading"?: CapTextLeading;
        /**
          * Description...
         */
        "level"?: CapTextLevel;
        /**
          * Description...
         */
        "weight"?: CapTextWeight;
    }
    interface IntrinsicElements {
        "cap-text": CapText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cap-text": LocalJSX.CapText & JSXBase.HTMLAttributes<HTMLCapTextElement>;
        }
    }
}
