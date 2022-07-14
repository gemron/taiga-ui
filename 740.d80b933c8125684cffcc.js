(window.webpackJsonp=window.webpackJsonp||[]).push([[740],{Zpy4:function(e,n,i){"use strict";i.r(n),n.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiFileLike} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-files-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputFilesExample2 {\n    readonly control = new FormControl([]);\n    rejectedFiles: readonly TuiFileLike[] = [];\n\n    onReject(files: TuiFileLike | readonly TuiFileLike[]): void {\n        this.rejectedFiles = [...this.rejectedFiles, ...(files as TuiFileLike[])];\n    }\n\n    removeFile({name}: File): void {\n        this.control.setValue(\n            this.control.value.filter((current: File) => current.name !== name),\n        );\n    }\n\n    clearRejected({name}: TuiFileLike): void {\n        this.rejectedFiles = this.rejectedFiles.filter(\n            rejected => rejected.name !== name,\n        );\n    }\n}\n"}}]);