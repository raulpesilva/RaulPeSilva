{
    "workbench.iconTheme": "material-icon-theme",
    "workbench.startupEditor": "newUntitledFile",
    "workbench.colorTheme": "Eva Dark Bold",
    "python.jediEnabled": false,
    "editor.lineNumbers": "relative",
    "vim.easymotion": true,
    "vim.sneak": true,
    "vim.incsearch": true,
    "vim.useSystemClipboard": true,
    "vim.useCtrlKeys": true,
    "vim.hlsearch": true,
    "vim.insertModeKeyBindings": [
        {
        "before": ["j", "j"],
        "after": ["<Esc>"]
        }
    ],
    "vim.normalModeKeyBindingsNonRecursive": [
        {
        "before": ["<leader>", "r","e"],
        "after": ["v", "e","d", "i",]
        },
        {
        "before": ["<leader>", "d"],
        "after": ["d", "d"]
        },
        {
        "before": ["<C-n>"],
        "commands": [":nohl"]
        },
        {
        "before": ["Z", "Z"],
        "commands": [":wq"]
        },
        {
        "before": ["leader","leader", "w"],
        "commands": ["workbench.action.files.save",]
        },
        {
        "before": [">"],
        "commands": ["editor.action.indentLines"]
        },
        {
        "before": ["<"],
        "commands": ["editor.action.outdentLines"]
        },
        {
        "before": ["<leader>", ";"],
        "commands": [":s/$/;/"]
        },
        // {
        // "before": [":"],
        // "commands": ["workbench.action.showCommands", ]
        // }
    ],
    "vim.leader": "<space>",
    "vim.handleKeys": {
        "<C-a>": true,
        "<C-f>": false 
    },
    "editor.detectIndentation": false,
    "workbench.activityBar.visible": true,
    "workbench.statusBar.visible": true,
    "files.associations": {
        "*.html": "html"
    }
}
