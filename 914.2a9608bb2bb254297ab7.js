(window.webpackJsonp=window.webpackJsonp||[]).push([[914],{aXsO:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';\nimport {Observable, of} from 'rxjs';\nimport {map, startWith, switchMap} from 'rxjs/operators';\n\nimport {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\n\nclass User {\n    constructor(\n        readonly firstName: string,\n        readonly lastName: string,\n        readonly avatarUrl: string | null = null,\n        readonly disabled: boolean = false,\n    ) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst DATA: readonly User[] = [\n    new User('Roman', 'Sedov', 'http://marsibarsi.me/images/1x1small.jpg'),\n    new User('Alex', 'Inkin', avatar),\n    new User('Gabriel Jos\xe9', 'de la Concordia \xabGabo\xbb Garc\xeda M\xe1rquez'),\n];\n\n@Component({\n    selector: 'tui-input-example-8',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputExample8 {\n    readonly control = new FormControl('');\n\n    firstName = '';\n    lastName = '';\n\n    readonly items$ = this.control.valueChanges.pipe(\n        startWith(''),\n        switchMap(value =>\n            this.request(value).pipe(\n                map(response => {\n                    if (response.length === 1 && String(response[0]) === value) {\n                        this.onClick(response[0]);\n\n                        return [];\n                    } else {\n                        return response;\n                    }\n                }),\n            ),\n        ),\n        startWith(DATA),\n    );\n\n    onClick({lastName, firstName}: User): void {\n        this.lastName = lastName;\n        this.firstName = firstName;\n    }\n\n    // Request imitation\n    private request(query: string): Observable<readonly User[]> {\n        return of(DATA.filter(item => TUI_DEFAULT_MATCHER(item, query)));\n    }\n}\n"}}]);