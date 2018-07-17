/**
 * An enum of the messages we can send to xi-core.
 */
export enum CoreMethod {
  ADD_SELECTION_ABOVE = 'add_selection_above',
  CLICK = 'click',
  CLIENT_STARTED = 'client_started',
  DELETE_BACKWARD = 'delete_backward',
  DELETE_FORWARD = 'delete_forward',
  DELETE_TO_BEGINNING_OF_LINE = 'delete_to_beginning_of_line',
  DELETE_TO_END_OF_PARAGRAPH = 'delete_to_end_of_paragraph',
  DELETE_WORD_BACKWARD = 'delete_word_backward',
  DELETE_WORD_FORWARD = 'delete_word_forward',
  DRAG = 'drag',
  EDIT = 'edit',
  INSERT = 'insert',
  INSERT_NEWLINE = 'insert_newline',
  INSERT_TAB = 'insert_tab',
  MOVE_DOWN = 'move_down',
  MOVE_DOWN_AND_MODIFY_SELECTION = 'move_down_and_modify_selection',
  MOVE_LEFT = 'move_left',
  MOVE_LEFT_AND_MODIFY_SELECTION = 'move_left_and_modify_selection',
  MOVE_RIGHT = 'move_right',
  MOVE_RIGHT_AND_MODIFY_SELECTION = 'move_right_and_modify_selection',
  MOVE_TO_BEGINNING_OF_DOCUMENT = 'move_to_beginning_of_document',
  MOVE_TO_BEGINNING_OF_DOCUMENT_AND_MODIFY_SELECTION = 'move_to_beginning_of_document_and_modify_selection',
  MOVE_TO_BEGINNING_OF_PARAGRAPH = 'move_to_beginning_of_paragraph',
  MOVE_TO_END_OF_DOCUMENT = 'move_to_end_of_document',
  MOVE_TO_END_OF_DOCUMENT_AND_MODIFY_SELECTION = 'move_to_end_of_document_and_modify_selection',
  MOVE_TO_END_OF_PARAGRAPH = 'move_to_end_of_paragraph',
  MOVE_TO_LEFT_END_OF_LINE = 'move_to_left_end_of_line',
  MOVE_TO_LEFT_END_OF_LINE_AND_MODIFY_SELECTION = 'move_to_left_end_of_line_and_modify_selection',
  MOVE_TO_RIGHT_END_OF_LINE = 'move_to_right_end_of_line',
  MOVE_TO_RIGHT_END_OF_LINE_AND_MODIFY_SELECTION = 'move_to_right_end_of_line_and_modify_selection',
  MOVE_UP = 'move_up',
  MOVE_UP_AND_MODIFY_SELECTION = 'move_up_and_modify_selection',
  MOVE_WORD_LEFT = 'move_word_left',
  MOVE_WORD_LEFT_AND_MODIFY_SELECTION = 'move_word_left_and_modify_selection',
  MOVE_WORD_RIGHT = 'move_word_right',
  MOVE_WORD_RIGHT_AND_MODIFY_SELECTION = 'move_word_right_and_modify_selection',
  NEW_VIEW = 'new_view',
  PAGE_DOWN_AND_MODIFY_SELECTION = 'page_down_and_modify_selection',
  PAGE_UP_AND_MODIFY_SELECTION = 'page_up_and_modify_selection',
  REDO = 'redo',
  REQUEST_LINES = 'request_lines',
  SCROLL = 'scroll',
  SCROLL_PAGE_DOWN = 'scroll_page_down',
  SCROLL_PAGE_UP = 'scroll_page_up',
  SET_THEME = 'set_theme',
  SELECT_ALL = 'select_all',
  TRANSPOSE = 'transpose',
  UNDO = 'undo',
  YANK = 'yank',
}

/**
 * An enum of the responses we may receive from xi-core.
 */
export enum CoreResponse {
  AVAILABLE_PLUGINS = 'available_plugins',
  AVAILABLE_THEMES = 'available_themes',
  CONFIG_CHANGED = 'config_changed',
  DEF_STYLE = 'def_style',
  SCROLL_TO = 'scroll_to',
  PLUGIN_STARTED = 'plugin_started',
  THEME_CHANGED = 'theme_changed',
  UPDATE = 'update',
}
