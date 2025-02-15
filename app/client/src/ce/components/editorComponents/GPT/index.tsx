import type { CodeEditorExpected } from "components/editorComponents/CodeEditor";
import type {
  FieldEntityInformation,
  TEditorModes,
} from "components/editorComponents/CodeEditor/EditorConfig";
import type { EntityNavigationData } from "selectors/navigationSelectors";
import React from "react";

export interface TAIWrapperProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  currentValue: string;
  close: () => void;
  update?: (...args: any) => void;
  triggerContext?: CodeEditorExpected;
  enableAIAssistance: boolean;
  dataTreePath?: string;
  mode: TEditorModes;
  entity: FieldEntityInformation;
  entitiesForNavigation: EntityNavigationData;
}

export function AIWindow(props: TAIWrapperProps) {
  const { children } = props;
  //eslint-disable-next-line
  return <>{children}</>;
}
