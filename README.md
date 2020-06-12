# My personal settings

# Snippets:

```json
{
  "React Component": {
    "prefix": "rn",
    "body": [
      "import React from 'react'",
      "import * as Styled from './styles'",
      "",
      "const ${3:${TM_DIRECTORY/^.+\\\\(.*)$/$1/}} = () => {",
      "",
      "  return <Styled.${1:Container}>$2</Styled.${1:Container}>",
      "}",
      "",
      "export default ${3:${TM_DIRECTORY/^.+\\\\(.*)$/$1/}}",
      ""
    ],
    "description": "Create a base component of react"
  },
  "Styled Components ReactJS": {
    "prefix": "styled",
    "body": [
      "import styled from 'styled-components'",
      "",
      "export const ${1:Container} = styled.${2:div}`$3`",
      ""
    ],
    "description": "Create a base styled components of ReactJS"
  },
  "Styled Components ReactJS item": {
    "prefix": "sc",
    "body": ["", "export const ${1:Container} = styled.${2:div}`$3`", ""],
    "description": "Create a line styled components of ReactJS"
  },
  "Styled Components react-native": {
    "prefix": "styledn",
    "body": [
      "import styled from 'styled-components/native'",
      "",
      "export const ${1:Container} = styled.${2:View}`$3`",
      ""
    ],
    "description": "Create a base styled components of react-native"
  },
  "Styled Components react-native item": {
    "prefix": "scn",
    "body": ["", "export const ${1:Container} = styled.${2:View}`$3`", ""],
    "description": "Create a base styled components of react-native"
  }
}
```

# Prettier config:
```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "bracketSpacing": true,
  "printWidth": 100,
  "arrowParens": "avoid"
}
```

# Keybindings:

```json
// Place your key bindings in this file to override the defaults
[
  {
    "key": "alt+c",
    "command": "editor.action.clipboardCopyAction",
    "when": "textInputFocus"
  },
  {
    "key": "alt+v",
    "command": "editor.action.clipboardPasteAction",
    "when": "textInputFocus && !editorReadonly"
  },
  {
    "key": "ctrl+s",
    "command": "workbench.action.files.saveAll",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+k s",
    "command": "-workbench.action.files.saveAll"
  },

  {
    "key": "alt+s",
    "command": "editor.action.insertSnippet",
    "when": "editorTextFocus",
    "args": {
      "snippet": "const [${TM_SELECTED_TEXT},set${TM_SELECTED_TEXT/(.*)/${1:/capitalize}/}] = useState($2)"
    }
  },
  {
    "key": "ctrl+shift+i",
    "command": "editor.action.sourceAction",
    "args": {
      "kind": "source.addMissingImports",
      "apply": "first"
    }
  }
]

```

