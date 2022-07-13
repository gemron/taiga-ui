(window.webpackJsonp=window.webpackJsonp||[]).push([[752],{"50F7":function(e,n,i){"use strict";i.r(n),n.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiFileLike} from '@taiga-ui/kit';\nimport {Subject} from 'rxjs';\n\n@Component({\n    selector: 'tui-input-files-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputFilesExample1 {\n    readonly control = new FormControl();\n    readonly rejectedFiles$ = new Subject<TuiFileLike | null>();\n\n    onReject(file: TuiFileLike | readonly TuiFileLike[]): void {\n        this.rejectedFiles$.next(file as TuiFileLike);\n    }\n\n    removeFile(): void {\n        this.control.setValue(null);\n    }\n\n    clearRejected(): void {\n        this.rejectedFiles$.next(null);\n    }\n}\n"}}]);